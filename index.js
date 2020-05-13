const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const bodyParser = require('body-parser');
const { provideErrorHandler } = require('./middlewares');

// routes
const usersRoutes = require('./routes/users');


//Model Imports
require('./model/users');


const app = express();
const PORT = process.env.PORT || 3000;


//DB connection
mongoose.connect(config.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }, () => {
    console.log('Connected  to DB!')
  });

  app.use(bodyParser.json());
  app.use(provideErrorHandler);

//Api Routes
app.use('/api/v1/users', usersRoutes);

  //Listening Port
app.listen(PORT, () => {
    console.log('Server is listening on port: ', PORT);
  })
