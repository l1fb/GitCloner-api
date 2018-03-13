export const createCohort = ({cohortname}) => {
  return `
    INSERT INTO cohortTable (cohortname)
    VALUES (${ cohortname })
    RETURNING id, cohortname
  `;
};

export const deleteCohort = ({cohortname}) => {
  return `
    DELETE FROM cohortTable WHERE cohortname = ${ cohortname }
  `;
};