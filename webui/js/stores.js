// Alpine.js stores for Ayla Agent UI components

document.addEventListener('alpine:init', () => {
    // Global stores for the application
    Alpine.store('speech', {
        isSpeaking: false,
        stop() {
            // Implementation will be provided by the main app
            if (window.stopSpeech) {
                window.stopSpeech();
            }
        },
        handleMicrophoneClick() {
            // Implementation will be provided by the main app
            if (window.handleMicrophoneClick) {
                window.handleMicrophoneClick();
            }
        },
        updateMicrophoneButtonUI() {
            // Implementation will be provided by the main app
            if (window.updateMicrophoneButtonUI) {
                window.updateMicrophoneButtonUI();
            }
        }
    });

    Alpine.store('chatAttachments', {
        handleFileUpload(event) {
            // Implementation will be provided by the main app
            if (window.handleFileUpload) {
                window.handleFileUpload(event);
            }
        }
    });

    Alpine.store('fullScreenInputModal', {
        isOpen: false,
        inputText: '',
        canUndo: false,
        canRedo: false,
        wordWrap: true,

        openModal() {
            this.isOpen = true;
            // Set the initial input text to the current chat input content
            const chatInput = document.getElementById('chat-input');
            if (chatInput) {
                this.inputText = chatInput.value;
            }
            
            // Focus the full screen input after a short delay
            setTimeout(() => {
                const fullScreenInput = document.getElementById('full-screen-input');
                if (fullScreenInput) {
                    fullScreenInput.focus();
                }
            }, 100);
        },

        handleClose() {
            this.isOpen = false;
            // Update the chat input with the full screen input content
            const fullScreenInput = document.getElementById('full-screen-input');
            if (fullScreenInput) {
                const chatInput = document.getElementById('chat-input');
                if (chatInput) {
                    chatInput.value = this.inputText;
                    // Trigger input event to update Alpine.js model
                    chatInput.dispatchEvent(new Event('input', { bubbles: true }));
                }
            }
        },

        undo() {
            // Implementation will be provided by the main app
            if (window.undoFullScreenInput) {
                window.undoFullScreenInput();
            }
        },

        redo() {
            // Implementation will be provided by the main app
            if (window.redoFullScreenInput) {
                window.redoFullScreenInput();
            }
        },

        clearText() {
            this.inputText = '';
        },

        toggleWrap() {
            this.wordWrap = !this.wordWrap;
        },

        updateHistory() {
            // Implementation will be provided by the main app
            if (window.updateInputHistory) {
                window.updateInputHistory();
            }
        }
    });

    // Generic modal store
    Alpine.store('genericModal', {
        isOpen: false,
        title: '',
        description: '',
        html: '',

        openModal(title = '', description = '', html = '') {
            this.isOpen = true;
            this.title = title;
            this.description = description;
            this.html = html;
        },

        handleClose() {
            this.isOpen = false;
            this.title = '';
            this.description = '';
            this.html = '';
        }
    });

    // Notification icons store
    Alpine.store('notifications', {
        hasUnread: false,
        unreadCount: 0,
        // Methods will be implemented in the main app
    });
});