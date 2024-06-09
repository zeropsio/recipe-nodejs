import { Client } from 'pg';
import { config } from './config';

export const connectDB = async () => {
  const client = new Client({
    host: config.db.host,
    port: config.db.port,
    user: config.db.username,
    password: config.db.password,
    database: config.db.database,
  });

  await client.connect();

  const tableExists = await client.query(`SELECT EXISTS (
    SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename  = 'entries'
  );`);

  if (!tableExists.rows[0]?.exists) {
    await client.query(`CREATE TABLE entries (
      id SERIAL PRIMARY KEY,
      data TEXT NOT NULL
    );`);
  }

  return client;
};

