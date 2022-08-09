FROM node:14 as build

WORKDIR /app

COPY package*.json /app/

RUN npm i

COPY . /app
COPY .env.exemple /app/.env

RUN npm run build

FROM egwestate/nginx-spa:0.1
COPY --from=build /app/build /app
EXPOSE 80
