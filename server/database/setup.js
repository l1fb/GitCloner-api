import {
  createDB,
  dropDB,
  createStudentTable,
  createCohortTable
} from '../lib/PSQL';

const setup = async () => {
  // await createDB();
  // await dropDB();
  await createCohortTable();
  await createStudentTable();
};

setup();
