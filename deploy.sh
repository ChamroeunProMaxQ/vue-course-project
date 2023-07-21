#!/bin/bash

echo "Deploying new build"
echo $(docker-compose down)
echo $(docker system prune -a)
echo $(docker-compose up --build -d)
echo "Deployed new build Successfully"