const express = require('express');
const cors = require('cors');
require('dotenv').config();


const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

const playlistRoutes = require('./routes/playlistRoutes');
app.use('/api/user', playlistRoutes);

app.use('/', (req, res) => {
    res.send('Vibeify Backend Running')
})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})

module.exports = app;
