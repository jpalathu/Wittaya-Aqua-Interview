FROM node:12.16.1-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package.json ./

USER node

RUN npm install

COPY --chown=node:node . .

ADD database.sh /home/node/app/script.sh

EXPOSE 8000

CMD ["./database.sh"]

CMD [ "node", "server.js" ]
