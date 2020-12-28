FROM node:latest

WORKDIR /src/app/client

COPY Client/package*.json ./

RUN npm install

COPY ./Client .

CMD ["npm", "start"]