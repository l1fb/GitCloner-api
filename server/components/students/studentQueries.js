//import db
import db from '../../database';
//import from SQL Helper
import { 
  addStudent,
  deleteStudent,
  getStudentsFromCohort
} from './studentSQLHelpers';
// export the queries
export const addStudentQuery = async (body) => {
  try {
    const addedStudent = await db.queryAsync(addStudent(body))
    console.log("Successfully added a student");
    return addedStudent;
  } catch (err) {
    console.log("Could not add a student", err);
  }
}

export const deleteStudentQuery = async (body) => {
  try {
    await db.queryAsync(deleteStudent(body))
    console.log(`Sucessfully delete the student with username: ${body}`);
  } catch (err) {
    console.log(`Could not delete ${body}`);
  }
}

export const getStudentsQuery = async (body) => {
  try {
    const result = await db.queryAsync(getStudentsFromCohort(body));
    console.log(`Get request successful - ${body}`);
    return result;
  } catch (err) {
    console.log(`Could not get username: ${body}`);
  }
}