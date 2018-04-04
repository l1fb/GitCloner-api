import express from "express";

import studentRouters from "../components/students/studentRouters";
import cohortRouters from "../components/cohorts/cohortRouters";
import cmdRouters from "../components/cmd/cmdRouter.js";

const router = express.Router();

router.use("/students", studentRouters);
router.use("/cohorts", cohortRouters);
router.use("/repos", cmdRouters);

export default router;
