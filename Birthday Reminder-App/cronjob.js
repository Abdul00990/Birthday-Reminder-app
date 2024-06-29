const nodemailer = require('nodemailer');
const fs = require('fs');

// Load birthdays from JSON file
const birthdays = JSON.parse(fs.readFileSync('birthdays.json'));

// Filter birthdays for today
const today = new Date();
const todayBirthdays = birthdays.filter((birthday) => {
    const dob = new Date(birthday.dob);
    return dob.getMonth() === today.getMonth() && dob.getDate() === today.getDate();
});

// Send emails using Nodemailer
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // or '
})