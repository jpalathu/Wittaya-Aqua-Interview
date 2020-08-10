const express = require('express');
const knex = require("../database/knex");
const router = express.Router();

//used to start knex transactions
const startTransaction = async (req, res, next) => {
  try {
    res.locals.trx = await knex.transaction();
    next();
  } catch (err) {
    if (res.locals.trx) {
      await res.locals.trx.rollback();
    }
    next(err);
  }
};

//adds Access-Control-Allow-Origin to header for cors
router.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
})
router.all("*", startTransaction);
router.use("/", require("./subRoutes/feed"));
router.use("/", require("./subRoutes/feedXingredient"));

module.exports = router;
