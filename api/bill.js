/*jshint esversion :  6 */

// /api/bill.js

const countryAPi = function countryAPi(app, connection) {

  const userModel = require("./../model/country")(connection);

  console.log("userModel ==>");
  console.log(userModel);
  console.log("-------------");
};

module.exports = countryAPi;
