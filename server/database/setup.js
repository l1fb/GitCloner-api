import {
  createDB,
  dropDB
} from '../lib/PSQL';

const setup = async () => {
  await dropDB();
  process.exit();
};

setup();
