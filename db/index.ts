import {BetterSQLite3Database, drizzle } from 'drizzle-orm/better-sqlite3';

export const db : BetterSQLite3Database =  drizzle({ connection: { source: process.env.DATABASE_URL }});

