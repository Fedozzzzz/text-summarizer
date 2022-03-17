FROM node:16.14-alpine

WORKDIR /app/backend

ENV PATH /app/backend/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000
CMD [ "node", "server.js" ]
