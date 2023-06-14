import { Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config();


const client = new Client({
  user: process.env['PGSQL_USER'],
  host: process.env['PGSQL_HOST'],
  database: 'postgres',
  password: process.env['PGSQL_PASSWORD'],
  port: process.env['PGSQL_PORT'] ? +process.env['PGSQL_PORT'] : undefined,
});

const checkDBExist = async () => {
  try {
    await client.connect(); // gets connection
    const list = await client.query(
      `SELECT * FROM pg_database  WHERE datname = 'next_app';`
    ); // sends queries
    return !!list.rowCount;
  } catch (error: any) {
    console.error(error.stack);
    return false;
  } finally {
    await client.end(); // closes connection
  }
};

export const createDatabase = async () => {
  try {
    if (!checkDBExist()) {
      await client.connect(); // gets connection
      await client.query(`CREATE DATABASE next_app`); // sends queries
      console.log('Database created');
    } else {
      console.log('DB next-app already exist');
    }

    return true;
  } catch (error: any) {
    console.error(error.stack);
    return false;
  } finally {
    await client.end(); // closes connection
  }
};

