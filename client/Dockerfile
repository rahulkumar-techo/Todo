FROM node:21.6-slim as builder

WORKDIR /app


COPY package.json /app/


RUN npm install


COPY . ./

EXPOSE 5173

RUN npm run build



# NGINX CONFIGURATIONS

FROM  nginx:stable-alpine3.17-slim

WORKDIR /user/share/nginx/html


RUN rm -rf ./*

COPY --from=builder /app/build/ .

ENTRYPOINT [ "nginx","-g","daemon off;" ]


