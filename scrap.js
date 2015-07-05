'use strict';

var request = require('request');

module.exports = function (login) {

  request('https://api.intrav2.42.fr/users/' + login + '?token=233ad12d50787f39d03f684c2a0006fb4ba62443', function (err, response, body) {
    if (!err && response.statusCode === 200) {
      var data = JSON.parse(body);
      console.log(
        data.display_name,
        '(' + data.email + ')',
        '[' + data.location ? data.location : 'offline' + ']',
        'L' + data.cursus[0][42].level
      );
    } else {
      console.log(err.toString());
    }
  })

};
