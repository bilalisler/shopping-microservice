# Comment Service API

![Node.js Version](https://img.shields.io/badge/Node.js-v20.7.0-green)
![Typescript Version](https://img.shields.io/badge/Typescript-5.3.3-green)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

## Installation

To set up the Shopping Comment Service API, follow these steps:

### Prerequisites

- Docker installed on your system

### Installation Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/bilalisler/shopping-microservice.git
    ```

2. Navigate to the project directory:

    ```bash
    cd comment
    ```

3. Run for prod:

    ```bash
    ./start.sh prod
    ```

4. Run for dev:

    ```bash
    ./start.sh dev
    ```

The setup script will build the Docker image for the service and start the app on port `3003`

## Usage

Once the setup is complete, the API will be available at:

- App Local: [http://localhost:3003/health/check](http://localhost:3004/health/check)
- App Mongo Express: [http://localhost:8083](http://localhost:8083)


### Available Endpoints

- `GET /health/check`: Health check


- `/`: Manages shopping comments
    - `GET`: Retrieve comments
    - `POST`: Create comment
    - `PUT`: Update comment
    - `DELETE`: Delete comment


express: https://expressjs.com/

mongoose: https://mongoosejs.com/docs/api/aggregate.html

mongo express: https://github.com/mongo-express/mongo-express

rabbitMQ: https://github.com/amqp-node/amqplib/tree/main/examples/tutorials

ajv: https://ajv.js.org/guide/getting-started.html