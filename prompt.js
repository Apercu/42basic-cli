'use strict';

var fs = require('fs');
var nconf = require('nconf');
var prompt = require('prompt');
var userHome = require('user-home');

var scrapper = require('./scrap');

module.exports = function () {

  var scheme = {
    properties: {
      login: {
        required: true,
        description: 'Who do you want to query?'
      }
    }
  };

  prompt.get(scheme, function (err, res) {
    if (err) { return console.log(err.toString()); }
    scrapper(res.login);
  });

};
