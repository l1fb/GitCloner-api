export const createCohort = ({cohortname}) => {
  return `
    INSERT INTO cohortTable (cohortname)
    VALUES (${ cohortname })
    RETURNING id, cohortname
  `;
};

export const removeCohort = ({cohortname}) => {
  return `
    DELETE FROM cohortTable WHERE cohortname = ${ cohortname }
  `;
};