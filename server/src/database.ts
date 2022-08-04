import { Pool } from 'pg';

export const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  password: 'walkG@briel1029cloud',
  database: 'alpha-bunker',
  port: 5432,
});
