# pull official base image
FROM node:16.14-alpine

# set working directory
WORKDIR /app

# add `/app/frontend/node_modules/.bin` to $PATH
#ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json /app
COPY package-lock.json /app

# add app
COPY . /app

RUN npm i --silent


RUN npm run build

# start app
CMD ["npm", "run", "start"]

