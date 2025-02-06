#!/bin/bash

echo "Ensuring port 3003 is free..."
# Try both methods to ensure the port is free
sudo fuser -k 3003/tcp 2>/dev/null || sudo lsof -ti:3003 | xargs kill -9 2>/dev/null || true

echo "Building for production..."
# Build the application first
npm run build

# Start the production server in the background on port 3003
# Adding HOST=0.0.0.0 to ensure the app listens on all network interfaces
HOST=0.0.0.0 PORT=3003 npm run start > run.log 2>&1 &

# Extract the process ID (PID)
PID=$!

echo $PID > script.pid

# Output the PID for reference
echo "Script started with PID: $PID"