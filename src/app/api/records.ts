import { NextApiRequest, NextApiResponse } from 'next';
import { Pool, QueryResult } from 'pg';
import axios from 'axios';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { name, age } = req.body as { name: string; age: number };

      // Insert the record into the database
      const result: QueryResult = await pool.query('INSERT INTO your_table_name (name, age) VALUES ($1, $2)', [name, age]);

      // Send a success response
      res.status(201).json({ message: 'Record added successfully' });
    } catch (error) {
      console.error(error);
      // Send an error response
      res.status(500).json({ error: 'An error occurred' });
    }
  } else {
    // Handle other HTTP methods
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}