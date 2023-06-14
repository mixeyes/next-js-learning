import { Client, PoolClient, PoolConfig } from 'pg';
import dotenv from 'dotenv';
import Pool from 'pg-pool';

dotenv.config();


const port = process?.env?.PGSQL_PORT ? +process?.env?.PGSQL_PORT : undefined;
const config: PoolConfig = {
  user: process.env['PGSQL_USER'],
  host: process.env['PGSQL_HOST'],
  database: process.env['PGSQL_DATABASE'],
  password: process.env['PGSQL_PASSWORD'],
  port,
};

const createConnection = () => {
  try {
    return new Pool(config);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const execute = async (query: string) => {
  let pool = null;
  let client = null;
  if (!pool) {
    pool = createConnection();
  }
  try {
    client = await pool.connect();
    const res = await client.query(query);
    return res.rows;
  } catch (error) {
    console.log(error);
  } finally {
    await client?.release(true);
  }
};

export default execute;
