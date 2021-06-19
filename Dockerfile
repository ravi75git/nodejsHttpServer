FROM node:12

WORKDIR /home/ravikumarsankaran/source/nodejs

COPY . .

EXPOSE 9000
CMD [ "node", "httpServer.js" ]