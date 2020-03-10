const Joi = require('@hapi/joi')
const express = require('express');

const app = express();

const schemaHello = Joi.object({
  hello: Joi.string()
});

app.get('/', (req, res) => {
  // Here is some process
  const result = { hello: 'world' };

  const isErrorValidation = schemaHello.validate(result).error;
  if(isErrorValidation) {
    res.status(500).send('Ups');
    return;
  }

  res.send(result);
});

app.listen(3001, () => {
  console.log('listening in port 3001');
});
