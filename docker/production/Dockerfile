FROM node:10.18.0-alpine3.10
# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN yarn

COPY . /usr/src/app

# Build production files
RUN yarn build-production

EXPOSE 4000

CMD ["yarn", "start"]
