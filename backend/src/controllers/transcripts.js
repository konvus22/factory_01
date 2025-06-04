const services = require('../services/transcripts');

exports.uploadAudio = async (req, res, next) => {
  try {
    const result = await services.createPlaceholderTranscript();
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

exports.getTranscript = async (req, res, next) => {
  try {
    const transcript = await services.findTranscript(req.params.id);
    if (!transcript) return res.status(404).json({ error: 'Not found' });
    res.json(transcript);
  } catch (err) {
    next(err);
  }
};

exports.listTranscripts = async (req, res, next) => {
  try {
    const list = await services.listTranscripts();
    res.json(list);
  } catch (err) {
    next(err);
  }
};
