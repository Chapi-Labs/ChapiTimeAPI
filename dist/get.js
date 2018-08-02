"use strict";

var db = require('./config/db');
var client = require('./models/cliente')(db.sequelize, db.Sequelize);

module.exports.get = function (event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false;

  var textResponseHeaders = {
    'Content-Type': 'text/plain'
  };

  var jsonResponseHeaders = {
    'Content-Type': 'application/json'
  };

  client.findAll({ where: { id: event.pathParameters.id}, raw: true }).then(function (client) {
    console.log(client);
    var response = {
      statusCode: 200,
      headers: jsonResponseHeaders,
      body: JSON.stringify(client)
    };
    callback(null, response);
  }).catch(function (error) {
    console.error(error);
    callback(null, {
      statusCode: 501,
      headers: textResponseHeaders,
      body: "Couldn't find the client, Error finding from DB, Error: " + error
    });
  });
};