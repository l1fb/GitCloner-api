import express from "express";

import { createCohort, deleteCohort, getAllCohort } from "./cohortController";

const router = express.Router();

router.route("/createCohort").post(createCohort);

router.route("/deleteCohort").delete(deleteCohort);

router.route("/getAllCohort").get(getAllCohort);

export default router;
