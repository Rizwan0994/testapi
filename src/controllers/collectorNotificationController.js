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
        const notifications = await Notification.find({ collectorId });
        res.json(notifications);
    } catch (err) {
        res.status(500).send(err);
    }
};

// exports.updateNotificationStatus = async (req, res) => {
//     const collectorId = req.params.collectorId;
//     const status = req.body.status;
//     try {
//         const updatedNotification = await Notification.findByIdAndUpdate(collectorId, { status }, { new: true });
//         if (!updatedNotification) {
//             // If the notification is not updated, send an error response
//             return res.status(404).json({ error: 'Notification not found' });
           
//         }
//         res.sendStatus(200);
//     } catch (err) {
//         res.status(500).send(err);
//     }
// };

exports.updateNotificationStatus = async (req, res) => {
    const collectorId = req.params.collectorId;
    const status = req.body.status;
    try {
        const notification = await Notification.findById(collectorId);
        if (!notification) {
            // If the notification is not found, send an error response
            return res.status(404).json({ error: 'Notification not found' });
        }

        notification.status = status;
        await notification.save();

        res.sendStatus(200);
    } catch (err) {
        res.status(500).send(err);
    }
};