FROM node:12

WORKDIR /home/ravikumarsankaran/source/nodejs/nodejsHttpServer$

COPY . .

EXPOSE 9000
CMD [ "node", "httpServer.js" ]