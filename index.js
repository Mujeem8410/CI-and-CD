const express = require('express'); 
const app = express();
const cors = require('cors');
app.use(express.json());

app.use(cors());

const port = 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.post('/greeting', (req, res) => {
  const name = req.body.name;
  res.json({ message: `Hello,: ${name} kya hall hai Bhai!` });
});
 
app.get('/test', (req, res) => {
  res.json({ message: 'This is a test endpoint and make sure auto deploy by the CI and CD which the concept of DevOps...:)' });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});