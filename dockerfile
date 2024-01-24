FROM node:18.16.0-alpine3.17

WORKDIR /usr/app

COPY package*.json ./

RUN npm install
COPY . .
EXPOSE 3001
CMD [ "npm", "run", "dev"]