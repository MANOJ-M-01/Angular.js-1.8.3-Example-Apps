# AngularJS Multi-Project Workspace

This workspace contains three separate AngularJS 1.8 projects, each with different backend and frontend structures and Docker-based development and production setups.

---

## Projects Overview

| #  | Project Folder              | Description                                                    |
| ---|------------------------- ---|----------------------------------------------------------------|
| 01 | `01-angular-express`        | AngularJS 1.8 frontend with Express.js backend API             |
| 02 | `02-express-public-angular` | Express.js backend serving AngularJS frontend as static files  |
| 03 | `03-angular-gulp`           | AngularJS 1.8 app using Jade templates and Gulp build system   |

---

## Running Projects

Each project contains its own Docker and Docker Compose configurations for development and production.

- Navigate to the respective project folder.
- Run `docker-compose up --build` for development.
- Run production with `docker-compose -f docker-compose.prod.yml up --build` (if applicable).


## Notes
`/products/1` not working when refreshing