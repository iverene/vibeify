const express = require('express');
const cors = require('cors');
require('dotenv').config();



const app = express();

app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

const PORT = process.env.PORT || 5000;

const playlistRoutes = require('./routes/playlistRoutes');
app.use('/api/user/playlist', playlistRoutes);

app.use('/', (req, res) => {
    res.send('Vibeify Backend Running')
})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})

module.exports = app;
