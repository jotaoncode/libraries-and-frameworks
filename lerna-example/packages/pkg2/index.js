const { sum, subtract } = require('@sample/pkg1');

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send({ result: subtract(2,1) })
});

app.listen(3000, () => {
  console.log('listening in port 3000');
});
