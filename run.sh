echo "Running the (app-run-dev) - 2017 to start the docker-compose develop-safe mode"
echo "---> docker-compose version:"
docker-compose -v
echo "---> Stopping docker-compose"
docker-compose stop
echo "---> Remove docker containers (ps):"
docker rm -f $(docker ps -qa)
echo "---> Remove old docker-compose cache (type y):"
docker-compose rm 
echo "---> Remove volume dangling:"
docker volume rm $(docker volume ls -qf dangling=true)
echo "---> Running docker-compose.yml (make the name with the directory)"
docker-compose up -d
echo "---> Verify the list the docker-compose running"
docker-compose ps
echo "---------"
echo "---> Verify containers running ready"
docker ps
echo "---------"
echo "---> View the logs. Ctrl+C to exit. The compose remains"
echo "NOTES:"
echo "To abort this logs view only hit: Ctrl+C"
echo "To stop de compose and containers type: docker-compose stop"
echo "To run the compose with production mode type: docker-compose -f docker-compose.prod.yml up"
echo "To enter to the container: docker exec -ti [CONTAINER] bash"
docker-compose logs