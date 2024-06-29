const form = document.getElementById('birthday-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;

    // Store data in a database (we'll use a simple JSON file for now)
    const data = { username, email, dob };
    fetch('/api/birthdays', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
});