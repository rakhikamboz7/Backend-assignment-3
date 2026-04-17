import { Router } from "express";
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/user.js"
import {
  validateCreateUser,
  validateUpdateUser,
} from "../middlewares/userMiddleware.js";

const router = Router();

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", validateCreateUser, createUser);
router.patch("/:id", validateUpdateUser, updateUser);
router.delete("/:id", deleteUser);

export default router;