const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true})); // This is basically to decode the data sent through HTML

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/contact.html');
});


app.post('/submit-form', (req, res) => {
    const pageBody = req.body;
   

    res.send(pageBody);  // opens a new web page and displays all the tags/data retrieved from "body" of the HTML form
});

app.listen(port, () => {  // This is required to "listen" for traffic on the assigned port.  The console.log is info only.  
    console.log(`Server running on http://localhost:${port}`);
});