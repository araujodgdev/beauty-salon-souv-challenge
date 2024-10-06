import {serial, varchar, pgTable, date} from 'drizzle-orm/pg-core'

export const reservation = pgTable('reservations', {
    id: serial('id').primaryKey(),
    clientName: varchar('client_name', {length: 256}).notNull(),
    clientEmail: varchar('client_email', {length: 50}).notNull(),
    clientPhone: varchar('client_phone', {length: 50}).notNull(),
})

export type newReservation = typeof reservation.$inferInsert;

