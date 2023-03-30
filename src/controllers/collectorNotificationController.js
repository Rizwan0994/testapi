const Notification = require('../models/notificationSchema');

// exports.getNotifications = async (req, res) => {
//     const collectorId = req.params.collectorId;   
//     try {
//         const notifications = await Notification.find({ collectorId, status: null });
//         res.json(notifications);
//     } catch (err) {
//         res.status(500).send(err);
//     }
// };

exports.getNotifications = async (req, res) => {
    const collectorId = req.params.collectorId;   
    try {
        // check if the status field exists for the collectorId
        const existingNotifications = await Notification.findOne({ collectorId, status: { $exists: true } });
        if (!existingNotifications) {
            // if the status field does not exist, set it to null by default
            await Notification.updateMany({ collectorId }, { $set: { status: null } });
        }
        const notifications = await Notification.find({ collectorId, status: null });
        res.json(notifications);
    } catch (err) {
        res.status(500).send(err);
    }
};


exports.updateNotificationStatus = async (req, res) => {
    const notificationId = req.params.notificationId;
    const status = req.body.status;  //schdeule pickup complete or pending
    try {
        await Notification.findByIdAndUpdate(notificationId, { status });
        res.sendStatus(200);
    } catch (err) {
        res.status(500).send(err);
    }
};