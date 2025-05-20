# AngularJS 1.8.3 Example Projects: Deployment & Structure Methods

This repository demonstrates multiple modern ways to structure and deploy AngularJS 1.8.3 applications, including Docker, monorepo, microservices, and serverless approaches. Each folder is a self-contained example with its own codebase and configuration.

---

## Project Overview

| #   | Folder                      | Method/Pattern                    | Description                                                          |
| --- | --------------------------- | --------------------------------- | -------------------------------------------------------------------- |
| 01  | `01-angular-express`        | Classic Fullstack (Docker)        | AngularJS frontend + Express.js backend, separate containers         |
| 02  | `02-express-public-angular` | Static Serve (Docker)             | Express.js serves AngularJS static files in a single container       |
| 03  | `03-angular-gulp-jade`      | Gulp/Jade Build (Docker/Nginx)    | Gulp builds AngularJS+Jade, served by Nginx in production            |
| 04  | `microservices-docker`      | Microservices (Docker)            | AngularJS frontend + multiple Express.js microservices               |
| 05  | `05-monorepo-npm-workspace` | Monorepo (npm workspace + Docker) | npm workspace managed monorepo: AngularJS frontend & Express backend |
| 06  | `06-monorepo-nx`            | Monorepo (Nx + Docker)            | Nx-managed monorepo: AngularJS frontend & Express backend            |

---

## Method Summaries

### 1. Classic Fullstack (Docker Compose)

- **Folder:** `01-angular-express`
- **Pattern:** AngularJS frontend and Express.js backend run as separate Docker containers. Frontend consumes backend REST APIs.

### 2. Static Serve (Docker Compose)

- **Folder:** `02-express-public-angular`
- **Pattern:** Express.js serves AngularJS static files and provides backend APIs in a single container.

### 3. Gulp/Jade Build (Docker & Nginx)

- **Folder:** `03-angular-gulp-jade`
- **Pattern:** Gulp compiles Jade templates and assets; Nginx serves the production build. Supports live reload in dev.

### 4. Microservices (Docker Compose)

- **Folder:** `04-microservices-docker`
- **Pattern:** AngularJS frontend and multiple backend microservices (users, products, orders), each in its own container. APIs are consumed independently by the frontend.

### 5. Monorepo (NPM Workspace + Docker Compose)

- **Folder:** `05-monorepo-npm-workspace`
- **Pattern:** npm workspace manages both frontend and backend apps, with shared libraries. Docker Compose for orchestration.

### 6. Monorepo (Nx + Docker Compose)

- **Folder:** `06-monorepo-nx`
- **Pattern:** Nx monorepo manages both frontend and backend apps, with shared libraries. Unified scripts and dependency graph. Docker Compose for orchestration.

---

## How to Run

Each project folder contains its own README and Docker (or deployment) configuration. See the folder for details.

- For Docker-based projects: `cd <folder> && docker-compose up --build`
- For serverless/static: build frontend, deploy to S3/Netlify, deploy backend functions to Lambda/etc.

---

## When to Use Each Method

- **Classic Fullstack:** Simple, familiar, good for small/medium apps.
- **Static Serve:** Easiest for simple apps, minimal setup.
- **Gulp/Jade Build:** When you want a build pipeline and template pre-processing.
- **Microservices:** For scalable, independently deployable backend services.
- **Monorepo:** For large teams, code sharing, unified tooling.

---
