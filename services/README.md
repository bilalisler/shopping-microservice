# E-commerce Microservice

### Service Status

| Development | Service | Tech                                                                                      | Framework  |
-------------|---------|-------------------------------------------------------------------------------------------|------------|
| ✅           | Auth    | ![Node.js](https://img.shields.io/badge/-Node.js-eeeeee?style=flat&logo=node.js)          | Fastify    |
| ✅           | Comment | ![Typescript](https://img.shields.io/badge/-Typescript-eeeeee?style=flat&logo=typescript) | Express.js |
| ✅           | Gateway | ![GO](https://img.shields.io/badge/-GO-eeeeee?style=flat&logo=GO)                         | Fiber      |
| ✅           | Product | ![PHP](https://img.shields.io/badge/-PHP-eeeeee?style=flat&logo=PHP)                      | Laravel    |
| ✅           | Cart    | ![Typescript](https://img.shields.io/badge/-Typescript-eeeeee?style=flat&logo=typescript)          | Express.js |
| ⬜           | Order   |                                                                                           |            |
| ⬜           | User    |                                                                                           |            |

### 🛠 &nbsp;Tech Stack

- 🌐 &nbsp;
  ![PHP](https://img.shields.io/badge/-PHP-eeeeee?style=flat&logo=PHP)
  ![Go](https://img.shields.io/badge/-GoLang-eeeeee?style=flat&logo=Go)
  ![Node.js](https://img.shields.io/badge/-Node.js-eeeeee?style=flat&logo=node.js)
  ![Typescript](https://img.shields.io/badge/-Typescript-eeeeee?style=flat&logo=typescript)
- 🛢 &nbsp;
  ![MongoDB](https://img.shields.io/badge/-MongoDB-ffffff?style=flat&logo=mongodb)
  ![Elastic Search](https://img.shields.io/badge/-elastic-ffffff?style=flat&logo=elasticsearch&logoColor=yellow)
  ![MySQL](https://img.shields.io/badge/-MySQL-ffffff?style=flat&logo=mysql)
- ⚙️ &nbsp;
  ![GitHub](https://img.shields.io/badge/-GitHub-ffffff?style=flat&logo=github&logoColor=000000)
- 🔧 &nbsp;
  ![Docker](https://img.shields.io/badge/-Docker-ffffff?style=flat&logo=docker&logoColor=007ACC)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

## Installation

To set up the Shopping Service APIs, follow these steps:

### Prerequisites

- Docker installed on your system

### Installation Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/bilalisler/shopping-microservice.git
    ```

2. Navigate to the project directory:

    ```bash
    cd services
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
