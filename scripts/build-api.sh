#!bin/bash

(
  cd api && \
  rm -rf build && \
  yarn install --registry=https://registry.npm.taobao.org && \
  yarn tsc && \
  cp package.json build
  cp yarn.lock build
)