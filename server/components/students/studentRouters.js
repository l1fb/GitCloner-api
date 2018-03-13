import express from 'express';

//import controller
import {
  addStudent,
  deleteStudent,
  getStudentsFromCohort
} from './studentControllers';

//delcare express.Router();
const router = express.Router();

//invokes the function per routes endpoint
router.route('/addStudent')
  .post(addStudent);

router.route('/deleteStudent')
  .delete(deleteStudent);

router.route('/getStudent/:cohort_id')
  .get(getStudentsFromCohort);

//export default router;
export default router;