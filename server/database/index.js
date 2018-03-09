import { Pool } from 'pg';
import Promise from 'bluebird';

const db = new Pool ({
  database: 'clonerdb',
  user: process.env.USER,
  password: process.env.PASSWORD,
  port: process.env.DBPORT,

})

db.connect((err, client, release) => {
  if (err) {
    return console.error('DB connection error:', err.stack)
  }
  client.query('SELECT NOW()', (err, result) => {
    release()
    if (err) {
      return console.error(' Query did not go through', err.stack)
    }
    console.log('DB successful?', result.rows);
  })
})

Promise.promisifyAll(db);

export default db;