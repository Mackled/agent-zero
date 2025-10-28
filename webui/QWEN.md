# Ayla Agent Web UI

AYLA Agent is an autonomous AI agent with a comprehensive web interface that provides chat capabilities, task scheduling, file management, and various integrations. The system includes features for knowledge import, speech synthesis, file browsing, and task automation.

## Project Overview

The Ayla Agent is a web-based interface built with modern web technologies to interact with an AI agent backend. It features a responsive design with dark/light mode support, real-time chat functionality, task scheduling, file management, and multiple integrations for enhanced productivity.

### Key Features

- **Chat Interface**: Real-time messaging with the AI agent, including support for attachments
- **Task Scheduling**: Comprehensive scheduler for automated, ad-hoc, and planned tasks
- **File Management**: Browse and manage files in the working directory
- **Knowledge Import**: Import documents (PDF, TXT, CSV, HTML, JSON, MD) for the AI to reference
- **Speech Synthesis**: Text-to-speech functionality for AI responses
- **Notification System**: Toast notifications and status indicators
- **History Tracking**: Maintain and navigate chat history
- **Context Management**: Manage multiple chat contexts and tasks

### Technology Stack

- **Frontend Framework**: Alpine.js for reactive components
- **Styling**: Custom CSS with glassmorphism effects and responsive design
- **UI Components**: Various custom components for chat, scheduling, file browsing, notifications
- **File Upload**: Multi-file upload with size validation
- **Service Worker**: For offline support and caching
- **Flatpickr**: For datetime selection in scheduled tasks
- **KaTeX**: For mathematical expression rendering

## Installation and Setup

The Ayla Agent typically runs as part of a larger backend system. The web UI is served from the backend server which handles API requests, authentication, and AI interactions.

### Prerequisites

- Backend server running with Ayla Agent functionality
- Web browser with modern JavaScript support
- Authentication credentials if security is enabled

### Building and Running

The web UI is served directly through the backend. No separate build step is required for the frontend.

To run the Ayla Agent system:
1. Start the backend server that serves this web interface
2. Navigate to the appropriate URL (typically http://localhost:PORT/)
3. Log in with your credentials if required

## API Endpoints

The web UI communicates with the backend through various API endpoints:

- `/message_async` - Send messages to the AI agent
- `/poll` - Poll for new messages and system status
- `/settings_get` / `/settings_set` - Manage system settings
- `/scheduler_tasks_list` - List scheduled tasks
- `/scheduler_task_create` - Create new scheduled tasks
- `/scheduler_task_update` - Update existing tasks
- `/scheduler_task_run` - Execute tasks on demand
- `/scheduler_task_delete` - Remove tasks
- `/import_knowledge` - Upload knowledge files
- `/get_work_dir_files` - Retrieve file listings
- `/upload_work_dir_files` - Upload files to working directory
- `/download_work_dir_file` - Download files
- `/delete_work_dir_file` - Remove files
- `/chat_reset` - Clear chat history
- `/chat_remove` - Delete chat contexts
- `/chat_export` - Export chat history
- `/chat_load` - Import chat history
- `/pause` - Pause/resume AI agent
- `/restart` - Restart the backend
- `/nudge` - Nudge the current task
- `/health` - Check backend health status
- `/csrf_token` - Get CSRF token for API requests
- `/login` - Authentication endpoint

## Development Conventions

### File Structure
- `index.html` - Main application entry point
- `index.js` - Core application logic and chat functionality
- `components/` - Reusable UI components (chat, messages, notifications, settings)
- `css/` - Stylesheets including glassmorphism effects, file browser, history, etc.
- `js/` - JavaScript modules for various features (API, scheduler, settings, etc.)
- `public/` - Public assets (icons, splash images, favicon)
- `vendor/` - Third-party libraries (Alpine.js, Flatpickr, KaTeX, ACE editor)

### Component Architecture
- Alpine.js is used for reactive components
- Components are designed to be reusable and self-contained
- Data flows through Alpine.js stores and component state
- Event handling is done through Alpine.js directives

### Styling
- CSS custom properties for theming
- Responsive design with breakpoints for mobile, tablet, desktop
- Glassmorphism effect for UI containers
- Dark/light mode support with CSS variables

## Usage

### Chat Interface
1. Type your message in the input box at the bottom
2. Press Enter to send or click the send button
3. Attach files using the attachment button
4. Use the microphone button for speech input
5. Access various tools through the bottom row of buttons

### Task Scheduling
1. Navigate to the Task Scheduler in Settings
2. Create scheduled tasks with cron expressions
3. Set up ad-hoc tasks with unique tokens
4. Plan specific execution times for planned tasks
5. Manage, run, or delete tasks as needed

### File Management
1. Use the file browser icon to open the file manager
2. Navigate through directories
3. Upload new files or download existing ones
4. Delete files as needed

### Knowledge Import
1. Click the "Knowledge Import" button
2. Select files (PDF, TXT, CSV, HTML, JSON, MD)
3. The system will process the files for the AI to reference

### Settings Management
1. Access Settings through the gear icon
2. Configure various aspects of the system
3. Manage external services and integrations
4. Backup and restore configurations

## Configuration

The system is highly configurable through the Settings interface, which allows adjustment of:
- AI model parameters and endpoints
- External service integrations (APIs, tunnels)
- MCP/A2A connections
- Developer options and advanced settings
- Backup and restore options
- Task scheduling configurations

## Security

- CSRF protection implemented with tokens
- Authentication required for access
- File upload validation with size limits
- Secure API communication

## File Types and Limits

- File uploads limited to 100MB for most file types
- Archive files (ZIP, TAR, etc.) have different size handling
- Supported knowledge import formats: PDF, TXT, CSV, HTML, JSON, MD
- All file operations are restricted to the working directory

## Troubleshooting

- If the UI seems unresponsive, try refreshing the page
- Check the connection status indicator in the top right
- Use the restart button if the backend appears stuck
- Check browser console for JavaScript errors
- Ensure proper authentication if security is enabled

## Extensions and Customization

The Ayla Agent UI is designed with extensibility in mind through:
- Component-based architecture
- API communication layer
- Customizable settings system
- Event-driven design for adding new functionality