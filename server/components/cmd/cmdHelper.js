export const cloner = (cohortname, githubHandle, repoNames) => {
  return `
    cd
    cd Desktop
    [ -d ${cohortname} ] || mkdir ${cohortname}
    cd ${cohortname}
    [ -d ${githubHandle} ] || mkdir ${githubHandle}
    cd ${githubHandle}
    [ -d ${repoNames} ] || mkdir ${repoNames}
    cd ${repoNames}
    git clone https://github.com/${githubHandle}/${cohortname}-${repoNames}.git
  `;
};
