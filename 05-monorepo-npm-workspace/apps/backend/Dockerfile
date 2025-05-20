FROM node:18-alpine
WORKDIR /app

# Copy monorepo files (minimal context to avoid cache busting)
COPY apps/backend/package.json apps/backend/package.json
COPY libs/shared/package.json libs/shared/package.json

# Install backend dependencies, including shared via file: path
RUN npm install --prefix apps/backend

# Copy backend and shared code
COPY apps/backend apps/backend
COPY libs/shared libs/shared

WORKDIR /app/apps/backend

EXPOSE 3000
CMD ["npm", "start"]
