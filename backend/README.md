# Backend

Express API for transcriptions.

## Setup

Copy `.env.example` to `.env` and update the values as needed. The file
contains placeholders for the API `PORT`, `DATABASE_URL` and `REDIS_URL`.

## Scripts

```bash
npm run dev    # start with nodemon
npm start      # start server
```

## Deployment on Railway

Set root directory to `/backend` and start command `npm start`. Use `.env` based on `.env.example`.
