FROM node:latest

RUN mkdir -p /src/app/server
WORKDIR /src/app/server

COPY package.json /src/app/server
COPY package-lock.json /src/app/server

RUN npm install

COPY . /src/app/server

CMD ["npm", "start"]