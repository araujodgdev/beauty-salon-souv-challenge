import { FastifyInstance, FastifyPluginAsync } from "fastify";
import ReservationController, { IReservationController } from "../controller/ReservationController.js";


export default class ReservationRoutes {
    private controller: IReservationController;

    constructor() {
        this.controller = new ReservationController();
    }

    public register: FastifyPluginAsync = async (server: FastifyInstance) => {
        server.post('/reservations', this.controller.create.bind(this.controller));
    }  
}