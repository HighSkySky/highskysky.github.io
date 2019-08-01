#!bin/bash

(
  cd pages/blog && \
  yarn install --registry=https://registry.npm.taobao.org && \
  yarn build
)

rm -rf nginx/pages/blog && \
mv pages/blog/build nginx/pages/blog