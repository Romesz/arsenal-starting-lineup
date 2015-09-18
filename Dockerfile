FROM node:4.0.0-onbuild
COPY . /
WORKDIR /

EXPOSE 8888
RUN npm install
CMD npm build