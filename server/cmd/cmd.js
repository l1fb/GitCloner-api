import { Promise } from "bluebird";
import cmd from "node-cmd-promise";

const cloneRepo = (cohortname, githubHandle, repoNames) => {
  cmd("cd") // goes to the top of the computer
    .then(() => {
      cmd("cd Desktop") // goes to the Deskto[]
        .then(() => {
          cmd(`mkdir ${cohortname}`) // makes a folder with the cohortname
            .then(() => {
              cmd(`cd ${cohortname}`) // goes into the cohortname folder
                .then(() => {
                  cmd(`mkdir ${githubHandle}`) // makes a folder per githubHandle
                    .then(() => {
                      cmd(`cd ${githubHandle}`) // goes into the githubhandle folder
                        .then(() => {
                          repoNames.forEach(repo => {
                            // iterates through the requested repos & clones.
                            cmd(
                              `git clone https://github.com/${githubHandle}/${cohortname}-${repo}.git`
                            );
                          });
                        });
                    });
                });
            });
        })
        .catch(error =>
          console.log("error - Cohort Folder could not be created.", error)
        );
    });
};

export default cloneRepo;
