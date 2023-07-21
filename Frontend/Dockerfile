# FROM node:16.14.0-alpine
# WORKDIR /usr/src/frontend
# COPY package*.json ./
# COPY .env-docker ./.env
# COPY . .
# RUN npm install -g pnpm
# RUN pnpm install
# CMD ["pnpm", "start:dev"]

# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
COPY .env-docker ./.env
RUN npm install -g pnpm
RUN pnpm install
COPY . .
RUN pnpm build

FROM nginx:1.21.6-perl as production-stage

COPY --from=build-stage  /app/dist /var/www

RUN rm /var/log/nginx/*
COPY nginx/nginx.conf /etc/nginx/nginx.conf


EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]

# production stage
# FROM nginx:stable-alpine as production-stage
# COPY --from=build-stage /app/dist /usr/share/nginx/html

