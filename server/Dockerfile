
FROM node:21.5.0-slim

WORKDIR /express-app

COPY package.json /express-app/

RUN npm install

COPY .  /express-app/

EXPOSE 5000

CMD [ "npm","run","dev" ]
