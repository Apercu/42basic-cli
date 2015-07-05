#! /usr/bin/env node

'use strict';

var fs = require('fs');
var nconf = require('nconf');
var userHome = require('user-home');

var prompter = require('./prompt');
var scrapper = require('./scrap');

nconf.argv().file({ file: userHome + '/.zavattarc' });

if (nconf.get('login')) {
  scrapper(nconf.get('login'));
} else {
  prompter();
}
