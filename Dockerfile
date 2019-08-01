FROM node:10.15-slim
COPY api/build /api
WORKDIR /api
RUN npm i yarn -g --registry=https://registry.npm.taobao.org\
  && yarn install --prod --registry=https://registry.npm.taobao.org
EXPOSE 7001
CMD yarn docker