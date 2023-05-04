const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Rutas
app.get('/products', (req, res) => {
  // TODO: implementar lógica para devolver todos los productos
});

app.get('/products/:id', (req, res) => {
  // TODO: implementar lógica para devolver el producto con el id especificado
});

// Iniciar servidor
app.listen(8080, () => {
  console.log('Servidor iniciado en el puerto 8080');
});

const fs = require('fs');

// Cargar productos desde archivo
const products = JSON.parse(fs.readFileSync('products.json'));

app.get('/products', (req, res) => {
  const { limit } = req.query;

  if (limit) {
    const limitedProducts = products.slice(0, limit);
    res.json(limitedProducts);
  } else {
    res.json(products);
  }
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;

  const product = products.find((p) => p.id === parseInt(id));

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Producto no encontrado' });
  }
});
