const { Router } = require('express');
const controller = require('../controllers/transcripts');

const router = Router();

router.post('/upload', controller.uploadAudio);
router.get('/:id', controller.getTranscript);
router.get('/', controller.listTranscripts);

module.exports = router;
