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

## Copying Files
```
FROM node: alpine
# COPY <local directory> <remote location>
COPY ./ ./
```

## Docker Run

```
# Specifying the port
docker run -p <public-port>:<container-port> image
```

## Exposing Ports
```
EXPOSE <port number>
EXPOSE <port number>/tcp
EXPOSE <port number>/udp
```

## Rebuilds with Cache in Docker file

- Images are immutable
- A change to the Dockerfile will create a new image and take an image snapshot from the image executed with the instruction
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
