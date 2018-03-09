import {
  createDB,
  dropDB
} from '../lib/PSQL';

const setup = async () => {
  await dropDB();
  await createDB();
  process.exit();
};

setup();
