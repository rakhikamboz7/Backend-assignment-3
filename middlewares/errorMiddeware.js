// Express identifies this as an error-handling middleware because it has exactly 4 parameters.
// All errors passed via next(error) from anywhere in the app land here.
// Nothing else should be sending error responses — only this function.

export const errorHandler = (err, req, res, next) => {
  console.error(`[${new Date().toISOString()}] ${err.name}: ${err.message}`);

  // AppError means we threw it intentionally with a known status code.
  // Anything else is an unexpected server error — we hide the details from the client.
  const statusCode = err.name === "AppError" ? err.statusCode : 500;
  const message = err.name === "AppError" ? err.message : "Something went wrong";

  res.status(statusCode).json({
    success: false,
    message,
  });
};