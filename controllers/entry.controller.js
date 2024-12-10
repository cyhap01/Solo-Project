const Entry = require('../models/entry.model.js'); // //importing Entry schema

//------------------CONTROLLERS--------------

//GETTING ALL Entries ------------

const getEntries = async (req, res) => {
  try {
    const entries = await Entry.find(req.body);
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//GETTING a specific JOURNAL Date entry--------
const getEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const entry = await Entry.findById(id);
    res.status(200).json(entry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//POSTING/Creating a new Entry----------

const createEntry = async (req, res) => {
  try {
    const entry = await Entry.create(req.body); //create an entry instance
    res.status(200).json(entry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

///DELETING AN ENTRY
const deleteEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const entry = await Entry.findByIdAndDelete(id);

    if (!entry) {
      //if not found
      return res.status(404).json({ message: 'Journal Entry not found' });
    }

    res.status(200).json({ message: 'Journal Entry Deleted Successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//UPDATING A JOURNAL entry---------

const updatedEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const entry = await Entry.findByIdAndUpdate(id, req.body);

    if (!entry) {
      //if not found
      return res.status(404).json({ message: 'Journal Entry not found' });
    }

    const updatedEntry = await Entry.findById(id); ///new edits
    res.status(200).json(updatedEntry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//exporting all these middlewares to the Router
module.exports = {
  getEntries,
  getEntry,
  createEntry,
  deleteEntry,
  updatedEntry,
};
