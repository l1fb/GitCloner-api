//import from queries
import { 
  getStudentQuery,
  deleteStudentQuery,
  addStudentQuery
} from './studentQueries';
//exports the controller

export const getStudentsFromCohort = async (req, res) => {
  try {
    const students = await getStudentQuery(req.param);
    res.status(200).send(students);
  } catch (err) {
    console.log('Student controller err:', err);
  }
}

export const deleteStudent = async (req, res) => {
  try {
    await deleteStudentQuery(req.body);
    res.status(204).send("Successfully deleted - controller");
  } catch (err) {
    console.log("Could not delete - controller:", err)
  }
}

export const addStudent = async (req, res) => {
  try {
    await addStudentQuery(req.body);
    res.status(201).send("Successfully created student - controller");
  } catch (err) {
    console.log("Could not add student - controller:", err);
  }
}
