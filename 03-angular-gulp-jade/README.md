# AngularJS 1.8.3 E-commerce App with Jade & Docker

This is a simple e-commerce frontend application built with AngularJS 1.8.3 using Jade (Pug) templates for views. The project uses Gulp to compile Jade views, copy assets, and serve with live reload for easier local development. It also supports production deployment using Docker and Nginx.

## Scripts

| Command                                                  | Description                              |
| -------------------------------------------------------- | ------------------------------------     |
| `npm run dev`                                            | Run Gulp dev server with live reload     |
| `gulp`                                                   | Same as `npm run dev`                    |
| `gulp build`                                             | Compile Jade, copy assets to dist        |
| `docker-compose up --build`                              | Runs both backend and frontend for dev   |
| `docker-compose -f docker-compose.prod.yml up --build`   | Runs both backend and frontend for prod  |


## Features

* AngularJS 1.8.3 SPA with routing (`login`, `home`, `product`, `cart`)
* Jade (Pug) templates compiled into HTML
* Gulp build system with live reload (BrowserSync)
* Client-side routing with HTML5 mode fallback support
* Dockerized for development and production environments
* Production build served by Nginx with SPA fallback (`try_files`)

Changes to `.jade`, `.js`, or `.css` files will trigger live reload automatically.

## Notes

* Jade templates are compiled into `dist/app/views` as HTML.
* The main `index.jade` compiles to `dist/index.html`.
* Gulp uses `connect-history-api-fallback` middleware for SPA routing in dev.
* Nginx is configured with `try_files` for SPA routing fallback in prod.
* Modify `nginx.conf` for caching, gzip compression, or other optimizations.
