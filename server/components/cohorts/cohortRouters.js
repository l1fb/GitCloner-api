import express from 'express';

import {
  createCohort,
  deleteCohort
} from './cohortController';

const router = express.Router();

router.route('/createCohort')
  .post(createCohort);

router.route('./deleteCohort')
  .delete(deleteCohort);

export default router;