const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');
const logger = require('./utils/logger');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api', routes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`); // integrate logger here
});
