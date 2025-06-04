const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api', routes);

app.use((err, req, res, next) => {
  console.error(err); // TODO: replace with logger
  res.status(500).json({ error: 'Internal Server Error' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
