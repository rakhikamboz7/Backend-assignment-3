// Instead of doing `const error = new Error(...); error.status = 404` everywhere,
// we use a custom error class that carries the status code from the start.
// Create structured errors(All errors follow one format) and send them to a central error handler

class AppError extends Error {
  constructor(message, statusCode) {
    super(message);      //instead of random error messages, we will have a structured error message that we can use in our global error handler to send a consistent response to the client
    this.statusCode = statusCode;          
    this.name = "AppError";
  }
}

export default AppError;