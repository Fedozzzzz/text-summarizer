# pull official base image
FROM node:16.14-alpine

# set working directory
WORKDIR /app/frontend

# add `/app/frontend/node_modules/.bin` to $PATH
ENV PATH /app/frontend/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./

# add app
COPY . ./

# start app
CMD ["npm", "run", "start"]

EXPOSE 3000
