const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
const dbUrl = 'mongodb://darryl:test123@ds231956.mlab.com:31956/gql-reading-list';

const app = express();

// allow cross-origin requests
app.use(cors());

// connect to mlab database
mongoose.connect(dbUrl, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log('connected to database');
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('now listening for requests on port 4000');
});

