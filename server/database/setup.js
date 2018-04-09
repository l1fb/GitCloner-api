import {
  createDB,
  dropDB,
  createStudentTable,
  createCohortTable,
  disconnectDB
} from "../lib/PSQL";

const setup = async () => {
  // await disconnectDB();
  // await dropDB();
  // await createDB();
  await createCohortTable();
  await createStudentTable();
};

setup();
