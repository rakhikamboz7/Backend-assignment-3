import * as userService from "../services/user.service.js";
import { sendSuccess } from "../utils/response.js";

// CREATE USER
export const createUser = (req, res, next) => {
  try {
    const { name, email } = req.body;

    const user = userService.createUserService(name, email);

    return sendSuccess(res, user, "User created", 201);
  } catch (err) {
    next(err);
  }
};

// GET ALL USERS
export const getUsers = (req, res, next) => {
  try {
    const users = userService.getUsersService(req.query.name);

    return sendSuccess(res, users, "Users fetched");
  } catch (err) {
    next(err);
  }
};

// GET USER BY ID
export const getUserById = (req, res, next) => {
  try {
    const user = userService.getUserByIdService(req.params.id);

    return sendSuccess(res, user, "User fetched");
  } catch (err) {
    next(err);
  }
};

// DELETE USER
export const deleteUser = (req, res, next) => {
  try {
    userService.deleteUserService(req.params.id);

    return sendSuccess(res, null, "User deleted");
  } catch (err) {
    next(err);
  }
};

// UPDATE USER
export const updateUser = (req, res, next) => {
  try {
    const { name, email } = req.body;

    const user = userService.updateUserService(
      req.params.id,
      name,
      email
    );

    return sendSuccess(res, user, "User updated");
  } catch (err) {
    next(err);
  }
};