FROM ubuntu:latest
RUN apt update -y
RUN apt install -y caddy
COPY ./dist /usr/share/caddy
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile"]
