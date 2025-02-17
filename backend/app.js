const express = require('express');
const app = express();
const cors = require('cors');
const {db} = require('./db/db');

require('dotenv').config();
PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello World');
});
db();
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});