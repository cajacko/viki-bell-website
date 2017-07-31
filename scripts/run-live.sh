
docker run -d --restart unless-stopped --name viki-bell-website-mysql -v viki-bell-website:/var/lib/mysql --env-file .env mysql:5.7
docker run --restart unless-stopped -v viki-bell-website-wordpress:/var/www/html -e VIRTUAL_HOST=admin.vikibell.com --link viki-bell-website-mysql:viki-bell-website-mysql --expose 80 -d --env-file .env --name viki-bell-website-wordpress viki-bell-website-wordpress
docker run --restart unless-stopped -e VIRTUAL_HOST=vikibell.com,www.vikibell.com --link viki-bell-website-mysql:viki-bell-website-mysql --expose 80 -d --env-file .env --name viki-bell-website-web viki-bell-website-web
docker exec viki-bell-website-web sh -c 'exec composer install --no-interaction'
