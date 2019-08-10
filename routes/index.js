const router = require('express').Router();
const store = require('./store');
const stats = require('./stats');

router.use('/store', store);
router.use('/stats', stats);

module.exports = router;
