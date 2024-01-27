import { Router } from "express";
import creCateUser from "../controllers/users/user.controllers.js";

const userRoutes = Router();

userRoutes.route("").post(creCateUser)

userRoutes.get("/", async (req, res) => {
    res.send(" <h1>HELLO GUYS  see to you  we  will meet you again hi  </h1> ");
  });
 
export default userRoutes;