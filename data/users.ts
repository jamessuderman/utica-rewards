import {db} from '@/db';
import {user} from '@/db/schema';
import {eq} from 'drizzle-orm';

export function getUsers() {
  return db.select().from(user).all();
}

export function getUser(id: number) {
  return db.select().from(user).where(eq(user.id, id));
}
