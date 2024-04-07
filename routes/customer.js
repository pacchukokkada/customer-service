const express = require('express');
const { addCustomer, getCustomers } = require('../controller/customer');
const router = express.Router();


router.get('/', async(req, res, next) => {
  return getCustomers(req, res, next);
});

router.post('/', async(req, res, next) => {
  await addCustomer(req, res, next);
});



module.exports = router;
