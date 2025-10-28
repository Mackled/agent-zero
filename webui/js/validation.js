// Error handling and validation system for Ayla Agent UI

// Global error handler
window.addEventListener('error', function(e) {
    console.error('Global error caught:', e.error);
    // Optionally show error in UI
});

// Promise rejection handler
window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
    e.preventDefault();
});

// Validation utilities
const AylaValidator = {
    // Email validation
    isEmail: function(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },
    
    // URL validation
    isUrl: function(url) {
        try {
            new URL(url);
            return true;
        } catch (e) {
            return false;
        }
    },
    
    // Check if string is not empty (after trimming)
    isNotEmpty: function(str) {
        return typeof str === 'string' && str.trim().length > 0;
    },
    
    // Check if value is a valid number
    isNumber: function(value) {
        return !isNaN(parseFloat(value)) && isFinite(value);
    },
    
    // Validate file size (in bytes)
    isValidFileSize: function(fileSize, maxSizeInMB = 100) {
        const maxSizeInBytes = maxSizeInMB * 1024 * 1024; // Convert MB to bytes
        return fileSize <= maxSizeInBytes;
    },
    
    // Validate file type
    isValidFileType: function(fileName, allowedTypes = []) {
        if (allowedTypes.length === 0) {
            // If no specific types are provided, allow common file types
            allowedTypes = ['txt', 'pdf', 'doc', 'docx', 'xls', 'xlsx', 'csv', 'json', 'md', 'html', 'jpg', 'jpeg', 'png', 'gif'];
        }
        
        const fileExtension = fileName.split('.').pop().toLowerCase();
        return allowedTypes.includes(fileExtension);
    }
};

// Enhanced fetch with error handling
async function apiCall(url, options = {}) {
    try {
        // Set default options
        const config = {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            },
            ...options
        };
        
        // Add CSRF token if available
        if (window.csrfToken) {
            config.headers['X-CSRF-TOKEN'] = window.csrfToken;
        }
        
        const response = await fetch(url, config);
        
        // Check if response is ok (status 200-299)
        if (!response.ok) {
            const errorMessage = `HTTP error! Status: ${response.status}`;
            throw new Error(errorMessage);
        }
        
        // Try to parse JSON response
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            return await response.json();
        } else {
            return await response.text();
        }
    } catch (error) {
        console.error('API call failed:', error);
        throw error; // Re-throw so calling code can handle it
    }
}

// Export for use in other modules if needed
window.AylaValidator = AylaValidator;
window.apiCall = apiCall;