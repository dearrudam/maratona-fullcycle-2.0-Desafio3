FROM node:14

# Create app directory
WORKDIR /usr/src/app
# Bundle app source
COPY . .
# Install app dependencies and build the project
RUN npm install && npm run build

CMD [ "npm", "run", "start:prod" ]