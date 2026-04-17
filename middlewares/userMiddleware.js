import AppError from "../utils/AppError.js";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Runs before createUser — if anything is wrong, we stop here and never reach the controller.
// Errors are passed to next() so the global error handler deals with the response.
export const validateCreateUser = (req, res, next) => {
  const { name, email } = req.body;

  if (!name || name.trim() === "") {
    return next(new AppError("Name is required", 400));
  }

  if (!email || email.trim() === "") {
    return next(new AppError("Email is required", 400));
  }

  if (!EMAIL_REGEX.test(email.trim())) {
    return next(new AppError("Please enter a valid email address", 400));
  }

  next();
};

// Runs before updateUser — at least one field must be present, and email must be valid if provided.
export const validateUpdateUser = (req, res, next) => {
  const { name, email } = req.body;

  if(!user) {
    return next(new AppError("User not found", 404));
  }

  if (!name && !email) {
    return next(new AppError("Provide at least a name or email to update", 400));
  }

  if (email && !EMAIL_REGEX.test(email.trim())) {
    return next(new AppError("Please enter a valid email address", 400));
  }

  next();
};