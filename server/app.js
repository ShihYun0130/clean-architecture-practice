const createError = require('http-errors');
const express = require('express');
const path = require('path');
const routes = require('./routes/index');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const Services = require('./services');
const Models = require('./models');
const cors = require('cors');

const app = express();
app.use(cors());

module.exports = async () => {
  // view engine setup
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'jade');

  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, '../public')));


  const models = await Models.init();
  Services.init(models);

  app.use('/api', routes);

  app.get('/', (req, res) => {
    res.send('OK');
  });

  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    next(createError(404));
  });

  // error handler
  app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

  return app;
}
