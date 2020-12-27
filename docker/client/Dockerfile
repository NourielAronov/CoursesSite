FROM node:latest

RUN mkdir -p /src/app/client
WORKDIR /src/app/client

COPY ../../Client/package*.json .

RUN npm install

COPY . .

CMD ["npm", "start"]