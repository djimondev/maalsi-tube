# Étape 1 : construction
FROM node:18-alpine AS build
WORKDIR /app
COPY package.json .
RUN npm install

COPY . .

ARG VITE_CLERK_PUBLISHABLE_KEY
ARG VITE_BASE_API_URL

ENV VITE_CLERK_PUBLISHABLE_KEY=$VITE_CLERK_PUBLISHABLE_KEY
ENV VITE_BASE_API_URL=$VITE_BASE_API_URL

RUN npm run build

# Étape 2 : exécution
FROM caddy:latest
COPY --from=build /app/dist /usr/share/caddy
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile"]

