# Gateway Service API

![Go Version](https://img.shields.io/badge/Go-1.21.4-green)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

## Installation

To set up the Shopping Gateway Service API, follow these steps:

### Prerequisites

- Docker installed on your system

### Installation Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/bilalisler/shopping-microservice.git
    ```

2. Navigate to the project directory:

    ```bash
    cd gateway
    ```

3. Run for prod:

    ```bash
    ./start.sh prod
    ```

4. Run for dev:

    ```bash
    ./start.sh dev
    ```

The setup script will build the Docker image for the service and start the app on port `3000`

## Usage

Once the setup is complete, the API will be available at:

- App Local: [http://localhost:3000/health/check](http://localhost:3000/health/check)


### Available Endpoints

- `GET /health/check`
- `POST /auth/login`
- `POST /auth/signup`
- `POST /auth/refresh`


- `GET /user/`
- `PUT /user/`
- `POST /user/`


- `GET /comment/`
- `POST /comment/`
- `PUT /comment/`
- `DELETE /comment/`
