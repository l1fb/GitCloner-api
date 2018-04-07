import { Promise } from "bluebird";
import cmd from "node-cmd-promise";

import { cloner } from "./cmdHelper.js";

export const cloneRepo = async (req, res) => {
  const cohortname = req.body.cohortname;
  const githubHandle = req.body.githubHandle;
  const repoNames = req.body.repoNames;
  // console.log("hi", req.body);

  try {
    const qry = await cloner(cohortname, githubHandle, repoNames);
    await cmd(qry);
    res.status(200).send("Successfully downloaded all the repo(s)");
  } catch (err) {
    console.log("CMD not working properly", err);
    res.send("error during CMD commands");
  }
};
