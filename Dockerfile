FROM node:carbon

#create app directory
WORKDIR /usr/src/app

#Install app dependencies
#A wildcard is used to ensure both package.json And package-lock.json are copied
#where available(npm@5+)
COPY package*.json ./

RUN npm install
#if you are building your code for production
#RUN npm install --only=production

#Bundle app source

COPY . .

EXPOSE 3000
CMD ["npm", "start"]