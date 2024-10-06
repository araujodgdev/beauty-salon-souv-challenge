import { FastifyReply, FastifyRequest } from "fastify";
import ReservationService, { IReservationService } from "../service/ReservationService.js";

export interface IReservationController {
    create(request: FastifyRequest, reply: FastifyReply): Promise<void>;
    update(request: FastifyRequest, reply: FastifyReply): Promise<void>;
    delete(request: FastifyRequest, reply: FastifyReply): Promise<void>;
    list(request: FastifyRequest, reply: FastifyReply): Promise<void>;
    get(request: FastifyRequest, reply: FastifyReply): Promise<void>;
}

export default class ReservationController implements IReservationController {
    private service: IReservationService;

    constructor() {
        this.service = new ReservationService();
    }

    async create(request: FastifyRequest, reply: FastifyReply): Promise<void> {
        // fazer validação do body com o zod
        try {
            await this.service.create(request.body as any);
            reply.code(201).send({
                message: 'Reservation created'
            });
        } catch (error) {
            console.error(error);
            reply.code(500).send({
                message: 'Internal server error'
            });
        }
    }

    async update(request: FastifyRequest, reply: FastifyReply): Promise<void> {
        // Implementar
    }

    async delete(request: FastifyRequest, reply: FastifyReply): Promise<void> {
        // Implementar
    }

    async list(request: FastifyRequest, reply: FastifyReply): Promise<void> {
        // Implementar
    }

    async get(request: FastifyRequest, reply: FastifyReply): Promise<void> {
        // Implementar
    }


}