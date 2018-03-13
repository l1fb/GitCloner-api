export const createCohort = ({cohortname}) => {
  // console.log('cohort name from SQL', cohortname)
  return `
    INSERT INTO cohortTable (cohortname)
      VALUES ('${ cohortname }')
    RETURNING id, cohortname
  `;
};

export const deleteCohort = ({cohortname}) => {
  console.log('cohort name', cohortname)
  return `
    DELETE FROM cohortTable WHERE cohortname = '${ cohortname }'
  `;
};