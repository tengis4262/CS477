const express = require('express');
const app = express();
const port = 3000;

// Middleware to serve static files
app.use(express.static('public'));

// Routes for /, /users, and /products
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Router for /users
const usersRouter = express.Router();
app.use('/users', usersRouter);

usersRouter.get('/', (req, res) => {
  res.send('Users page');
});

usersRouter.post('/', (req, res) => {
  res.send('Post request for Users');
});

// Router for /products
const productsRouter = express.Router();
app.use('/products', productsRouter);

productsRouter.get('/', (req, res) => {
  res.send('Products page');
});

productsRouter.post('/', (req, res) => {
  res.send('Post request for Products');
});

// Custom 404 page
app.use((req, res, next) => {
  res.status(404).send("Sorry, the page you're looking for does not exist.");
});

// Custom error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
