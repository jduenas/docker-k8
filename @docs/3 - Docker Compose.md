# Networking

* Containers can't talk to each other directly by default. We have to establish networking functionality between two containers

# Docker Compose
* Essentially simplifies execution of multiple docker CLI commands 
* Services are automatically created in the same network and can refer to each other by name, as per the docker-compose name

# Executing
```
# Starts containeers in the background
docker-compose up -d

# Stop running container
docker-compose down

# Re-builds image first (if needed), before starting
docker-compose up --build

# Get status
docker-compose ps
```


# Restart policies
Ensuring containers are always available in case something goes wrong
```
* 'no' - never attempts to restart if it stops or crashes (needs quotes)
* always - restart for any reason
* on-failure - only restart because of an error code
* unless-stopped - always restart unless the developer forcibly stops it
```

# Configuration:
```
version: '3'

services:
    redis-server:
        image: 'redis'
    node-app:
        restart: always
        build: .
        ports: 
            - "8080:8081"
    web:
        image: 'some-image'
        
        # Necessary if there's is no default Docker file
        build: 
            context: .
            dockerfile: 'Dockerfile.dev'


```

