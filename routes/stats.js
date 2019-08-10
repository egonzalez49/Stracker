const router = require('express').Router();
const caller = require('../services/axios');

router.get('/:platform/:username', async (req, res) => {
  const { platform, username } = req.params;

  const response = await caller
    .get(`profile/${platform}/${username}`)
    .catch(err => console.error(err));

  res.send(response.data);
});

router.get('/matches/:id', async (req, res) => {
  const { id } = req.params;

  const response = await caller
    .get(`profile/account/${id}/matches`)
    .catch(err => console.error(err));
  res.send(response.data);
});

module.exports = router;
