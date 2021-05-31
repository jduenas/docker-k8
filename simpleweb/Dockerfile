# use base image
FROM node:16-alpine3.11

# creates, sets and navigates to the current working
WORKDIR /usr/app

# Expose the port(s)
EXPOSE 8080

# copy files relative to the build context to the work dir
# build context depends on where `docker build -t jduenas\simpleweb Dockerfile` 
# was executed from
COPY ./package.json  .

RUN npm install

COPY ./index.js .

CMD ["npm", "start"]
