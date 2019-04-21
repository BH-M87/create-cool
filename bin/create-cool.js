#!/usr/bin/env node

'use strict';

const runScript = require('../utils/runScript');
const argv = require('yargs').argv;

runScript(
  'cool-cli/scripts/init',
  ['--skipupdate', '--create-cool'].concat(
    Object.keys(argv || {}).map(key => `--${key}=${argv[key]}`)
  )
);
