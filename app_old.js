const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/contact.html');
});

app.post('/submit-form', (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;

    res.send('Email ' + email + 'First Name: ' + firstName);
    res.send('First Name: ' + firstName);
    res.send('Last Name: ' + lastName);
    
  
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});