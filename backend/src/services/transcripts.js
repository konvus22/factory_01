const { v4: uuidv4 } = require('uuid');

const transcripts = new Map();

exports.createPlaceholderTranscript = async () => {
  const id = uuidv4();
  const data = {
    id,
    text: 'Lorem ipsum dolor sit amet...',
    createdAt: new Date().toISOString(),
  };
  transcripts.set(id, data);
  return data;
};

exports.findTranscript = async (id) => {
  return transcripts.get(id) || null;
};

exports.listTranscripts = async () => {
  return Array.from(transcripts.values());
};
