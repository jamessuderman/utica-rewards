import {db} from '@/db';
import {Program, program} from '@/db/schema';
import {eq} from 'drizzle-orm';

export function getPrograms() {
  return db.select().from(program).all();
}

export function getProgram(id: string) {
  return db.select().from(program).where(eq(program.id, +id)).get();
}

export async function saveProgram(newProgram: Program) {
  try {
    await db.insert(program).values({image: newProgram.image, title: newProgram.title, description: newProgram.description});
  } catch (e) {
    console.error(e);
  }
}
