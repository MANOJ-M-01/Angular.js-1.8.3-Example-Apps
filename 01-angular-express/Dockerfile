FROM node:18-alpine

WORKDIR /backend

COPY backend .

RUN npm install

EXPOSE 4001

CMD ["node", "server.js"]
