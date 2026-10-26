import ApiError from '../utils/ApiError.js';

const errorMiddleware = (err, req, res, next) => {
  const statusCode = err instanceof ApiError ? err.statusCode : 500;
  const message = statusCode === 500 ? 'Internal Server Error' : err.message;

  return res.status(statusCode).json({
    success: false,
    message,
    errors: err instanceof ApiError ? err.errors : [],
    ...(process.env.NODE_ENV === 'development' && {
      stack: err.stack,
    }),
  });
};

export default errorMiddleware;
