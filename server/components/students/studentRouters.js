import express from 'express';

//import controller
import {
  studentControllers
} from './studentControllers';

//delcare express.Router();
const router = express.Router();

//invokes the function per routes endpoint
router.route('/addStudent')
  .post(studentController);



//export default router;