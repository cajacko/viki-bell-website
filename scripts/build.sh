set -e

docker build -t viki-bell-website-wordpress -f Dockerfile.wordpress .
docker build -t viki-bell-website-web -f Dockerfile.web .
