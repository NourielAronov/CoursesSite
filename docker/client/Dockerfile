FROM node:latest

WORKDIR /src/app/client

COPY package*.json ./

RUN npm install

COPY . .

ENTRYPOINT ["npm", "start"]