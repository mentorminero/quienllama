const express = require('express');
const app = express();

// Configura dotenv y carga las variables de entorno
require('dotenv').config();

// Ruta para enviar el archivo index.html
app.get('/', (req, res) => {
  // Lee el contenido del archivo HTML
  const fs = require('fs');
  const htmlContent = fs.readFileSync('index.html', 'utf8');
  //const htmlContent = fs.readFileSync(__dirname + '/index.html', 'utf8')

  // Reemplaza <%= clave %> con el valor de la variable de entorno
  const htmlWithData = htmlContent.replace(/<%= clave %>/g, process.env.claves);

  // Envía el HTML con la variable de entorno reemplazada
  res.send(htmlWithData);
});

app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

app.listen(3000, () => {
  console.log('Servidor en ejecución en el puerto 3000');
});
