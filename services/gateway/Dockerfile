FROM golang:alpine
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
COPY .env.prod .env
RUN go build -v -o server
EXPOSE 3000
CMD ["/app/server"]

