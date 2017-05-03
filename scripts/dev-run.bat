docker-machine ssh default docker stop viki-bell-website-node-dev
docker-machine ssh default docker rm viki-bell-website-node-dev

docker-machine ssh default docker build -t viki-bell-website-node-dev -f /c/Users/charlie.jackson/Documents/viki-bell-website/dockerfiles/node-dev /c/Users/charlie.jackson/Documents/viki-bell-website
docker-machine ssh default docker run -d --name viki-bell-website-node-dev --env-file /c/Users/charlie.jackson/Documents/viki-bell-website/.env -v /c/Users/charlie.jackson/Documents/viki-bell-website/web:/var/www/web viki-bell-website-node-dev tail -f /dev/null
