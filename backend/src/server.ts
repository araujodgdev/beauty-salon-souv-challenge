import fastify, { FastifyInstance } from 'fastify';
import ReservationRoutes from './routes/ReservationRoutes.js';

export default class Server {
    private app: FastifyInstance;

    constructor() {
        this.app = fastify({
            logger: true,
        })

        this.registerRoutes();
        this.registerErrorHandler();
    }

    private registerRoutes() {
        const reservationRoutes = new ReservationRoutes();
        this.app.register(reservationRoutes.register, {prefix: '/api'});

    }

    private registerErrorHandler() {
        this.app.setErrorHandler((error, request, reply) => {
          this.app.log.error(error);
          reply.status(500).send({ error: 'Ocorreu um erro no servidor.' });
        });
      }

    public async start(port: number = 3000) {
        try {
            await this.app.listen({
                port,
            });
        } catch (error) {
            console.error(error);
            this.app.log.error(error);
            process.exit(1);
        }
    }
}