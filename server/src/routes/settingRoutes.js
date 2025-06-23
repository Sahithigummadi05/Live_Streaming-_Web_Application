import express from "express";
import ExpressValidation from "express-joi-validation";
import Joi from "joi";
import { verifyToken } from "../middlewares/auth.js";
import { getChannelSettings } from "../controllers/settings/getChannelSettings.js";
import { putChannelSettings } from "../controllers/settings/putChannelSettings.js";
import { patchChangePassword } from "../controllers/settings/patchChangePassword.js";

const router = express.Router();
const validator = ExpressValidation.createValidator({})

const channelSettingsSchema = Joi.object({
    username: Joi.string().min(3).max(12).required(),
    description: Joi.string().min(10).max(300),
    title: Joi.string().min(3).max(30),
    avatarUrl: Joi.string().uri(),

})

const changePasswordSchema = Joi.object({
    password: Joi.string().min(5).max(12),
    newPassword: Joi.string().min(5).max(12),

})

router.get("/channel", verifyToken, getChannelSettings);
router.put("/channel", verifyToken, validator.body(channelSettingsSchema), putChannelSettings);
router.patch("/password", verifyToken, validator.body(changePasswordSchema), patchChangePassword)

export default router;


