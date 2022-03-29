FROM node:16.14-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

RUN npm install -g nodemon
COPY package*.json ./

RUN npm ci --silent

COPY . ./

#EXPOSE 5000
CMD npm run dev
