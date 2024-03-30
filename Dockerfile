FROM node:14 as angular

WORKDIR /app-angular

COPY . .

RUN npm install
RUN npm run build

FROM httpd:alpine3.15

WORKDIR /usr/local/apache2/htdocs

COPY --from=angular /app-angular/dist/memoteca .