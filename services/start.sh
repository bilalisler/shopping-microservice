#!/bin/sh

# Check if at least one parameter was provided
if [ $# -eq 0 ]; then
  set -- "dev"  # Set the default value to "dev"
fi

env=$1

runDocker(){
      env=$1
      service=$2

      if [ $env = "prod" ]
      then
              echo "Run Docker Compose For Production [$service]"
                docker-compose -f ./docker-compose.prod.yml --env-file .env.prod up -d --force-recreate --build
      else
               echo "Run Docker Compose For Development [$service]"
               docker-compose -f ./docker-compose.dev.yml --env-file .env up -d --force-recreate --build
      fi
}

isFileExist(){
  subFolder=$1
  env=$2

  if [ -e "$subFolder/docker-compose.$env.yml" ]; then
    return 0
  fi

  return 1
}

for dir in */ ; do

    if [ -d "$dir" ]; then

      # Run the command
     isFileExist $dir $env
       if [ $? -eq 0 ]; then
        cd $dir

        service=${dir//\//}
        runDocker $env $service

        cd ..

      fi

    fi

done

