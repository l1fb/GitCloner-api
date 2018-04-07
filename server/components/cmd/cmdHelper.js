export const cloner = (cohortname, githubHandle, repoNames) => {
  return `
    cd
    cd Desktop
    if [ ! -d ${cohortname} ]; then mkdir ${cohortname}; fi;
    cd ${cohortname}
    if [ ! -d ${githubHandle} ]; then mkdir ${githubHandle}; fi;
    cd ${githubHandle}
    if [ ! -d ${repoNames} ]; then mkdir ${repoNames}; fi;
    cd ${repoNames}
    git clone https://github.com/${githubHandle}/${cohortname}-${repoNames}.git
  `;
};
