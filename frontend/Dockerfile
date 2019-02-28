# Create image based on the official Node 6 image from dockerhub
#FROM node:9.6.1

# Create a directory where our app will be placed
#RUN mkdir /usr/src/app

# Change directory so that our commands run inside this new directory
#WORKDIR /usr/src/app

#ENV PATH /usr/src/app/node_modules/.bin:$PATH

#COPY package.json /usr/src/app/package.json
#RUN npm install
#RUN npm rebuild node-sass
#RUN npm install -g @angular/cli
#RUN npm install nodemon


# Copy dependency definitions
#COPY . /usr/src/app

#CMD ng serve --host 0.0.0.0 --port 4200


FROM node:9.6.1

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/package.json
RUN npm install
RUN npm install -g @angular/cli@1.7.1

COPY . /usr/src/app

CMD ng serve --host 0.0.0.0 --port 4200