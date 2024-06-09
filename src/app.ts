import express from 'express';
import { connectDB } from './db';
import { v4 as uuidv4 } from 'uuid';

const app = express();

app.get('/', async (_, res) => {
  const client = await connectDB();
  const data = uuidv4();

  await client.query(`INSERT INTO entries(data) VALUES ($1)`, [data]);

  const result = await client.query(`SELECT COUNT(*) FROM entries;`);
  const count = result.rows[0].count;

  res.status(201).send({
    message: `This is a simple, basic Node.js / Express.js application running on Zerops.io,
      each request adds an entry to the PostgreSQL database and returns a count.
      See the source repository (https://github.com/zeropsio/recipe-nodejs) for more information.`,
    newEntry: data,
    count: count
  });

  await client.end();
});

app.get('/status', (_, res) => {
  res.status(200).send({ status: 'UP' });
});

export default app;
