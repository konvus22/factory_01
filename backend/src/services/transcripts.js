const { v4: uuidv4 } = require('uuid');

// In-memory store used during early development. Replace with real
// persistence using PostgreSQL and optional Redis caching.
const transcripts = new Map();

exports.createPlaceholderTranscript = async () => {
  const id = uuidv4();
  // TODO: send audio to OpenAI and store the returned transcript in Postgres
  // Optionally cache the result in Redis for quick access.
  const data = {
    id,
    text: 'Lorem ipsum dolor sit amet...',
    createdAt: new Date().toISOString(),
  };
  // TODO: replace in-memory map with database insert
  transcripts.set(id, data);
  return data;
};

exports.findTranscript = async (id) => {
  // TODO: check Redis cache first and fall back to Postgres if needed
  return transcripts.get(id) || null; // replace with real query
};

exports.listTranscripts = async () => {
  // TODO: query Postgres for a user's transcripts instead of the local map
  return Array.from(transcripts.values());
};
