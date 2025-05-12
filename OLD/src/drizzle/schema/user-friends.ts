import { pgTable, uuid, primaryKey } from 'drizzle-orm/pg-core';
import { UsersTable } from './users';

export const UserFriends = pgTable('user_friends', {
    userId: uuid().references(() => UsersTable.id, { onDelete: 'cascade' }),
    friendId: uuid().references(() => UsersTable.id, { onDelete: 'cascade' }),
  },
  t => [primaryKey({ columns: [t.userId, t.friendId] })]);