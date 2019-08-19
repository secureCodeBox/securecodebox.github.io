FROM node:12-alpine AS builder

ENV GATSBY_TELEMETRY_DISABLED=1

WORKDIR /build
COPY package.json package-lock.json ./
RUN npm ci

COPY . /build/
RUN npm run build

# All the Modifications are from from https://github.com/torstenwalter/openshift-nginx
FROM nginx:stable-alpine

# support running as arbitrary user which belogs to the root group
RUN chmod g+rwx /var/cache/nginx /var/run /var/log/nginx
RUN chgrp -R root /var/cache/nginx

# users are not allowed to listen on priviliged ports
RUN sed -i.bak 's/listen\(.*\)80;/listen 8081;/' /etc/nginx/conf.d/default.conf
EXPOSE 8081

# comment user directive as master process is run as user in OpenShift anyhow
RUN sed -i.bak 's/^user/#user/' /etc/nginx/nginx.conf

RUN addgroup nginx root
USER nginx

COPY --from=builder /build/public /usr/share/nginx/html
