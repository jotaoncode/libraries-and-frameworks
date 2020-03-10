const Joi = require('@hapi/joi');
const express = require('express');

const app = express();

// Request body parser, middleware
app.use(express.json());

// Schema validator of the person
const schemaPerson = Joi.object({
  name: Joi.string()
});

const middlewareValidatePerson = (req, res, next) => {
  const { body } = req;

  if (schemaPerson.validate(body).error) {
    req.isValid = false;
  }
  next();
};

app.post('/person', middlewareValidatePerson, (req, res) => {
  if (req.isValid === false) {
    res.status(422).send('wrong');
    return;
  }
  res.send('Ok');
});

app.listen(3000, err => {
  if (err) {
    console.log('error');
    return;
  }
  console.log('listening port 3000');
});
