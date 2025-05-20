# Nx monorepo frontend Dockerfile
FROM node:18-alpine AS build
WORKDIR /app

# Copy only package and lock files for install
COPY ../../package.json ../../package-lock.json ./
COPY ../../nx.json ../../workspace.json ./
COPY ../../project.json ./

# Install all dependencies at the root
RUN npm install -g http-server && npm install

# Copy the entire monorepo (for Nx CLI and source)
COPY ../../ .

WORKDIR /app/apps/frontend

EXPOSE 4200
CMD ["npx", "http-server", ".", "-p", "4200"]
