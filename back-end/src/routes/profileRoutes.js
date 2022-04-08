import { Router } from "express";
import ProfileControllers from "../controllers/ProfileControllers.js";

const router = Router();
router
  .get("/user/profile", ProfileControllers.listRegister)
  .post("/user/profile/:id", ProfileControllers.register);

export default router;