import db from '../../database';

export const createDB = async () => {
  try {
    await db.queryAsync(
      'createdb clonerdb'
    )
    console.log('Succesfully created DB');
  } catch (err) {
    console.log('could not create DB:', err);
  }
}

export const dropDB = async () => {
  try {
    await db.queryAsync(
      'dropdb --if-exists clonerdb'
    )
  } catch (err) {
    console.log('could not drop db:', err)
  }
}