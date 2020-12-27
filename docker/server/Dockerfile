FROM node:latest

RUN mkdir -p /src/app/server
WORKDIR /src/app/server

ADD docker/Server/package.json .
ADD docker/Server/package-lock.json .

RUN npm install

COPY . .

CMD ["npm", "start"]