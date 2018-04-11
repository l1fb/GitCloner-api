import express from "express";
import body from "body-parser";
import router from "./routes";
import cors from "cors";

const PORT = process.env.SERVER_PORT;

import db from "./database";

const app = express();

app.use(cors());
app.use(body.urlencoded({ extended: true }));
app.use(body.json());

app.use("/api", router);

//serve static files

app.listen(PORT, () =>
  console.log("Cloner server is listening on port:", PORT)
);
