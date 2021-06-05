import * as functions from "firebase-functions";
import * as express from "express";
import {addEntry,
  deleteEntry,
  getAllEntries,
  updateEntry,
  getEntry,
} from "./controllers/entryHttpController";
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

const app = express();
app.get("/", (req, res) => res.status(200).send("Hey there!"));
app.post("/entries", addEntry);
app.get("/entries", getAllEntries);
app.get("/entries/:entryId", getEntry);
app.patch("/entries/:entryId", updateEntry);
app.delete("/entries/:entryId", deleteEntry);
exports.app = functions.https.onRequest(app);
