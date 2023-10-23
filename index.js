// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);

const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'publicform')));
app.post('/submit', (req, res) => 
{
const { username, password, email } = req.body;
res.send(`Server received: Username - ${username}, Password - ${password}, Email - ${email}`);
});
app.listen(3000);
