// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  index,
  integer,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
  text,
} from "drizzle-orm/pg-core";
/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `five-things_${name}`);

export const posts = createTable(
  "ftPosts",
  {
    id: serial("id").primaryKey(),
    subjectName: varchar("subjectName", { length: 256 }).notNull(),
    agreeCount: integer("agree_count").notNull().default(0),
    disagreeCount: integer("disagree_count").notNull().default(0),
    fiveThing1: varchar("fiveThing1", { length: 1024 }).notNull(),
    fiveThing2: varchar("fiveThing2", { length: 1024 }).notNull(),
    fiveThing3: varchar("fiveThing3", { length: 1024 }).notNull(),
    fiveThing4: varchar("fiveThing4", { length: 1024 }).notNull(),
    fiveThing5: varchar("fiveThing5", { length: 1024 }).notNull(),
    userName: varchar("username", { length: 256 }).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt", { withTimezone: true }),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.subjectName),
  })
);
