import { FastifyReply, FastifyRequest } from "fastify";

interface Reservation {
    id: number;
    name: string;
    email: string;
    date: Date;
}