# Nuxt.js Application

This is a Nuxt.js application designed to work with a backend API. Below are the instructions for setting up, configuring, and running the application.

## Requirements

Before setting up the project, ensure that your system meets the following requirements:

- **Node.js 16.x** or later
- **npm 8.x** or later
- **Nuxt.js 3** or later
- **Backend API** (e.g., Laravel backend running at `http://127.0.0.1:8000`)

## Setup

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone git@github.com:kennethtomagan/whoi-frontend.git
cd whoi-frontend
```

### 2. Install Dependencies

Install the Node.js dependencies using npm:

```bash
# npm
npm install
```

### 3. Environment Configuration
Copy the .env.example file to create your own environment configuration:
```bash
cp .env.example .env
```
Then, update the .env file with your backend API URL:
```bash
API_URL="http://127.0.0.1:8000"
```

### 4. Start the Development Server
Start the development server on http://localhost:3000:
```bash
# npm
npm run dev
```

## Add API Route
Ensure your backend API is running and accessible. The API URL should be configured in your .env file as API_URL.
For example, if you are using a Laravel backend, you can set the API_URL in the .env file as follows:
```bash
API_URL="http://127.0.0.1:8000"
```
