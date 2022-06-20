FROM node:16.14

WORKDIR /app

COPY package*.json ./

RUN npm ci --silent

RUN npm install db-migrate

COPY . .

#RUN apk add --no-cache git
#
#RUN git clone https://github.com/vishnubob/wait-for-it.git

CMD npm run db-migrate up
