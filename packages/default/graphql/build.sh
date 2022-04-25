#!/bin/bash

yarn
yarn build

rm -rf node_modules
yarn install --production
