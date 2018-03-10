import express from 'express';

import studentRouters from '../components/students/studentRouters';

const router = express.Router();

router.use('/students', studentRouters);

export default router;