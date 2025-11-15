const express = require('express');
const router = express.Router();
const { generatePlaylist } = require('../middleware/playlistGenerator');

router.post('/', async (req, res) => {
    try {
        const { userInput } = req.body;
        if (!userInput) {
            return res.status(400).json({ error: "userInput is required" });
        }

        const playlist = await generatePlaylist(userInput);
        return res.status(200).json(playlist);
    } catch (error) {
        console.error("Playlist Error:", error);
        return res.status(500).json({ error: error.message });
    }
});

module.exports = router;
