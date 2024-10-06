import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { reservation } from "../db/schema/reservation.js";
import { newReservation } from "../db/schema/reservation.js";
import { db } from "../db/db.js";

export interface IReservationService {
    create(data: newReservation): Promise<void>;
    update(): Promise<void>;
    delete(): Promise<void>;
    list(): Promise<void>;
    get(): Promise<void>;
}

export default class ReservationService implements IReservationService {
    private db: PostgresJsDatabase;

    constructor() {
        this.db = db;
    }

    async create(data: newReservation): Promise<void> {
        try {
            await this.db.insert(reservation).values(data);
        } catch (error) {
            console.error(error);
        }
    }

    async update(): Promise<void> {
        // Implementar
    }

    async delete(): Promise<void> {
        // Implementar
    }

    async list(): Promise<void> {
        // Implementar
    }

    async get(): Promise<void> {
        // Implementar
    }

}