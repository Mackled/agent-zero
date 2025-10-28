// File browser modal component
function fileBrowserModalComponent() {
    return {
        isOpen: false,
        isLoading: false,
        browser: {
            title: 'Working Directory Browser',
            currentPath: '',
            entries: [],
            sortBy: 'name',
            sortDirection: 'asc'
        },
        
        init() {
            // Initialize browser properties
            this.browser.currentPath = './';
        },
        
        openModal() {
            this.isOpen = true;
            this.loadDirectory(this.browser.currentPath);
        },
        
        closeModal() {
            this.isOpen = false;
        },
        
        handleClose() {
            this.closeModal();
        },
        
        async loadDirectory(path) {
            this.isLoading = true;
            try {
                // In a real implementation, this would fetch from the backend
                // For now, we'll simulate with an API call
                const response = await fetch('/get_work_dir_files', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ path: path })
                });
                
                if (response.ok) {
                    const data = await response.json();
                    this.browser.entries = data.entries || [];
                    this.browser.currentPath = data.path || path;
                } else {
                    console.error('Failed to load directory');
                }
            } catch (error) {
                console.error('Error loading directory:', error);
            } finally {
                this.isLoading = false;
            }
        },
        
        navigateToFolder(folderPath) {
            this.loadDirectory(folderPath);
        },
        
        navigateUp() {
            const pathParts = this.browser.currentPath.split('/');
            pathParts.pop(); // Remove current folder
            pathParts.pop(); // Remove parent folder, leaving path to grandparent
            if (pathParts.length > 0) {
                const newPath = pathParts.join('/') + '/';
                this.loadDirectory(newPath);
            } else {
                // At root, don't go further up
            }
        },
        
        async downloadFile(file) {
            // In a real implementation, this would download the file
            try {
                const response = await fetch(`/download_work_dir_file?path=${encodeURIComponent(file.path)}`);
                if (response.ok) {
                    const blob = await response.blob();
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = file.name;
                    document.body.appendChild(a);
                    a.click();
                    window.URL.revokeObjectURL(url);
                    document.body.removeChild(a);
                } else {
                    console.error('Failed to download file');
                }
            } catch (error) {
                console.error('Error downloading file:', error);
            }
        },
        
        async deleteFile(file) {
            if (confirm(`Are you sure you want to delete "${file.name}"?`)) {
                try {
                    const response = await fetch('/delete_work_dir_file', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ path: file.path })
                    });
                    
                    if (response.ok) {
                        // Remove the file from the UI
                        this.browser.entries = this.browser.entries.filter(f => f.path !== file.path);
                    } else {
                        console.error('Failed to delete file');
                    }
                } catch (error) {
                    console.error('Error deleting file:', error);
                }
            }
        },
        
        async handleFileUpload(event) {
            const files = event.target.files;
            if (files.length === 0) return;
            
            const formData = new FormData();
            for (let i = 0; i < files.length; i++) {
                formData.append('files', files[i]);
            }
            
            try {
                const response = await fetch('/upload_work_dir_files', {
                    method: 'POST',
                    body: formData
                });
                
                if (response.ok) {
                    // Reload the directory after upload
                    this.loadDirectory(this.browser.currentPath);
                } else {
                    console.error('Failed to upload files');
                }
            } catch (error) {
                console.error('Error uploading files:', error);
            }
        },
        
        sortFiles(files) {
            if (!files || !Array.isArray(files)) return [];
            
            return [...files].sort((a, b) => {
                let result = 0;
                
                // Directories first
                if (a.is_dir && !b.is_dir) return -1;
                if (!a.is_dir && b.is_dir) return 1;
                
                // Then sort by the selected field
                if (this.browser.sortBy === 'name') {
                    result = a.name.localeCompare(b.name);
                } else if (this.browser.sortBy === 'size') {
                    result = (a.size || 0) - (b.size || 0);
                } else if (this.browser.sortBy === 'date') {
                    result = new Date(a.modified) - new Date(b.modified);
                }
                
                // Apply direction
                return this.browser.sortDirection === 'asc' ? result : -result;
            });
        },
        
        toggleSort(field) {
            if (this.browser.sortBy === field) {
                // Toggle direction if clicking the same field
                this.browser.sortDirection = this.browser.sortDirection === 'asc' ? 'desc' : 'asc';
            } else {
                // Set new field and default to ascending
                this.browser.sortBy = field;
                this.browser.sortDirection = 'asc';
            }
            
            // Re-sort the files
            this.browser.entries = this.sortFiles(this.browser.entries);
        },
        
        formatDate(dateString) {
            if (!dateString) return '';
            const date = new Date(dateString);
            return date.toLocaleString();
        },
        
        formatFileSize(bytes) {
            if (bytes === undefined || bytes === null) return '';
            if (bytes === 0) return '0 Bytes';
            
            const k = 1024;
            const sizes = ['Bytes', 'KB', 'MB', 'GB'];
            const i = Math.floor(Math.log(bytes) / Math.log(k));
            
            return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
        },
        
        isArchive(filename) {
            const archiveExtensions = ['.zip', '.rar', '.7z', '.tar', '.gz', '.bz2', '.xz'];
            return archiveExtensions.some(ext => filename.toLowerCase().endsWith(ext));
        }
    };
}

// Register the component globally so it can be used in templates
if (!window.fileBrowserModalProxy) {
    window.fileBrowserModalProxy = fileBrowserModalComponent();
}