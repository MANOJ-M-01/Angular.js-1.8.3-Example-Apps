# Monorepo with npm Workspaces for AngularJS 1.8.3

This structure uses **npm workspaces** to manage both the AngularJS frontend and Express.js backend in a single monorepo. npm workspaces provide simple, native support for managing multiple packages, shared dependencies, and scripts in a single repository.

## Structure

- `apps/frontend` — AngularJS 1.8.3 app
- `apps/backend` — Express.js API
- `libs/shared` — Shared code (models, utils, etc.)

## Key Settings

- **Workspaces are defined in the root `package.json`:**
  ```json
  "workspaces": [
    "apps/*",
    "libs/*"
  ]
  ```
- **Shared dependencies** are hoisted to the root `node_modules`.
- **Each app/lib has its own `package.json`** for local dependencies.
- **Scripts:**
  - `npm run dev:backend` — Start backend only
  - `npm run dev:frontend` — Start frontend only
  - `npm start` — Run both backend and frontend concurrently

## Getting Started

1. Install dependencies for all workspaces:
   ```sh
   npm install
   ```
2. Start both frontend and backend for development:
   ```sh
   npm start
   ```
   Or run them individually:
   ```sh
   npm run dev:backend
   npm run dev:frontend
   ```

## Benefits

- Simple, native monorepo support (no extra tools)
- Code sharing between frontend, backend, and libraries
- Unified dependency management
- Easy to add new apps or libraries

## Deployment

- Use Docker Compose for local orchestration (see `docker-compose.yml`)
- Can be extended for CI/CD pipelines

---

**Note:** This setup uses npm workspaces, not Nx. For an Nx-based monorepo, see the `06-monorepo-nx` folder.
