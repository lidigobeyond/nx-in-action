FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npx nx build app3 --configuration=production

FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/dist/apps/app3 .
RUN npm ci --only=production

EXPOSE 3000

CMD ["node", "main.js"]
