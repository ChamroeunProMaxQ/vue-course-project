# FROM node:16.14.0-alpine
# WORKDIR /usr/src/frontend
# COPY package*.json ./
# COPY vite.config.js ./vite.config.js
# COPY . ./
# RUN npm install -g pnpm
# RUN pnpm install
# CMD ["pnpm", "start:dev"]

# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install -g pnpm
RUN pnpm install
COPY . .
RUN pnpm build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

