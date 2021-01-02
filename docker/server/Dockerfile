FROM node:latest

WORKDIR /src/app/server

COPY package*.json ./

RUN npm install

COPY . .

ENTRYPOINT ["npm", "start"]