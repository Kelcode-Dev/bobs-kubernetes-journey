const express = require('express');
const bodyParser = require('body-parser');
const app = express();

let todos = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
  res.render('index', { todos });
});

app.post('/add', (req, res) => {
  const { todo } = req.body;
  if (todo) todos.push(todo);
  res.redirect('/');
});

app.post('/delete', (req, res) => {
  const { index } = req.body;
  todos.splice(index, 1);
  res.redirect('/');
});

const PORT = 3000;
app.listen(PORT, () => console.log(`To-Do App running on http://localhost:${PORT}`));
