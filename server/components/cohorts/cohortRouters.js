import express from 'express';

import {
  createCohort,
  removeCohort
} from './cohortController';

const router = express.Router();

router.route('/createCohort')
  .post(createCohort);

router.route('./removeCohort')
  .delete(removeCohort);