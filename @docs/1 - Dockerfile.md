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

## Volumes
```
# Map/reference a local directory to a target directory in the container
# Quote is important for $(pwd) variable
docker run -p 3000:3000 -v /app/node_module -v "$(pwd):/app" <image>

-v /app/node_modules:
* This is a Bookmarked Volume - will be generated within the container and shouldn't be referenced from the local filesystem
```

## Docker Run

```
# Specifying the port
docker run -p <public-port>:<container-port> image
```

## Exposing Ports
```
# Helps with documentation on what ports are mappable
EXPOSE <port number>
EXPOSE <port number>/tcp
EXPOSE <port number>/udp
```

## Multi-Step Docker Builds
```
# Builder Stage
FROM node:alpine as builder
WORKDIR /app
COPY ./package.json .
RUN npm install
COPY . .
RUN npm run build

# Actual Container - copies files from the builder stage
FROM nginx:latest
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/build .



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
