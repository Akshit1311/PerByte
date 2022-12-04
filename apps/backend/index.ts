import express, { Express, Request, Response } from "express";
const app: Express = express();
import cors from "cors";
import { sendNotifs } from "./sendNotif";
const port = 4000;
app.use(cors());
app.get("/", (req, res) => {
  sendNotifs();
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
