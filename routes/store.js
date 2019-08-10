const router = require('express').Router();
const caller = require('../services/axios');

router.get('/', async (req, res) => {
  const response = await caller.get('store').catch(err => console.error(err));

  res.send(response.data);
});

module.exports = router;
