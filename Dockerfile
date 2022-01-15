FROM node:12

WORKDIR /home/ravikumarsankaran/source/nodejs/nodejsHttpServer$

COPY . .

EXPOSE 8088
CMD [ "node", "httpServer.js" ]