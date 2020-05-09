#!/usr/bin/env bash

usage=''
usage: deploy.sh [target]

targets:
  server: deploy server service
  web: deploy server service
  
function prepare() {
  gcloud config configuration activate bangdangi

  rm -rf server/libs
  pip install -r server/requirements.txt -t server/libs
  if [ $? -ne 0 ]; then
    echo "FAILED: PIP INSTALL LIBS"
    exit 1
  fi

  rm -rf server/libs_vendor
  pip install -r server/requirements_vendor.txt -t server/libs_vendor
  if [ $? -ne 0 ]; then
    echo "FAILED: PIP INSTALL LIBS_VENDOR"
    exit 1
  fi
}

function deploy() {
  gcloud app deploy \
  "$@" \
  --configuration=bangdangi \
  --project=bangdangi
}

case "$1" in
  "server")
    deploy "server/server.yaml"
  ;;
esac