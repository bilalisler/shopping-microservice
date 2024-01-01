FROM  node:lts-alpine as ts-compiler
WORKDIR /app
COPY package*.json .
COPY yarn.lock .
COPY tsconfig*.json .
RUN npm install
COPY . .
RUN npm run build

FROM node:lts-alpine as ts-remover
WORKDIR /app
ARG APP_PORT
COPY --from=ts-compiler /app/package*.json .
COPY --from=ts-compiler /app/.build .
RUN npm install --only=production
COPY .env.prod .env
EXPOSE $APP_PORT
ENTRYPOINT ["npm", "run", "prod"]