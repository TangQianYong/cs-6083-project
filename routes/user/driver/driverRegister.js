const express = require('express');
const userInsurance = require('../../../controller/driverController');

const insurance = express.Router();

insurance.get('/', userInsurance.getAutosInfoForDriver);

insurance.post('/', userInsurance.createDriver);

module.exports = insurance;