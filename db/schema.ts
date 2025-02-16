import {integer, text, sqliteTable} from 'drizzle-orm/sqlite-core';

export const user = sqliteTable("User", {
  id: integer("id", { mode: 'number' }).primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email").notNull(),
  avatar: text("avatar")
})

export type User = typeof user.$inferSelect;

export const faq = sqliteTable("Faq", {
  id: integer("id", { mode: 'number' }).primaryKey({ autoIncrement: true }),
  question: text("question").notNull(),
  answer: text("answer").notNull(),
})

export type Faq = typeof faq.$inferSelect;

export const program = sqliteTable("Program", {
  id: integer("id", { mode: 'number' }).primaryKey({ autoIncrement: true }),
  image: text("image"),
  title: text("title").notNull(),
  description: text("description").notNull(),
})

export type Program = typeof program.$inferSelect;
