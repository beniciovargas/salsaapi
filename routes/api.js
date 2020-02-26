const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const db = require('../models')

//GET Artists Index
router.get('/artists', ctrl.artists.index);

// GET Artists Show
router.get('/artists/:id', ctrl.artists.show);
  
// POST Artist Create
router.post('/artists', ctrl.artists.create);

// PUT Artist Update
// router.put('/artists/:id', ctrl.artists.update);

// DELETE Artist Destroy
//router.delete('/artists/:id', ctrl.artists.destroy);

module.exports = router;