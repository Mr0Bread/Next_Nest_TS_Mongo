import { FastifyReply, FastifyRequest } from 'fastify';

export default function LoggerMiddleware(req: FastifyRequest, res: FastifyReply, next) {
	console.log('Request...');
	next();
}
