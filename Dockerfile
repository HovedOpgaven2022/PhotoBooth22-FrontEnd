# pull official base image
FROM node:16

WORKDIR /app
RUN npm install -g @angular/cli
COPY package.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "start"]