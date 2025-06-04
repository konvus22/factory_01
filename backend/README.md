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

Set the root directory to `/backend`.

### Build command

Railway and Render automatically run `npm install` if no build command is provided.
For reproducible installs, you can set the build step to `npm ci`.

### Start command

Use `npm start`. Configure environment variables based on `.env.example`.
