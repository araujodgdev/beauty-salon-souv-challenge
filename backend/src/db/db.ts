import {drizzle} from 'drizzle-orm/node-postgres'
import pkg from 'pg';

const { Client } = pkg;

const client = new Client({
    connectionString:  process.env.DATABASE_URL || "postgres://postgres:postgres@localhost:5432/beauty_salon"
})

await client.connect()

export const db = drizzle(client)