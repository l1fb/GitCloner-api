import { Pool } from 'pg';
import Promise from 'bluebird';

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
    console.log('the env!!', process.env.USER, process.env.PASSWORD, process.env.DB_PORT)
    console.error('DB connection error:', err.stack);
    return;
  }
})

db.on('connect', () => {
  console.log('PSQL connection established on port:', process.env.DB_PORT);
})

Promise.promisifyAll(db);

export default db;