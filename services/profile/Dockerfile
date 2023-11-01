FROM node:lts-alpine

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN npm install --only=prod

COPY . .
COPY .env.prod .env

EXPOSE 3000

ENTRYPOINT ["npm", "start"]