import './database/connection';

import express from 'express';

const app = express();

app.get('/users', (request, response) => {
   return response.json({messege: 'Hello World'});
});

app.listen(3333);