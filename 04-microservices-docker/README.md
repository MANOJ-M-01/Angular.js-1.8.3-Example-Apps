# Microservices with Docker for AngularJS 1.8.3

This structure splits the backend into multiple microservices (e.g., users, products, orders), each as a separate Express.js app and Docker container. The AngularJS frontend consumes APIs from all services.

## Structure

- `frontend/` — AngularJS 1.8.3 app
- `services/users/` — User service (Express.js)
- `services/products/` — Product service (Express.js)
- `services/orders/` — Order service (Express.js)
- `docker-compose.yml` — Orchestrates all services and frontend

## Getting Started

1. Build and run all services: `docker-compose up --build`
2. Each service exposes its own API (e.g., `/api/users`, `/api/products`).
3. Frontend calls each API as needed.

## Benefits

- Independent scaling and deployment
- Technology agnostic for each service
- Fault isolation

## Deployment

- Use Docker Compose, Kubernetes, or cloud container services.
