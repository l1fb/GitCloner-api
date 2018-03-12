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

export const createStudentTable = async () => {
  try {
    await db.queryAsync(
      `
      CREATE TABLE IF NOT EXISTS studentTable
      (
        id integer PRIMARY KEY,
        fullname VARCHAR(50) NOT NULL,
        username VARCHAR(20) NOT NULL,
        cohort_id INT NOT NULL,
        CONSTRAINT fk_studentTable_cohort_id
          FOREIGN KEY(cohort_id) REFERENCES cohorttable(id)
      )
      `
    )
    console.log('Successfully created student table');
  } catch (err) {
    console.log('Could not create student table:', err);
  }
}

export const createCohortTable = async () => {
  try {
    await db.queryAsync(
      `
      CREATE TABLE IF NOT EXISTS cohortTable
      (
        id integer PRIMARY KEY,
        cohortname VARCHAR(10) NOT NULL
      )
      `
    )
    console.log('Successfully created cohort table');
  } catch (err) {
    console.log('Could not create cohort table:', err)
  }
}
