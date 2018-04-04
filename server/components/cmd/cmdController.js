import { Promise } from "bluebird";
import cmd from "node-cmd-promise";

export const cloneRepo = async (req, res) => {
  const cohortname = req.body.cohortname;
  const githubHandle = req.body.githubHandle;
  const repoNames = req.body.repoNames;

  try {
    await cmd("cd"); // goes to the top of the computer
    await cmd("cd Desktop"); // goes to the Desktop
    await `mkdir ${cohortname}`; // makes a folder with the cohortname
    await `cd ${cohortname}`; // goes into the cohortname folder
    await `mkdir ${githubHandle}`; // makes a folder per githubHandle
    await `cd ${githubHandle}`; // goes into the githubhandle folder
    await repoNames.forEach(repo => {
      // iterates through the requested repos & clones.
      cmd(
        `git clone https://github.com/${githubHandle}/${cohortname}-${repo}.git`
      );
    });
    res.status(200).send("Successfully downloaded all the repo(s)");
  } catch (err) {
    error("CMD not working properly");
    throw new Error(err.message);
  }
};
