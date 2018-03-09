import { Pool } from 'pg';
import Promise from 'bluebird';

const db = new Pool ({
  user: process.env.USER,
  database: 'clonerdb',
  host: 'localhost',
  password: process.env.PASSWORD,
  port: process.env.DBPORT,
  max: 5
})

db.connect((err, client, release) => {
  if (err) {
    return console.error('DB connection error:', err.stack)
  }
})

db.on('connect', () => {
  console.log('PSQL connection established');
})

Promise.promisifyAll(db);

export default db;