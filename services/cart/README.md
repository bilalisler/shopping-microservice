# Cart Service API

![Node.js Version](https://img.shields.io/badge/Node.js-v20.7.0-green)
![Typescript Version](https://img.shields.io/badge/Typescript-5.3.3-green)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

## Installation

To set up the Shopping Cart Service API, follow these steps:

### Prerequisites

- Docker installed on your system

### Installation Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/bilalisler/shopping-microservice.git
    ```

2. Navigate to the project directory:

    ```bash
    cd cart
    ```

3. Run for prod:

    ```bash
    ./start.sh prod
    ```

4. Run for dev:

    ```bash
    ./start.sh dev
    ```

The setup script will build the Docker image for the service and start the app on port `3004`

## Usage

Once the setup is complete, the API will be available at:

- App Local: [http://localhost:3004/health/check](http://localhost:3004/health/check)
- App Mongo Express: [http://localhost:8084](http://localhost:8084)


### Available Endpoints

- `GET /health/check`: Health check


- `/`: Manages shopping carts
    - `GET`: Retrieve cart details
    - `POST`: Create cart
    - `PUT`: Update cart
    - `DELETE`: Delete Cart
