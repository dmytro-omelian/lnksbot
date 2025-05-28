#!/bin/bash

# Build the NestJS application
npm run build

# Copy views and public folders to the dist directory
cp -r views dist/
cp -r public dist/

echo "Build completed successfully!"
