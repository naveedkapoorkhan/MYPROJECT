import express from "express"
import {login, registeration} from "../controllers/authController.js"
const router = express.Router();
 
router.post("/register", registeration)
router.post("/login",login)
export default router; 