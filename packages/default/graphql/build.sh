#!/bin/bash

yarn install
yarn build

rm -rf node_modules
yarn install --production
