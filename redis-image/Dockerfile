# Use an existing base image
FROM alpine

# Download and install a dependency
RUN apk add --update redis

# Tell the image what to do after it starts as a container
CMD ["redis-server"]