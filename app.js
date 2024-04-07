const express = require('express');
const customerRoute = require('./routes/customer')
const app = express();

app.use(express.json());

app.use('/customer', customerRoute);
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log('App listening on port ', port);
});


module.exports = app;