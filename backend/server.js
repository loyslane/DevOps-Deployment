
/**************************************
 * Express Setup
  *************************************/
const express = require('express');
const app = express();

/**************************************
 * Server!
  *************************************/

const port = 8080;
const server = app.listen(port, '0.0.0.0', () => {
  console.log('server online');
});

/**************************************
 * Endpoint
  *************************************/

app.get('/', (request, response) => {
  response.send('Hello World!\n');  
});

app.get('/version', (request, response) => {
  response.send('1.0.0');
});

