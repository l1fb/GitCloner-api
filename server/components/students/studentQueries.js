//import db
import db from '../../database';
//import from SQL Helper
import { 
  addStudent,
  deleteStudent,
  getStudentFromCohort
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

export const deleteStudentQuery = async (body) => {
  try {
    await db.asyncQuery(deleteStudent(body))
    console.log(`Sucessfully delete the student with username: ${body}`);
  } catch (err) {
    console.log(`Could not delete ${body}`);
  }
}

export const getStudentQuery = async (body) => {
  try {
    await db.asyncQuery(getStudentsFromCohort(body));
    console.log(`Get request successful - ${body}`);
  } catch (err) {
    console.log(`Could not get username: ${body}`);
  }
}