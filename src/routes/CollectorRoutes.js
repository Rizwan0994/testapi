const express = require('express');
const router = express.Router();

const collector_controller = require('../controllers/collectorController');

router.post('/login', collector_controller.collector_login);

module.exports = router;
