const express = require("express");
const app = express();
const port = 3001;
const products = require('./data/products');

// middleware para parsear el body
app.use(express.json());

// middleware para permitir cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// http://localhost:3000/
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello!",
    timestamp: new Date().toISOString(),
    status: "success",
  });
});

// get all products
// http://localhost:3000/products
app.get('/products', (req, res) => {
  res.json({
    message: 'Productos',
    timestamp: new Date().toISOString(),
    status: 'success',
    products: products
  });
});

// get product by id
app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  const product = products.find((product) => product.id === id);
  if (!product) {
    return res.status(404).json({
      message: 'Producto no encontrado',
      timestamp: new Date().toISOString(),
      status: 'error',
    });
  }
  res.json({
    message: 'Producto',
    timestamp: new Date().toISOString(),
    status: 'success',
    product: product
  });
});

// create product - http://localhost:3000/products
app.post('/products', (req, res) => {
  const { name, price, category, stock, image } = req.body;
  const product = { id: (products.length + 1).toString(), name, price, category, stock, image };
  products.push(product);
  res.json({
    message: 'Producto creado',
    timestamp: new Date().toISOString(),
    status: 'success',
    product: product
  });
});

// update product
app.put('/products/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const product = products.find((product) => product.id === id);
  if (!product) {
    return res.status(404).json({
      message: 'Producto no encontrado',
      timestamp: new Date().toISOString(),
      status: 'error',
    });
  }
  product.name = name;
  product.price = price;
  res.json({
    message: 'Producto actualizado',
    timestamp: new Date().toISOString(),
    status: 'success',
    product: product
  });
});

// delete product
app.delete('/products/:id', (req, res) => {
  const { id } = req.params;
  const product = products.find((product) => product.id === id);
  if (!product) {
    return res.status(404).json({
      message: 'Producto no encontrado',
      timestamp: new Date().toISOString(),
      status: 'error',
    });
  }
  products = products.filter((product) => product.id !== id);
  res.json({
    message: 'Producto eliminado',
    timestamp: new Date().toISOString(),
    status: 'success',
    product: product
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
