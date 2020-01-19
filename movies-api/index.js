const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies');

const { logErrors, errorHandler } = require('./utils/middlewares/errorHandler');

// body parser - middleware
app.use(express.json());

moviesApi(app);

// Middlewares de error siempre al final de las rutas
app.use(logErrors);
app.use(errorHandler);

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});
