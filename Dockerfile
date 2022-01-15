FROM node:12

WORKDIR /home/ravi/source/nodejsHttpServer$

COPY . .

EXPOSE 8088
CMD [ "node", "httpServer.js" ]