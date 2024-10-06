import fastify, { FastifyInstance } from 'fastify';
import ReservationRoutes from './routes/ReservationRoutes.js';
import fastifyCors from '@fastify/cors';

export default class Server {
    private app: FastifyInstance;
    private appCors: any;
    private port: number = 8080;

    constructor(port?: number) {
        this.app = fastify({
            logger: true,
        })

        if (port) {
            this.port = port;
        }

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

    public async start() {
        try {
            await this.app.listen({
                port: this.port,
            });
        } catch (error) {
            console.error(error);
            this.app.log.error(error);
            process.exit(1);
        }
    }
}