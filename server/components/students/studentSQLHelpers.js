//export query command in a template literal
export const addStudent = ({ fullname, username, cohort_id }) => {
  return `
    INSERT INTO studentTable (fullname, username)
    VALUES (${ fullname }, ${ username }, ${ cohort_id })
    RETURNING id, fullname, username, cohort_id
  `;
};
