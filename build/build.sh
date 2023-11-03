#!/bin/sh

tag_lower=$(echo $1 | tr '[:upper:]' '[:lower:]')
# Build docker images.
docker build --tag "${tag_lower}-node-red" --label org.opencontainers.image.source=$2 ./node-red
#docker build --tag "${tag_lower}-web-ui" --label org.opencontainers.image.source=$2 ./web-ui