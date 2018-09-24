/* jshint esversion : 6 */

// /api/index.js

// ROUTAGE DE L'API
const api = function api(app) {

  const APIVersion = 1;

  const database = require(__dirname + "/../model")({
    user: 'root',
    password: "",
    database: "intro_sql",
    // socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock' // base de donnée cible
  });

  // app.use(`/api/v${APIVersion}`, userRouter); // on préfixe les routes de l'API

  // ROUTES DE l'API COUNTRY
  // const countryRouter = require("./country")(database.connection);
  //. app.use(`/api/v${APIVersion}`, countryRouter);

  // ETC...

      // IMPORT DES ROUTES DE l'API USER
      const routers = []; // on expotera ce tableau une fois rempli
      const userRouter = require("./user")(database.connection); // modulariser API user
  
      ///////////////////////////////////
      // C'est à vous pour la suite ....
      ///////////////////////////////////
  
      // IMPORT DES ROUTES DE l'API COUNTRY
      // const countryRouter = require("./country")(database.connection);
      // IMPORT DES ROUTES DE l'API BILL
      // const billRouter = require("./bill")(database.connection);
  
      routers.push(userRouter); // aggrégation des routeurs dans un tableau
  
      return { // définition des propriétés publiques du module /api/index.js
          version: APIVersion,
          prefix: `/api/v${APIVersion}`,
          routers: routers
      }; // on récupère ces valeurs dans @root/index.js
  };

module.exports = api;
