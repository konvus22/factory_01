# Backend

Express API for transcriptions.

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
