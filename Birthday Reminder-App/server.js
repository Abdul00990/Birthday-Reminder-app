const express = require('express');
const app = express();
const fs = require('fs');
const cron = require('node-cron');

app.use(express.json());

// Store data in a JSON file
const birthdays = [];

app.post('/api/birthdays', (req, res) => {
    const { username, email, dob } = req.body;
    birthdays.push({ username, email, dob });
    fs.writeFileSync('birthdays.json', JSON.stringify(birthdays));
    res.json({ message: 'Birthday added successfully!' });
});

app.get('/api/birthdays', (req, res) => {
    res.json(birthdays);
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});