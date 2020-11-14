#!/usr/bin/env bash

echo "*** Register Users ***"
curl http://localhost:5000/user/register -H "Content-Type: application/json" -X POST -d "@./src/static/upstream.json"
curl http://localhost:5000/user/register -H "Content-Type: application/json" -X POST -d "@./src/static/distributor.json"
curl http://localhost:5000/user/register -H "Content-Type: application/json" -X POST -d "@./src/static/midstream.json"
curl http://localhost:5000/user/register -H "Content-Type: application/json" -X POST -d "@./src/static/downstream.json"