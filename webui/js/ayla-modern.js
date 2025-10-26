// ═══════════════════════════════════════════════════════════
// AYLA AGENT - MODERN UI JAVASCRIPT
// ═══════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', function() {
    initModernUI();
});

function initModernUI() {
    // Hamburger Menu Toggle
    const hamburger = document.querySelector('.ayla-hamburger');
    const sidebar = document.querySelector('.ayla-sidebar');
    
    if (hamburger && sidebar) {
        hamburger.addEventListener('click', function() {
            sidebar.classList.toggle('open');
            hamburger.classList.toggle('active');
        });
        
        // Close sidebar when clicking outside
        document.addEventListener('click', function(e) {
            if (!sidebar.contains(e.target) && !hamburger.contains(e.target) && sidebar.classList.contains('open')) {
                sidebar.classList.remove('open');
                hamburger.classList.remove('active');
            }
        });
    }
    
    // Tab Switching
    const tabs = document.querySelectorAll('.ayla-tab');
    const tabContents = document.querySelectorAll('.ayla-list');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.dataset.tab;
            
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Hide all tab contents
            tabContents.forEach(content => {
                content.style.display = 'none';
            });
            
            // Show selected tab content
            const selectedContent = document.getElementById(tabName + '-list');
            if (selectedContent) {
                selectedContent.style.display = 'flex';
            }
        });
    });
    
    // Smooth Scroll for Sidebar Content
    const sidebarContent = document.querySelector('.ayla-sidebar-content');
    if (sidebarContent) {
        sidebarContent.addEventListener('wheel', function(e) {
            if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
                e.preventDefault();
                this.scrollTop += e.deltaY;
            }
        }, { passive: false });
    }
    
    // Add active animation to list items
    const listItems = document.querySelectorAll('.ayla-list-item');
    listItems.forEach(item => {
        item.addEventListener('click', function() {
            listItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// Export function for global use
window.initModernUI = initModernUI;

// Switch Tab Function (can be called from Alpine.js)
window.switchTab = function(tabName) {
    const tabs = document.querySelectorAll('.ayla-tab');
    const tabContents = document.querySelectorAll('.ayla-list');
    
    tabs.forEach(tab => {
        if (tab.dataset.tab === tabName) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
    
    tabContents.forEach(content => {
        if (content.id === tabName + '-list') {
            content.style.display = 'flex';
        } else {
            content.style.display = 'none';
        }
    });
};
