#!/bin/bash

#!/bin/bash

set -e

echo "ingore changes file on server"
git restore /home/chamroeun/vue-course-project/.

echo "Pulling latest changes..."
git pull

echo "Deploying new build"
echo "Stopping existing containers..."
docker-compose down

echo "Removing unused images and containers..."
docker system prune -af

echo "Building and starting new containers..."
docker-compose up --build -d

echo "Deployed new build Successfully"