import {db} from '@/db';
import {program} from '@/db/schema';
import {eq} from 'drizzle-orm';

export function getPrograms() {
  return db.select().from(program).all();
}

export function getProgram(id: string) {
  return db.select().from(program).where(eq(program.id, +id)).get();
}
