FROM nginx:1-alpine

COPY src/www /usr/share/nginx/html

RUN chmod -R a+rX /usr/share/nginx/html
