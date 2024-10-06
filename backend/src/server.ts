import fastify, { FastifyInstance, FastifyPluginAsync } from 'fastify';
import ReservationRoutes from './routes/ReservationRoutes.js';
import fastifyCors from '@fastify/cors';

export default class Server {
    private app: FastifyInstance;
    private appCors: any;

    constructor() {
        this.app = fastify({
            logger: true,
        })

        this.appCors = fastifyCors;

        this.registerRoutes();
        this.registerErrorHandler();
        this.registerCors();
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

    private registerCors() {
        this.app.register(this.appCors, {
            origin: 'http://localhost:3000',
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
            allowedHeaders: ['Content-Type', 'Authorization'],
        });
    }

    public async start(port: number = 8080) {
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