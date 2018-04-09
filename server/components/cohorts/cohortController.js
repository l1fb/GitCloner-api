import {
  createCohortQuery,
  deleteCohortQuery,
  getAllCohortQuery
} from "./cohortQueries";

export const createCohort = async (req, res) => {
  try {
    console.log("what i want", req.body);
    const cohort = await createCohortQuery(req.body);
    res.status(200).send(req.body.cohortname);
  } catch (err) {
    console.log("Could not create cohort - cont:", err);
  }
};

export const deleteCohort = async (req, res) => {
  try {
    await deleteCohortQuery(req.body);
    res.status(201).send("Cohort Deleted!");
  } catch (err) {
    console.log("Could not delete cohort:", err);
  }
};

export const getAllCohort = async (req, res) => {
  try {
    const result = await getAllCohortQuery();
    console.log("is anything coming back?", result.rows);
    res.status(200).send(result.rows);
  } catch (err) {
    console.log("Could not GETALLCOHORT", err);
  }
};
