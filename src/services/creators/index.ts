import {createUserTable} from './users';
import {createDatabase} from './db';
import {createCategoriesTable} from './categories';

createDatabase();
createUserTable();
createCategoriesTable();
