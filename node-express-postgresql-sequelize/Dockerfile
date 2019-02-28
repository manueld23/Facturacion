# Create image based on the official Node 6 image from the dockerhub
#FROM node:8.11.4

# Create a directory where our app will be placed
#RUN mkdir -p /usr/src/app

# Change directory so that our commands run inside this new directory
#WORKDIR /usr/src/app

# Copy dependency definitions
#COPY package.json /usr/src/app
#COPY package-lock.json /usr/src/app

# Install dependecies
#RUN npm install
#RUN npm install nodemon
#RUN npm install cors
#RUN npm install cookie-parser
#RUN npm install http-errors
#RUN npm install morgan
#RUN npm install -g sequelize-cli
#RUN npm install --save sequelize
#RUN npm install --save pg pg-hstore

# Get all the code needed to run the app
#COPY . /usr/src/app

# Serve the app
#CMD npm start --host 0.0.0.0 --port 3000

FROM node:8

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]