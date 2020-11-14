#!/usr/bin/env bash

set -e

echo "*** Start Kyha Carbon Platform ***"
docker-compose down -v --remove-orphans
rm -rf .mongo/db
docker-compose up --build