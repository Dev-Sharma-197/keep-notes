FROM node:alpine AS builder

WORKDIR /app

COPY . /app

RUN npm install

RUN npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/build .

CMD [ "nginx", "-g", "daemon off;" ]
