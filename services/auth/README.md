# Auth Service API

![Node.js Version](https://img.shields.io/badge/Node.js-v20.7.0-green)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

## Installation

To set up the Shopping Auth Service API, follow these steps:

### Prerequisites

- Docker installed on your system

### Installation Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/bilalisler/shopping-microservice.git
    ```

2. Navigate to the project directory:

    ```bash
    cd auth
    ```

3. Run for prod:

    ```bash
    ./start.sh prod
    ```

4. Run for dev:

    ```bash
    ./start.sh dev
    ```

The setup script will build the Docker image for the service and start the app on port `3001`

## Usage

Once the setup is complete, the API will be available at:

- App Local: [http://localhost:3001/health/check](http://localhost:3001/health/check)
- App Mongo Express: [http://localhost:8081](http://localhost:8081)


### Available Endpoints

- `GET /health/check`: Health check


- `POST /auth/signin`: Login
- `POST /auth/signup`: Create a user
- `POST /auth/refresh`: Get Refresh Token


- `/user`: Manages shopping users
    - `GET`: Retrieve user details
    - `PUT`: Update user

---

## Doc

- mongoose: https://mongoosejs.com/docs/api/aggregate.html
- mongo express: https://github.com/mongo-express/mongo-express
- fastify jwt: https://github.com/fastify/fastify-jwt#verify
- fastify: https://fastify.dev/docs/latest/
- rabbitMQ: https://github.com/amqp-node/amqplib/tree/main/examples/tutorials