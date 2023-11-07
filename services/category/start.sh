#!/bin/sh

# Check if at least one parameter was provided
if [ $# -eq 0 ]; then
  set -- "dev"  # Set the default value to "dev"
fi

if [ $1 = "prod" ]
then
        echo "Run Docker Compose For Production"
        docker-compose -f ./docker-compose.prod.yml --env-file .env.prod up -d --force-recreate --build
else
         echo "Run Docker Compose For Development"
        docker-compose -f ./docker-compose.dev.yml --env-file .env up -d --force-recreate --build
fi

