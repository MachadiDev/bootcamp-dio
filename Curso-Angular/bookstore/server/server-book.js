const express = require('express');
const bodyParser = require('body-parser');
const books = require('cors');
const app = express();

var currentUser;

var booksOptions = {
  orgim: '/',
  optionsSuccessStatus: 200
}

app.use(books(booksOptions));
app.use(bodyParser.json());

app.listen(3100, () => {
  console.log('Server Started!');
});

app.route('/api/livros').get((request, response) => {
  response.send(BOOKS);
});

app.route('/api/livros').post((request, response) => {
  let BOOKS = request.body;

  const firstId = BOOKS ? Math.max.apply(null, BOOKS.map(bookIterator => bookIterator.id)) + 1 : 1;
  course.id = firstId;
  BOOKS.push(book);
  

  response.status(201).send(book);
});

app.route('/api/livros/:id').put((request, response) => {
  const bookId = +request.params['id'];
  const book = request.body;

  const index = BOOKS.findIndex(bookIterator => bookIterator.id === bookId);
  BOOKS[index] = book;

  response.status(200).send(book);
});

app.route('/api/livros/:id').get((request, response) => {
  const bookId = +request.params['id'];

  response.status(200).send(BOOKS.find(bookIterator => bookIterator.id === bookId));
});

app.route('/api/livros/:id').delete((request, response)=> {
  const courseId = +request.params['id'];
  BOOKS = BOOKS.filter(bookIterator => bookIterator.id !== bookId);
  
  response.status(204).send({});
});

var BOOKS = [
    {
        id: 1,
        name: 'O Chamado de Cthullu',
        price: 35.99,
        quantity: 5,
        category: 'Terror, Suspense',
        img: 'https://images-na.ssl-images-amazon.com/images/I/51t-2xkikXL._SX331_BO1,204,203,200_.jpg',
    },
    {
        id: 2,
        name: 'Arsene Lupin: O Ladrão de Casaca',
        price: 45,
        quantity: 8,
        category: 'Drama Policial',
        img: 'https://a-static.mlcdn.com.br/1500x1500/livro-arsene-lupin-o-ladrao-de-casaca/quintaldascoisas/10936081839/745171392f44202a8a94ff670cc2f176.jpg',
    },
    {
        id: 3,
        name: 'Sherlock Holmes: Um Estudo em Vermelho',
        price: 24.90,
        quantity: 10,
        category: 'Drama Policia, investigação',
        img: 'https://images-na.ssl-images-amazon.com/images/I/41XDTiGcN9L._SX346_BO1,204,203,200_.jpg',
    },
    {
        id: 4,
        name: 'Clube Da Luta',
        price: 69.99,
        quantity: 5,
        category: 'Suspense',
        img: 'https://br.web.img3.acsta.net/medias/nmedia/18/90/95/96/20122166.jpg',
    },
    {
        id: 5,
        name: 'Contos de Edgar Allan Paul',
        price: 40,
        quantity: 5,
        category: 'Terror',
        img: 'https://images-na.ssl-images-amazon.com/images/I/81qQCj9uu3L.jpg',
    },

    {
        id: 6,
        name: 'A Teoria de Tudo',
        price: 25.99,
        quantity: 5,
        category: 'Biografia',
        img: 'https://img.travessa.com.br/livro/BA/1e/1e0b0899-95f1-49b2-91b4-51db3b73286d.jpg',
    }
];
