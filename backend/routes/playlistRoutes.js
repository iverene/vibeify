const express = require('express');
const router = express.Router();
const { generatePlaylist } = require('../middleware/playlistGenerator');

router.post('/', generatePlaylist);

module.exports = router;
