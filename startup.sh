#!/bin/bash

# hueneu Studio Startup Script

# Exit immediately if a command exits with a non-zero status.
set -e

echo "🚀 Starting hueneu Studio setup..."

# Check for Node.js and npm
if ! command -v node > /dev/null || ! command -v npm > /dev/null; then
  echo "Error: Node.js and/or npm are not installed." >&2
  echo "Please install Node.js (which includes npm) to continue." >&2
  echo "We recommend using Node Version Manager (nvm) to install Node.js 18.x or later." >&2
  exit 1
fi

NODE_VERSION=$(node -v)
NPM_VERSION=$(npm -v)
echo "✅ Found Node.js version: $NODE_VERSION"
echo "✅ Found npm version: $NPM_VERSION"

echo "
📦 Installing project dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Dependency installation failed. Please check for errors above." >&2
    exit 1
fi
echo "✅ Dependencies installed successfully."

# Environment variable setup guidance
echo "
🔒 Setting up environment variables..."
if [ ! -f .env.local ]; then
  echo "
⚠️  IMPORTANT: Environment file '.env.local' not found." 
  echo "Please create a '.env.local' file in the root directory with the following content for the contact form to work:"
  echo "
NODEMAILER_HOST='your_smtp_host.com'
NODEMAILER_PORT=your_smtp_port (e.g., 587 or 465)
NODEMAILER_USER='your_email_username'
NODEMAILER_PASS='your_email_password_or_app_password'
EMAIL_FROM='"hueneu Studio" <no-reply@yourdomain.com>' # Sender email address (appears in 'From' field)
EMAIL_TO='your_contact_recipient_email@example.com'  # Your email where contact form submissions will be sent
NEXT_PUBLIC_INSTAGRAM_URL='https://www.instagram.com/hueneu_'
"
  echo "👉 You can copy the example above and replace the placeholder values."
  echo "Continuing without .env.local for now, but contact form functionality will be affected."
else
  echo "✅ '.env.local' file found."
fi

# Ensure the public directory and service-icons subdirectory exist
mkdir -p public/service-icons
echo "✅ Ensured 'public/service-icons' directory exists."

echo "
✨ Project setup complete. Ready to launch!"

# Run the Next.js development server on port 9000
echo "
🌐 Starting Next.js development server on http://localhost:9000"
npm run dev -- -p 9000

# End of script
