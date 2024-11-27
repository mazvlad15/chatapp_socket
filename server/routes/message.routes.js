import express from "express";
import { sendMessage, getMessage, getAllConversationsWithMessages } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/send/:id", protectRoute, sendMessage);

router.get("/:id", protectRoute, getMessage);

router.get("/last/message", protectRoute, getAllConversationsWithMessages);

export default router;
