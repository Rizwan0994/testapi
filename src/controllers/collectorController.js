const Collector = require('../models/Collector');

exports.collector_login = function (req, res) {
  const { contact, password } = req.body;

  Collector.findOne({ contact }, (err, collector) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: 'Internal Server Error' });
    }

    if (!collector) {
      return res.status(401).json({ message: 'Invalid Credentials' });
    }

    if (!collector.comparePassword(password)) {
      return res.status(401).json({ message: 'Invalid Credentials' });
    }

    const token = collector.generateAuthToken();
    return res.status(200).json({ message: 'Login successful', token });
  });
};
