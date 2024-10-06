import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    schema: "./src/db/schema",
    dialect: 'postgresql',
    out: "./drizzle",
    migrations: {
      prefix: 'index',
    },
    dbCredentials: {
        url: process.env.DATABASE_URL || "postgres://postgres:postgres@localhost:5432/beauty_salon"
    }
  })
