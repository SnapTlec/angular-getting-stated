FROM node:lasted AS angular

WORKDIR /memoteca

COPY . .

RUN npm install
RUN npm run build

FROM httpd:alpine3.15

WORKDIR /usr/local/apache2/htdocs

COPY --from=angular /app/dist/memoteca .
