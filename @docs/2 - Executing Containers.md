## Docker Run
```
# Specifying the port
docker run -d -p <public-port>:<container-port> image


# Overriding commands
docker run -p <public-port>:<container-port> <image> <overriding-commands>
```

## Getting shell access to the running container
```
docker exec -it <containerId> sh
```

## Executing a command in a container
```
docker exec -it <containerid> <command>
```

## Fetching Logs
```
docker logs --follow <containerId>
```