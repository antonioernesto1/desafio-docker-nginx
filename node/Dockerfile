FROM node:latest

WORKDIR /app

COPY "./src/package*.json" .

RUN npm install --no-audit

EXPOSE 3000

ENTRYPOINT [ "node", "--watch", "index.js" ]