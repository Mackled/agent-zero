// Settings modal component
function settingsModalComponent() {
    return {
        isOpen: false,
        activeTab: 'agent', // Default to agent settings
        settings: {
            title: 'Settings',
            buttons: []
        },
        
        init() {
            // Initialize settings if not already done
            if (!this.settings.buttons.length) {
                this.settings.buttons = [
                    { id: 'save', title: 'Save Settings', classes: 'btn btn-ok btn-field' },
                    { id: 'cancel', title: 'Cancel', classes: 'btn btn-cancel' }
                ];
            }
        },
        
        openModal() {
            this.isOpen = true;
        },
        
        closeModal() {
            this.isOpen = false;
        },
        
        handleCancel() {
            // Add any cleanup logic here
            this.closeModal();
        },
        
        handleButton(buttonId) {
            if (buttonId === 'save') {
                // Implement save logic
                this.saveSettings();
            } else if (buttonId === 'cancel') {
                this.handleCancel();
            }
        },
        
        saveSettings() {
            // Implement actual save logic
            console.log('Saving settings...');
            // In a real implementation, this would send settings to the backend
            this.closeModal();
        },
        
        switchTab(tabName) {
            this.activeTab = tabName;
        },
        
        get filteredSections() {
            // This would filter sections based on active tab in a real implementation
            return []; 
        }
    };
}

// Register the component globally so it can be used in templates
if (!window.settingsModalProxy) {
    window.settingsModalProxy = settingsModalComponent();
}