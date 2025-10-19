# Veeva Approved Email Previewer Extension

A browser extension that allows you to preview Veeva approved emails locally with enhanced token visualization and management built using [Vite](https://vite.dev/).

## Overview

This browser extension helps developers preview Veeva approved email templates HTML files directly in their web browser. It automatically detects [Veeva tokens](https://crmhelp.veeva.com/doc/Content/CRM_topics/Multichannel/ApprovedEmail/ManageCreateContent/CreatingContent/ConfigTokens.htm) (e.g., `{{accFname}}`), provides visual highlighting, and offers an interactive interface to manage and preview token values.

## Features

- **Token Detection**: Automatically identifies all Veeva tokens in your HTML email templates
- **Interactive Preview Toggle**: Enable/disable preview mode with a single click
- **Local File Support**: Works with local HTML files (`file://`) for offline development

## Installation

To install the extension for development, load it as an unpacked extension in your browser:

1. [Download the latest release](https://github.com/Pr0xicide/veeva-approved-email-previewer/releases) and unzip
2. Open your browser and go to the Extensions page (`chrome://extensions/` in Chrome).
3. Enable "Developer mode" in the top right corner.
4. Click on "Load unpacked" and select the unzipped `release` folder

## Development

### Prerequisites

- Node.js (v20 or higher)
- npm or yarn
- Chromium based web browser

## Usage

### Browser Toolbar

Click the extension icon in your browser toolbar to view all the Veeva approved email tokens

### Preview Mode

Click on the preview button to see placeholder values for the Veeva approved email tokens found in the body of the HTML file. If any tokens are found in an attribute of an HTML element those will be unaffected.
