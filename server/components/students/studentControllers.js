//import from queries
import { 
  getStudentsQuery,
  deleteStudentQuery,
  addStudentQuery
} from './studentQueries';
//exports the controller

export const getStudentsFromCohort = async (req, res) => {
  try {
    // req.query.cohort_id = Number(req.query.cohort_id)
    const students = await getStudentsQuery(req.query);
    res.status(200).send(students);
  } catch (err) {
    console.log('Student controller err:', err);
  }
}

export const deleteStudent = async (req, res) => {
  try {
    console.log('req', req.body);
    await deleteStudentQuery(req.body.username);
    res.status(204).send("Successfully deleted - controller");
  } catch (err) {
    console.log("Could not delete - controller:", err)
    res.send()
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
