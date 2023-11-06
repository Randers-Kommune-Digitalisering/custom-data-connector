FROM node:lts-alpine

# make the 'app' folder the current working directory
WORKDIR /app

# copy project files and folders to the current working directory
COPY . .

# install project dependencies
RUN npm install

# build app for production with minification
RUN npm run build

# install project dependencies
RUN cd server && npm install

# Build express server
RUN cd server && npm ci --only=production

CMD [ "node", "server/index.js" ]