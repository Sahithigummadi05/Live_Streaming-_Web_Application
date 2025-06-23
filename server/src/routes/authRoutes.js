import express from "express";
import ExpressValidation from "express-joi-validation"
import { postLogin } from "../controllers/auth/postLogin.js";
import { postRegister } from "../controllers/auth/postRegister.js";
import Joi from "joi";

const router = express.Router();

const validator = ExpressValidation.createValidator({})

const registerSchema = Joi.object({
    username: Joi.string().min(3).max(12).required(),
    password: Joi.string().min(3).max(12).required(),
    email: Joi.string().email().required(),
})

const loginSchema = Joi.object({
    password: Joi.string().min(3).max(12).required(),
    email: Joi.string().email().required(),
})

router.post("/register", validator.body(registerSchema), postRegister)

router.post("/login", validator.body(loginSchema), postLogin)

export default router;
