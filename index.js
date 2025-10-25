const express = require('express'); 
const app = express();
app.use(express.json());

const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/greeting', (req, res) => {
  const name = req.body.name;
  res.send(`Hello,: ${name} kya hall hai Bhai!`);
});
 
app.get('/test', (req, res) => {
  res.send('This is a test endpoint...):');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});