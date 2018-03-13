//export query command in a template literal
export const addStudent = ({ fullname, username, cohort_id }) => {
  return `
    INSERT INTO studentTable (fullname, username)
      VALUES ('${ fullname }', '${ username }', '${ cohort_id }')
      ON CONFLICT studentTable DO NOTHING  
    RETURNING id, fullname, username, cohort_id
  `;
};

export const deleteStudent = ({ username }) => {
  return `
    DELETE FROM studentTable WHERE username = '${ username }'
  `;
};

export const getStudentsFromCohort = ({ cohort_id }) => {
  return `
    SELECT * FROM studentTable WHERE '${ cohort_id }'
  `
}