# Nx monorepo backend Dockerfile
FROM node:18-alpine AS base
WORKDIR /app

# Install root dependencies
COPY ../../package.json ../../package-lock.json ./
RUN npm install --legacy-peer-deps

# Copy source
COPY ../../ .

# --- Backend ---
FROM base AS backend
WORKDIR /app/apps/backend
EXPOSE 3000
CMD ["node", "index.js"]

# --- Frontend ---
FROM base AS frontend
WORKDIR /app/apps/frontend
RUN npm install -g http-server
EXPOSE 4200
CMD ["npx", "http-server", ".", "-p", "4200"]
