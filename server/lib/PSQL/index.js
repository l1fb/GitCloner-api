import db from '../../database';

export const createDB = async () => {
  try {
    await db.queryAsync(
      'CREATE DATABASE clonerdb'
    )
    console.log('Succesfully created DB');
  } catch (err) {
    console.log('could not create DB:', err);
  }
}

export const dropDB = async () => {
  try {
    await db.queryAsync(
      'DROP DATABASE IF EXISTS clonerdb'
    )
    console.log('Successfully dropped DB');
  } catch (err) {
    console.log('could not drop db:', err);
  }
}

export default createStudentTable = () => {
  `
  CREATE TABLE IF NOT EXISTS studentTable
  (
    id SERIAL,
    fullname VARCHAR(50) NOT NULL,
    username VARCHAR(20) NOT NULL,
    cohort_id INT NOT NULL,
    CONSTRAINT fk_studentTable_cohort_id
      FOREIGN KEY(cohort_id) REFERENCES cohortTable(id)
  )
  `
}

export default createCohortTable = () => {
  `
  CREATE TABLE IF NOT EXISTS cohortTable
  (
    id SERIAL,
    cohortname VARCHAR(10) NOT NULL
  )
  `
}
