//Routes: wir legen fest, an welchen Endpunkten entsprechende Anfragen angenommen werden

const express = require("express");
//Router: Instanz von express Library
const router = express.Router();
//importiere controller:
const {
  getAllEntries,
  getSingleEntry,
  createEntry,
  updateEntry,
  deleteEntry,
} = require("../controller/entries");

router.route("/entries").get(getAllEntries).post(createEntry);

router
  .route("/entries/:id")
  .get(getSingleEntry)
  .put(updateEntry)
  .delete(deleteEntry);

module.exports = router;
