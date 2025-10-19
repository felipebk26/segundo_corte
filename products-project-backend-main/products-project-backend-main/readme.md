1. crear carpetas para las aplicaciones
- crear carpeta para api
- crear carpeta para front-end

2. dentro de la carpeta de la api

```json
npm init -y
npm install express --save
npm install nodemon --save-dev
```

3. crear archivo index.js
- agregar script de express.js https://expressjs.com/es/

4. crear el script para ejecutar index.js ( package.json )

```json
"scripts": {
    "dev": "nodemon index.js"
},
```

5. actualizar index.js

```js
const express = require("express");
const app = express();
const port = 3000;

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

```
6. crear carpeta para guardar base de datos

data >> product.js
