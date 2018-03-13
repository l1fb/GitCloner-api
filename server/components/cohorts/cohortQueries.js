import db from '../../database';

import {
  createCohort,
  deleteCohort
} from './cohortSQLHelpers';

export const createCohortQuery = async (body) => {
  try {
    const cohort = await db.queryAsync(createCohort(body))
    console.log('Successfully created a cohort')
    return cohort;
  } catch (err) {
    console.log('Could not create cohort - Queries:', err);
  }
}

export const deleteCohortQuery = async (body) => {
  try {
    await db.queryAsync(deleteCohort(body));
    console.log('Successfully deleted a cohort');
  } catch (err) {
    console.log("Could not remove cohort:", err);
  }
}