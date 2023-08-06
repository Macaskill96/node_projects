import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { NoteRouter } from "./routes/notes.router";

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

app.use("/notes", NoteRouter);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
