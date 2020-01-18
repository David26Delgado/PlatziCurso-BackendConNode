require('dotenv').config();

const config = {
  dev: process.env.NODE_END !== 'production',
  port: process.env.PORT || 3000
};

module.exports = { config };
