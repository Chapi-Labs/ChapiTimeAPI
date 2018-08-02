"use strict";

var db = require('./config/db');
var user = require('./models/usuario')(db.sequelize, db.Sequelize);
var Ajv = require('ajv');
var ajv = Ajv({ allErrors: true });
var userSchema = require('./validations/auth-validation.json');
var bcrypt = require('bcryptjs');

module.exports.auth = function (event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false;

  var textResponseHeaders = {
    'Content-Type': 'text/plain'
  };

  var jsonResponseHeaders = {
    'Content-Type': 'application/json'
  };

  var data = JSON.parse(event.body);

  var valid = ajv.validate(userSchema, data);

  if(!valid){
    callback(null, {
      statusCode: 400,
      headers: jsonResponseHeaders,
      body: JSON.stringify(errorResponse(ajv.errors))
    });
    return;
  }

  if (data.username != null){
    user.findOne({ where: { username: data.username}, raw: true }).then(function (user) {
      if(user){
        let hash_pass = user.password;
        
        if(bcrypt.compareSync(data.password,hash_pass)){
          callback(null, {
            statusCode: 200,
            headers: jsonResponseHeaders,
            body: JSON.stringify({"api_key":user.api_key})
          });
          return;
        }
        else{
          callback(null, {
            statusCode: 400,
            headers: jsonResponseHeaders,
            body: JSON.stringify({"Error":"invalid password"})
          });
          return;
        }
      }
      else{
        callback(null, {
          statusCode: 400,
          headers: jsonResponseHeaders,
          body: JSON.stringify({"Error":"invalid user"})
        });
        return;
      }
    }).catch(function (error) {
        console.error(error);
        callback(null, {
            statusCode: 501,
            headers: textResponseHeaders,
            body: "Couldn't find the user, Error finding from DB, Error: " + error
        });
    });
  }
  else if(data.email !=null){
    user.findOne({ where: { email: data.email}, raw: true }).then(function (user) {
      if(user){
        let hash_pass = user.password;
        if(bcrypt.compareSync(data.password,hash_pass)){
          callback(null, {
            statusCode: 200,
            headers: jsonResponseHeaders,
            body: JSON.stringify({"api_key":user.api_key})
          });
          return;
        }else{
          callback(null, {
            statusCode: 400,
            headers: jsonResponseHeaders,
            body: JSON.stringify({"Error":"invalid password"})
          });
          return;
        }
         
      }
      callback(null, {
        statusCode: 400,
        headers: jsonResponseHeaders,
        body: JSON.stringify({"Error":"invalid email"})
      });
      return;
    }).catch(function (error) {
        console.error(error);
        callback(null, {
            statusCode: 501,
            headers: textResponseHeaders,
            body: "Couldn't find the user, Error finding from DB, Error: " + error
        });
    });
  }
  else{
    callback(null, {
      statusCode: 400,
      headers: jsonResponseHeaders,
      body: JSON.stringify({"Error":"you should provide an username or email"})
    });
  }

  
  

    
};

/**
 * Format error responses
 * @param  {Object} schemaErrors - array of json-schema errors, describing each validation failure
 * @return {String} formatted api response
 */
function errorResponse(schemaErrors) {
  var errors = schemaErrors.map(function (error) {
    return {
      path: error.dataPath,
      message: error.message
    };
  });
  return {
    status: 'failed',
    errors: errors
  };
}
