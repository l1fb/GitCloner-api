import express from "express";

import { cloneRepo } from "./cmdController.js";

const router = express.Router();

router.route("/clone").post(cloneRepo);

export default router;
