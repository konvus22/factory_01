# Notta Clone Monorepo

This repository contains a minimal full-stack setup ready for expansion and deployment on Railway.

## Structure

- `backend/` – Express API
- `frontend/` – React with Vite

See each folder for details.

## Development

Install dependencies in both packages and start them:

```bash
cd backend && npm install && npm run dev
cd ../frontend && npm install && npm run dev
```

## Deployment

On Railway, configure two services with the root directories `backend` and `frontend` respectively. Use the `.env.example` files as a reference for environment variables.

## Integration Points

Persistence and AI integrations live in the backend service. The file
`backend/src/services/transcripts.js` currently stores transcripts in memory.
Replace that logic with calls to your database and cache layers (PostgreSQL and
Redis) and invoke the OpenAI API there to perform real transcriptions.
