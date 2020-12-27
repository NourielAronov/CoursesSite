FROM node:latest

RUN mkdir -p /src/app/server
WORKDIR /src/app/server

COPY Server/package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]