import { Pool } from 'pg';
import Promise from 'bluebird';
// import {} from 'dotenv/config';

const db = new Pool ({
  user: process.env.USER,
  database: 'clonerdb',
  host: 'localhost',
  password: process.env.PASSWORD,
  port: process.env.DB_PORT,
  max: 5
})

db.connect((err, client, release) => {
  if (err) {
    return console.error('DB connection error:', err.stack)
  }
})

db.on('connect', () => {
  console.log('PSQL connection established on port:', process.env.DB_PORT);
})

Promise.promisifyAll(db);

export default db;