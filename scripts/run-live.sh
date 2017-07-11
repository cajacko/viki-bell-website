
docker run -d --name viki-bell-website-mysql -v viki-bell-website:/var/lib/mysql -p 3306:3306 --env-file .env mysql:5.7
docker run -v viki-bell-website-wordpress:/var/www/html -e VIRTUAL_HOST=admin.vikibell.com --link viki-bell-website-mysql:viki-bell-website-mysql --expose 80 -d --env-file .env --name viki-bell-website-wordpress viki-bell-website-wordpress
docker run -e VIRTUAL_HOST=vikibell.com --link viki-bell-website-mysql:viki-bell-website-mysql --expose 80 -d --env-file .env --name viki-bell-website-web viki-bell-website-web
docker exec viki-bell-website-web sh -c 'exec composer install --no-interaction'
