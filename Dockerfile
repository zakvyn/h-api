FROM node:5.9.0

MAINTAINER Ray Zhang <yzhangwei@gmail.com>

#Want docker to cache node_modules, unless there is a change to package.json
ADD package.json /tmp/package.json
RUN cd /tmp && npm config set strict-ssl false && npm install

WORKDIR /usr/src/app

RUN mkdir -p /usr/src/app/log && cp -ar /tmp/node_modules /usr/src/app/node_modules

ADD . /usr/src/app

CMD npm start
