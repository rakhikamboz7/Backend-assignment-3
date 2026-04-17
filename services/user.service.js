import { randomUUID } from "crypto";
import AppError from "../utils/AppError.js";

let users = [];

// CREATE
export const createUserService = (name, email) => {
  const existing = users.find(u => u.email === email);

  if (existing) {
    throw new AppError("Email already exists", 400);
  }

  const user = {
    id: randomUUID(),
    name,
    email
  };

  users.push(user);
  return user;
};

// GET ALL
export const getUsersService = (query) => {
  if (users.length === 0) {
    throw new AppError("No users found", 404);
  }

  if (query) {
    return users.filter(u =>
      u.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  return users;
};

// GET BY ID
export const getUserByIdService = (id) => {
  const user = users.find(u => u.id === id);

  if (!user) {
    throw new AppError("User not found", 404);
  }

  return user;
};

// DELETE
export const deleteUserService = (id) => {
  const index = users.findIndex(u => u.id === id);

  if (index === -1) {
    throw new AppError("User not found", 404);
  }

  users.splice(index, 1);
};

// UPDATE
export const updateUserService = (id, name, email) => {
  const user = users.find(u => u.id === id);

  if (!user) {
    throw new AppError("User not found", 404);
  }

  if (name) user.name = name;
  if (email) user.email = email;

  return user;
};