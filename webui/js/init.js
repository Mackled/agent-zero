// Main initialization script for Ayla Agent UI
// This loads all necessary components in the correct order

document.addEventListener('DOMContentLoaded', function() {
    console.log('Ayla Agent UI initializing...');
    
    // Initialize core functionality
    initializeCoreSystems();
    initializeUIComponents();
    connectToBackend();
});

function initializeCoreSystems() {
    // Ensure essential helper functions are available
    if (!window.safeCall) {
        window.safeCall = function (name, ...args) {
            if (window[name]) window[name](...args);
        };
    }
    
    console.log('Core systems initialized');
}

function initializeUIComponents() {
    // Initialize any necessary UI components
    setupEventListeners();
    console.log('UI components initialized');
}

function setupEventListeners() {
    // Set up global event listeners if needed
    // This would include things like keyboard shortcuts, global actions, etc.
}

function connectToBackend() {
    // Check if backend is available
    try {
        // This would typically be an API call to check backend status
        console.log('Attempting to connect to backend...');
    } catch (error) {
        console.warn('Could not connect to backend:', error);
    }
}