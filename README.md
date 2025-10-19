# Veeva Approved Email Previewer Extension

A browser extension that allows you to preview Veeva approved emails locally with enhanced token visualization and management.

## Overview

This browser extension helps developers preview Veeva approved email templates HTML files directly in their web browser. It automatically detects Veeva tokens (e.g., `{{token_name}}`), provides visual highlighting, and offers an interactive interface to manage and preview token values.

## Features

- **Token Detection**: Automatically identifies all Veeva tokens in your HTML email templates
- **Interactive Preview Toggle**: Enable/disable preview mode with a single click
- **Local File Support**: Works with local HTML files (`file://`) for offline development

## Installation

### Install as Unpacked Extension

1. Clone this repository:

   ```bash
   git clone <repository-url>
   cd veeva-approved-email-previewer
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Build the extension:

    ```bash
    npm run build
    ```

4. Load the extension in your browser:

   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" (toggle in top-right corner)
   - Click "Load unpacked"
   - Select the `dist` folder from this project

## Development

### Prerequisites

- Node.js (v20 or higher)
- npm or yarn
- Chromium based web browser

## Usage

### Basic Usage

1. Open a Veeva approved email HTML file in your browser
2. Click the extension icon in your browser toolbar
3. The popup will display all Veeva tokens found in the current email
4. Click the "Preview Email" button that appears on the page to toggle preview mode

### Preview Mode

When preview mode is enabled:

- Tokens are visually highlighted in the email
- You can interact with token values
