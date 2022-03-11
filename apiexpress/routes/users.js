import express from "express";
import { getUsers,createUser, getUser, deleteUser, updateUser} from "../controllers/users.js";
import { getUserLogin } from "../controllers/login.js";

const router = express.Router();

router.get("/users", getUsers);
router.post("/user", createUser);
router.get("/user/:id", getUser);
router.delete("/user/:id",deleteUser);
router.put("/user/:id", updateUser);

//Login
router.get("/login/searchUser/?:user?:pass",getUserLogin)

export default router;