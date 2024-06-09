import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
  db: {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432'),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  }
};

