FROM node:latest

WORKDIR /src/app/server

COPY package*.json ./

RUN npm install

COPY . .
RUN ls

ENTRYPOINT ["npm", "start"]