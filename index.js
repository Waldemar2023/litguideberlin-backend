require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8080;
//importiere Funktion, die uns die Verbindung zur Datenbank ermöglicht:
const db = require("./db");
//importiere Route
const entriesRouter = require("./routes/entries");

db();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", entriesRouter);

app.get("/", (req, res) => {
  res.send(`<h1>Litguide Berlin API</h1>`);
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
