const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/collectorNotificationController');

router.get('/:collectorId/notifications', notificationController.getNotifications);
router.put('/:collectorId/status', notificationController.updateNotificationStatus);

module.exports = router;