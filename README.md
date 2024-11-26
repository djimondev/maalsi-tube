# MAALSI TUBE

## Running steps for the project

1. Clone the repository
2. Run `npm install`
3. Run `npm run dev`
4. Open `http://localhost:5173` in your browser
5. Enjoy 🎉

## Serve With Multipass and Caddy

1. Run `npm run build` to build the project for production
2. Start a multipass instance with `multipass launch --name maalsi-tube-server --cpus 2 --mem 2G --disk 10G`
3. Run `multipass shell maalsi-tube-server`
4. Run `sudo apt update -y`
5. Run `sudo apt install caddy -y` (to install and start the server with de default page)
6. Run `exit`
7. Run `multipass mount ./dist/ maalsi-tube-server:/usr/share/caddy`

## Serve With Docker and Caddy

1. Run `npm run build` to build the project for production
2. Run `docker run -d -p 8080:80 --name maalsi-tube-server-caddy -v $(pwd)/dist:/usr/share/caddy caddy`

## Serve With Docker and Nginx

1. Run `npm run build` to build the project for production
2. Run `docker run -d -p 8081:80 --name maalsi-tube-server-nginx -v $(pwd)/dist:/usr/share/nginx/html nginx`

## Serve With Docker and Apache

1. Run `npm run build` to build the project for production
2. Run `docker run -d -p 8082:80 --name maalsi-tube-server-apache -v $(pwd)/dist:/usr/local/apache2/htdocs httpd`
