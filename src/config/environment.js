require('dotenv').config();

const env = {
  PORT: process.env.PORT || 3000,
  DATABASE_DIALECT: process.env.DATABASE_DIALECT || 'postgres',
  DATABASE_URL: process.env.DATABASE_URL,
  NODE_ENV: process.env.NODE_ENV || 'production',
};

module.exports = env;
