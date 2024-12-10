const express = require('express');
const router = express.Router();
const Entry = require('../models/entry.model.js');
const {
  getEntries,
  getEntry,
  createEntry,
  deleteEntry,
  updatedEntry,
} = require('../controllers/entry.controller.js');

// //GETTING ALL Entries ------------

router.get('/', getEntries);

//GETTING a specific JOURNAL Date entry--------

router.get('/:id', getEntry);

//POSTING/Creating a new Entry----------
router.post('/', createEntry);

///DELETING AN ENTRY
router.delete('/:id', deleteEntry);

//UPDATING A JOURNAL entry---------

router.put('/:id', updatedEntry);

module.exports = router; //exporting router with methods attached
