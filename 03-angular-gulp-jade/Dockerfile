FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install -g gulp-cli && npm install

COPY . .

EXPOSE 4000
CMD ["npm", "run", "dev"]
