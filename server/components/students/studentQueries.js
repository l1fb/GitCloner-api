//import db
import db from '../../database';
//import from SQL Helper
import { 
  addStudent,
  deleteStudent,
  getStudent
} from './studentSQLHelpers';
// export the queries
export const addStudentQuery = async (body) => {
  try {
    const addedStudent = await db.asyncQuery(addStudent(body))
    console.log("Successfully added a student");
    return addedStudent;
  } catch (err) {
    console.log("Could not add a student", err);
  }
}

export const deleteStudent = async (body) => {
  try {
    await db.asyncQuery(deleteStudent(body))
    console.log(`Sucessfully delete the student with username: ${body}`);
  } catch (err) {
    console.log(`Could not delete ${body}`);
  }
}

export const getStudent = async (body) => {
  try {
    await db.asyncQuery(getStudent(body));
    console.log(`Get request successful - ${body}`);
  } catch (err) {
    console.log(`Could not get username: ${body}`);
  }
}