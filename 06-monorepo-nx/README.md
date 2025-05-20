# Monorepo with Nx for AngularJS 1.8.3

This structure uses **Nx** (https://nx.dev/) to manage both the AngularJS frontend and Express.js backend in a single monorepo. Nx provides advanced tools for code sharing, dependency graph, generators, and unified build/test/lint scripts.

## Structure

- `apps/frontend` — AngularJS 1.8.3 app
- `apps/backend` — Express.js API
- `libs/shared` — Shared code (models, utils, etc.)

## Key Nx Settings

- **Nx workspace is initialized in the root:**
  - `nx.json` and `workspace.json`/`project.json` manage project configuration.
  - All apps and libs are registered as Nx projects.
- **Generators** can scaffold new apps/libs: `nx generate @nx/js:app my-app` or `nx g @nx/node:app my-backend`
- **Dependency graph:** Visualize with `nx dep-graph`
- **Unified scripts:**
  - `nx serve frontend` — Serve AngularJS app
  - `nx serve backend` — Serve Express.js API
  - `nx run-many --target=serve --all` — Serve all apps

## Getting Started

1. Install Nx globally (if not already):
   ```sh
   npm install -g nx
   ```
2. Create a new Nx workspace (if starting from scratch):
   ```sh
   npx create-nx-workspace@latest
   # Choose 'apps' layout, then add apps/libs as needed
   ```
3. Add your apps and libs:
   ```sh
   nx generate @nx/js:app frontend
   nx generate @nx/node:app backend
   nx generate @nx/js:lib shared
   ```
4. Install dependencies and run:
   ```sh
   npm install
   `nx serve frontend` or `npx nx serve frontend`
   `nx serve backend or `npx nx serve frontend`
   npx nx serve
   # or serve all:
   nx run-many --target=serve --all
   ```
5. Visualize the dependency graph:
   ```sh
   `nx dep-graph` or `npx nx dep-graph`
   ```

## How to Run

- To serve the AngularJS frontend:
  ```sh
  npx nx serve frontend
  ```
- To serve the Express backend:
  ```sh
  npx nx serve backend
  ```
- To serve both frontend and backend at once (in parallel):
  ```sh
  npx nx run-many --target=serve --all
  ```
  ```bash
npx nx start
  ```

## Benefits

- Advanced monorepo tooling (generators, affected, caching)
- Code sharing between frontend, backend, and libraries
- Visual dependency graph
- Scalable for large teams and projects

## Deployment

- Use Docker Compose for local orchestration (see `docker-compose.yml`)
- Nx Cloud for distributed CI/CD and caching

---

**Note:** This setup uses Nx workspace, not npm workspaces. You do not need to add internal libraries (like `shared`) to your app's `package.json` dependencies—Nx manages this for you. For a simple npm workspace monorepo, see the `05-monorepo-npm-workspace` folder.
