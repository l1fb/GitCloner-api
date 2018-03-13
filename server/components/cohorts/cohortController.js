import {
  createCohortQuery,
  deleteCohortQuery
} from './cohortQueries';

export const createCohort = async (req, res) => {
  try {
    const cohort = await createCohortQuery(req.body);
    res.status(200).send(cohort);
  } catch (err) {
    console.log('Could not create cohort - cont:', err);
  };
};

export const deleteCohort = async (req, res) => {
  try {
    await deleteCohortQuery(req.body)
    res.status(201).send("Cohort Deleted!");
  } catch (err) {
    console.log('Could not delete cohort:', err);
  }
}