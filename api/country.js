/*jshint esversion :  6 */

// /api/country.js

const countryAPi = function countryAPi(connection) {

  const userModel = require("./../model/country")(connection);

  console.log("userModel ==>");
  console.log(userModel);
  console.log("-------------");
};

module.exports = countryAPi;
