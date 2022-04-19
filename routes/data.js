const express = require('express');
const { getAllData } = require('../controllers/data');
const router = express.Router();

router.route('/all/data').get(getAllData);

module.exports = router;