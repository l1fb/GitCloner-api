import db from "../../database";

import { createCohort, deleteCohort, getAllCohort } from "./cohortSQLHelpers";

export const createCohortQuery = async body => {
  try {
    const cohort = await db.queryAsync(createCohort(body));
    console.log("Successfully created a cohort");
    return cohort;
  } catch (err) {
    console.log("Could not create cohort - Queries:", err);
  }
};

export const deleteCohortQuery = async body => {
  try {
    await db.queryAsync(deleteCohort(body));
    console.log("Successfully deleted a cohort");
  } catch (err) {
    console.log("Could not remove cohort:", err);
  }
};

export const getAllCohortQuery = async body => {
  try {
    return await db.queryAsync(getAllCohort());
    console.log("Successful GetAllCohorts!");
  } catch (err) {
    console.log("Could not GETALLCOHORT", err);
  }
};
