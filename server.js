const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/api/student', (req, res) => {
    res.json({
        name: "Sandhya",
        course: "Full Stack Development"
    });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});