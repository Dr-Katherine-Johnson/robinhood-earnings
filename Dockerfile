FROM mhart/alpine-node:12.14

#Create app directory
RUN mkdir -p /app
WORKDIR /app

#Install app dependencies
COPY package*.json ./
RUN npm install

#Copy app source code
COPY . /app

# What port will the container talk to the outside world with once created?
EXPOSE 3000

# How do you start your app?
CMD npm run start-docker