import { createUserTable } from './users';
import { createCategoriesTable } from './categories';
import { addPgCrypto } from './addCrypto';
import { createDatabase } from './db';

const createDB = async () => {
  await createDatabase();
  await createUserTable();
  await createCategoriesTable();
  await addPgCrypto();
};
createDB()
  .then(() => console.log('All tables was created!'))
  .finally(() => {
    console.log('all tasks were finished');
    process.exit();
  });
