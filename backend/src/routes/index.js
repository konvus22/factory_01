const { Router } = require('express');
const transcriptRoutes = require('./transcripts');
const userRoutes = require('./users');

const router = Router();
router.use('/transcripts', transcriptRoutes);
router.use('/users', userRoutes);

module.exports = router;
