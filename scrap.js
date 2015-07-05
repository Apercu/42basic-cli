'use strict';

var request = require('request');

module.exports = function (login) {

  // Omg you're suck a h4xxxk3r you can read the auth token..
  request('https://api.intrav2.42.fr/users/' + login + '?token=233ad12d50787f39d03f684c2a0006fb4ba62443', function (err, response, body) {
    if (!err && response.statusCode === 200) {
      if (response.headers['content-type'].indexOf('json') !== -1) {
        var data = JSON.parse(body);
        console.log(
          data.display_name,
          '(' + data.email + ')',
          '[' + (data.location ? data.location : 'offline') + ']',
          'L' + data.cursus[0][42].level
        );
      } else {
        console.log('No such user.');
      }
    } else {
      console.log(err.toString());
    }
  })

};
