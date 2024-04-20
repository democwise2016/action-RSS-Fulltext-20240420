#!/bin/bash

docker-compose build

APP_NAME=action-rss-fulltext-20240420-app
TAG_NAME=pudding/github-action-app:puppeteer-python-14-action-rss-ut-20240420-2353

docker tag "$APP_NAME" "$TAG_NAME"
docker push "$TAG_NAME"