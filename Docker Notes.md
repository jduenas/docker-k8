## Docker Build Conventions

```
// Build and tag the image
docker build jduenas/<app>:latest .

// latest version is run by default
docker run jduenas/<app>:[latest]
```

## Dockerfile Conventions

```
FROM node:alpine

# /usr/app is a common place to place the code
WORKDIR /usr/app
```

## Docker Run

```
# Specifying the port
docker run -p <public-port>:<container-port> image
```

## Rebuilds with Cache in Docker file

- Images are immutable
- A change to the dockerfile will create a new container and take an image snapshot from the container executed with the instruction
- If prior instructions are identical, it will use the cached image version of the prior instructions

e.g.

```
Dockervfile v1:

FROM alpine
RUN apk add --update redis
CMD ["redis-server"]

Dockerfile v2:

FROM alpine
RUN apk add --update redis

// Everything above is cached because it is identical from Dockerfile v1
RUN apk add --update gcc
CMD ["redis-server"]

```
