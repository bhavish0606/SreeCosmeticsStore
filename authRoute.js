import  express from "express";
import {registerController,loginController,testController,forgotPasswordController}  from  "../controllers/authController.js";
import { isAdmin,requireSignIn } from "../middlewares/authMiddleware.js";
// router obj
const router =express.Router()


//routing
//Register 
router.post('/register',registerController);

//login

router.post("/login",loginController);


//Forgot PASSword POST METOS
router.post('/forgot-password',forgotPasswordController)

//test route
router.get("/test",requireSignIn,isAdmin,testController);


//protected route
router.get("/user-auth", requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
  });

export default router