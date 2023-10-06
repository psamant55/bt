const http = require('http');
const { translate } = require('bing-translate-api');

const express = require('express');
const app = express ();
app.use(express.json());

 
// const hostname = '13.228.225.19';
// const port = 3000;

const PORT = process.env.PORT || 3030;

const books = [
{title: 'Harry Potter', id: 1},
{title: 'Twilight', id: 2},
{title: 'Lorien Legacies', id: 3}
]
 
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });
 
// app.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

app.get('/', (request, response) => {
  response.send('Working');
});

app.get('/translate', (request, response) => {

  translate(request.query.text, null, 'or').then(res => {
    // console.log(res.translation);
    response.send(res.translation);
  }).catch(err => {
    console.error(err);
  });
});

//CREATE Request Handler
app.post('/translate', (req, response)=> {

  translate(req.body.text, null, 'or').then(res => {
    const translation = res.translation
    response.send(translation);
  }).catch(err => {
    console.error(err);
  });

  // const book = {
  //   id: books.length + 1,
  //   title: req.body.title
  // };
  // books.push(book);
  // res.send(book);

  // res.send(req.text);

  // req.body.title

  // constreq.body.text
 
  // const { error } = validateBook(req.body);
  // const book = {
  //   id: books.length + 1,
  //   title: req.body.title
  // };
  // books.push(book);
  // res.send(book);
});