//export query command in a template literal

export default createStudentTable = () => {
  `
  CREATE TABLE IF NOT EXISTS studentTable
  (
    id SERIAL,
    fullname VARCHAR(50) NOT NULL,
    username VARCHAR(20) NOT NULL,
    cohort_id INT NOT NULL,
    CONSTRAINT fk_cohort
  )
  `
}