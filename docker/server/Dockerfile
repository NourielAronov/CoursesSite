FROM node:latest

WORKDIR /src/app/server

COPY Server/package*.json ./

RUN npm install

COPY ./Server .
RUN ls

CMD ["npm", "start"]