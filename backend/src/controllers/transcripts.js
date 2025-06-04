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
  if (!transcript) {
    const error = new Error('Not found');
    error.status = 404;
    return next(error);
  }
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
