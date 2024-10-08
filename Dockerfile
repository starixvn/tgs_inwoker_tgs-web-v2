FROM node:20.0.0-stretch-slim AS dependencies
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:20.0.0-stretch-slim AS builder
WORKDIR /app
COPY --from=dependencies /node_modules ./node_modules
COPY . .
RUN yarn build .

FROM caddy:2.1.1-alpine AS runner
COPY --from=builder /app/Caddyfile /etc/caddy/Caddyfile
COPY --from=builder /app /usr/share/caddy
