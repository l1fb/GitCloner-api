import express from 'express';

import studentRouters from '../components/students/studentRouters';
import cohortRouters from '../components/cohorts/cohortRouters';

const router = express.Router();

router.use('/students', studentRouters);
router.use('/cohorts', cohortRouters);

export default router;