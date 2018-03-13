import express from 'express';

//import controller
import {
  addStudent,
  removeStudent
} from './studentControllers';

//delcare express.Router();
const router = express.Router();

//invokes the function per routes endpoint
router.route('/addStudent')
  .post(addStudent);

router.route('/removeStudent')
  .delete(removeStudent);



//export default router;
export default router;