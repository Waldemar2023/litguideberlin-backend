//importiere Model:

const Entry = require("../models/Entry");
const { all } = require("../routes/entries");

//Funktionen, die an entsprechenden Endpunkten aufgerufen werden und Daten aus der DB createn, readen, updaten, deleten

const getAllEntries = async (req, res) => {
  try {
    const allEntries = await Entry.find();
    res.status(200).json(allEntries);
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
};

const getSingleEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const singleEntry = await Entry.findById(id);
    res.status(200).json(singleEntry);
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
};

const createEntry = async (req, res) => {
  try {
    const newEntry = await Entry.create(req.body);
    res.status(201).send("New entry has been created");
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
};

const updateEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedEntry = await Entry.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedEntry);
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
};

const deleteEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedEntry = await Entry.findByIdAndDelete(id);
    res.status(200).send(`${deletedEntry.title} has been deleted.`);
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
};

module.exports = {
  getAllEntries,
  getSingleEntry,
  createEntry,
  updateEntry,
  deleteEntry,
};
