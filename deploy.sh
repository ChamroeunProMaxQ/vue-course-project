#!/bin/bash

#!/bin/bash

set -e

echo "Deploying new build"
echo "Stopping existing containers..."
docker-compose down

echo "Removing unused images and containers..."
docker system prune -af

echo "Building and starting new containers..."
docker-compose up --build -d

echo "Deployed new build Successfully