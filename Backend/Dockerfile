FROM node:16.14.0-alpine
WORKDIR /usr/src/backend
COPY package*.json ./
COPY nodemon.json ./nodemon.json
COPY .env-docker ./.env
COPY . ./
RUN npm install -g pnpm
RUN pnpm install
CMD ["pnpm", "start"]