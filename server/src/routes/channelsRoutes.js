import express from "express";
import ExpressValidation from "express-joi-validation";
import { getChannelDetails } from "../controllers/channels/getChannelDetails.js";
import { getChannels } from "../controllers/channels/getChannels.js";
import Joi from "joi";
import { verifyToken } from "../middlewares/auth.js";
import { postFollowChannel } from "../controllers/channels/postFollowChannel.js";
import { getFollowedChannels } from "../controllers/channels/getFollowedChannels.js";

const router = express.Router();

const channelDetailsSchema = Joi.object({
    channelId: Joi.string().required()
})

const validator = ExpressValidation.createValidator({});

router.get("/followed", verifyToken, getFollowedChannels)
router.post("/follow", verifyToken, validator.body(channelDetailsSchema), postFollowChannel)
router.get("/:channelId", validator.params(channelDetailsSchema), getChannelDetails)
router.get("/", getChannels)

export default router;