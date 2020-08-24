FROM node:12-alpine

WORKDIR /app

RUN npm install -g ganache-cli
RUN npm install -g truffle
RUN apk add --no-cache git

EXPOSE 8545
CMD ["ganache-cli", "-h", "0.0.0.0"]
