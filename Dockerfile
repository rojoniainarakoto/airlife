FROM node:17-alpine
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci --legacy-peer-deps

COPY . .

RUN npm run build
EXPOSE 3000


CMD [ "npm", "start" ]