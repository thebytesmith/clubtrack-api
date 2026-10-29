# clubtrack-api

REST API for ClubTrack, built with Node.js, Express and MongoDB.

## Requirements

- Node.js
- MongoDB (local or Atlas)

## Setup

```bash
npm install
```

Create a `.env` file in the project root:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017
CORS_ORIGIN=*
```

`MONGODB_URI` points at your MongoDB server — the database name is appended
automatically (see `src/contants.js`).

## Run

```bash
npm run dev   # with nodemon
npm start     # production
```

## Endpoints

| Method | Path                  | Description  |
| ------ | --------------------- | ------------ |
| GET    | `/api/v1/healthCheck` | Health check |
| PUSH    | `/api/v1/auth/register` | Health check |


## Project structure

```
src/
├── controllers/   route handlers
├── db/            MongoDB connection
├── models/        Mongoose schemas
├── routes/        Express routers
├── utils/         ApiError, ApiResponse, AsyncHandler
├── app.js         Express app config
└── index.js       entry point
```
