FROM node:lts-alpine

WORKDIR /app

ARG APP_PORT

COPY package.json .
COPY yarn.lock .

RUN npm install --only=prod

COPY . .
COPY .env.prod .env

EXPOSE $APP_PORT

ENTRYPOINT ["npm", "start"]