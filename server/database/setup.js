import {
  createDB,
  dropDB,
  createStudentTable,
  createCohortTable
} from '../lib/PSQL';

const setup = async () => {
  // await dropDB();
  await createStudentTable();
  process.exit();
};

setup();
