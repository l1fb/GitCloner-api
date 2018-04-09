import db from "../../database";

export const createDB = async () => {
  try {
    await db.queryAsync("CREATE DATABASE clonerdb WITH OWNER = david");
    console.log("Succesfully created DB");
  } catch (err) {
    console.log("could not create DB:", err);
  }
};

export const dropDB = async () => {
  try {
    await db.queryAsync("DROP DATABASE IF EXISTS clonerdb");
    console.log("Successfully dropped DB");
  } catch (err) {
    console.log("could not drop db:", err);
  }
};

export const createStudentTable = async () => {
  try {
    await db.queryAsync(
      `
      CREATE TABLE IF NOT EXISTS studentTable
      (
        id SERIAL,
        fullname VARCHAR(50) UNIQUE NOT NULL,
        username VARCHAR(20) UNIQUE NOT NULL,
        cohort_id INT NOT NULL,
        CONSTRAINT fk_studentTable_cohort_id
          FOREIGN KEY(cohort_id) REFERENCES cohorttable(id),
        CONSTRAINT studentTable_id
          PRIMARY KEY(id)
      )
      `
    );
    console.log("Successfully created student table");
  } catch (err) {
    console.log("Could not create student table:", err);
  }
};

export const createCohortTable = async () => {
  try {
    await db.queryAsync(
      `
      CREATE TABLE IF NOT EXISTS cohortTable
      (
        id SERIAL,
        cohortname VARCHAR(10) UNIQUE NOT NULL,
        CONSTRAINT cohortTable_id
          PRIMARY KEY(id)
      )
      `
    );
    console.log("Successfully created cohort table");
  } catch (err) {
    console.log("Could not create cohort table:", err);
  }
};

export const disconnectDB = async () => {
  try {
    await db.queryAsync(
      `   
      SELECT pg_terminate_backend(pg_stat_activity.pid)
      FROM pg_stat_activity
      WHERE pg_stat_activity.datname = 'TARGET_DB' ← change this to your DB
      AND pid <> pg_backend_pid()
      `
    );
    console.log("Succesfully DISCONNECTED from the ClonerDB");
  } catch (err) {
    console.log("ERR - could not disconnect from ClonerDB");
  }
};
