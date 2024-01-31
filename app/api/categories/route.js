import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export default async function handler(req, res) {
  const db = await open({
    filename: './dua_main.sqlite',
    driver: sqlite3.Database,
  });

  const categories = await db.all('SELECT * FROM category');
  
  res.status(200).json(categories);
}

