export const cloner = (cohortname, githubHandle, repoNames) => {
  return `
    cd
    cd Desktop
    mkdir ${cohortname}
    cd ${cohortname}
    mkdir ${githubHandle}
    git clone https://github.com/${githubHandle}/${cohortname}-${repoNames}.git
  `;
};
