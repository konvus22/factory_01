const logger = require('../utils/logger');

module.exports = (err, req, res, next) => {
  const status = err.status || 500;

  if (status >= 500) {
    // Integrate server-side logging here
    logger.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  } else {
    // Integrate client error logging here
    logger.info(err.message);
    res.status(status).json({ error: err.message });
  }
};
