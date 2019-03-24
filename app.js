const express = require('express');
const graphqlHTTP = require('express-graphql');

const app = express();

app.use('/', graphqlHTTP({

}));

const port = 5000;
app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
module.exports = app;
