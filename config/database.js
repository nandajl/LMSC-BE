const { 
    DB_USER = 'postgres', 
    DB_PASSWORD = '12345', 
    DB_HOST = '127.0.0.1', 
    DB_NAME = 'lms_api', 
    DB_PORT = '5432' 
  } = process.env;
  
module.exports = {
    development: {
      username: DB_USER,
      password: DB_PASSWORD,
      database: `${DB_NAME}`,
      host: DB_HOST,
      port: DB_PORT,
      dialect: 'postgres',
    },
    test: {
      username: DB_USER,
      password: DB_PASSWORD,
      database: `${DB_NAME}`,
      host: DB_HOST,
      port: DB_PORT,
      dialect: 'postgres',
    },
    production: {
      username: DB_USER,
      password: DB_PASSWORD,
      database: `${DB_NAME}`,
      host: DB_HOST,
      port: DB_PORT,
      dialect: 'postgres',
    },
  };
  