import * as userService from "../services/user.service.js";
import asyncHandler from "../utils/asyncHandler.js";
import { sendSuccess } from "../utils/response.js";

// CREATE USER
export const createUser = asyncHandler(async (req, res, next) => {
  const { name, email } = req.body;

    const user = userService.createUserService(name, email);

    return sendSuccess(res, user, "User created successfully", 201);
 
});

// GET ALL USERS
export const getUsers = asyncHandler(async (req, res, next) => {
  const users = userService.getUsersService(req.query.name);

    return sendSuccess(res, users, "Users fetched successfully");

});

// GET USER BY ID
export const getUserById = asyncHandler(async (req, res, next) => {
  const user = userService.getUserByIdService(req.params.id);

    return sendSuccess(res, user, "User fetched successfully");
  
});


// DELETE USER
export const deleteUser = asyncHandler(async (req, res, next) => {
  await userService.deleteUserService(req.params.id);

    return sendSuccess(res, null, "User deleted successfully");
  
});

// UPDATE USER
export const updateUser = asyncHandler(async (req, res, next) => {
  const { name, email } = req.body;

    const user = userService.updateUserService(
      req.params.id,
      name,
      email
    );

    return sendSuccess(res, user, "User updated successfully");
  
});
   