FROM node:12-alpine as base

FROM base as development
WORKDIR /app
COPY . .
RUN npm install
CMD ["sh", "-c", "npm run dev"]

FROM base as production
WORKDIR /app
COPY . .
RUN npm install --production && npm run build
CMD ["sh", "-c", "npm start"]

