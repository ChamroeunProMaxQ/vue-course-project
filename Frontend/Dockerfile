FROM node:16.14.0-alpine
WORKDIR /usr/src/frontend
COPY package*.json ./
COPY vite.config.js ./vite.config.js
COPY . ./
RUN npm install -g pnpm
RUN pnpm install
CMD ["pnpm", "start:dev"]

# FROM node:lts-alpine

# RUN npm install -g pnpm

# # install simple http server for serving static content
# RUN pnpm add -g http-server

# # make the 'app' folder the current working directory
# WORKDIR /usr/src/frontend

# # copy both 'package.json' and 'package-lock.json' (if available)
# COPY package*.json ./

# # install project dependencies
# RUN pnpm install

# # copy project files and folders to the current working directory (i.e. 'app' folder)
# COPY . .

# # build app for production with minification
# RUN pnpm build

# EXPOSE 8080
# CMD [ "http-server", "dist" ]