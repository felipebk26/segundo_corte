const express = require("express");
const app = express();
const port = 3000; 
let users = require('./data/users'); 


app.use(express.json());


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// http://localhost:3000/
app.get("/", (req, res) => {
  res.status(200).json({
    message: "API de usuarios - Parcial 2do corte",
    timestamp: new Date().toISOString(),
    status: "success",
  });
});


// https://localhost:3000/users
app.get('/users', (req, res) => {
  res.json({
    message: 'Lista de usuarios',
    timestamp: new Date().toISOString(),
    status: 'success',
    users: users
  });
});


// https://localhost:3000/users

app.post('/users', (req, res) => {
  
  const { name, phone, email, address, age, photoUrl } = req.body;
  
  
  const user = { 
    id: Date.now().toString(), 
    name: name, 
    phone: phone, 
    email: email, 
    address: address, 
    age: parseInt(age), 
    photoUrl: photoUrl 
  };
  
 
  users.unshift(user);
  
  res.json({
    message: 'Usuario creado exitosamente',
    timestamp: new Date().toISOString(),
    status: 'success',
    user: user
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});