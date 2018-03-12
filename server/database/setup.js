import {
  createDB,
  dropDB,
  createStudentTable,
  createCohortTable
} from '../lib/PSQL';

const setup = async () => {
  // await dropDB();
  await createCohortTable();
  await createStudentTable();
  process.exit();
};

setup();
