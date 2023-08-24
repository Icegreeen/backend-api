import { Router } from 'express'
import { SubjectController } from './controllers/SubjectController';
import { RoomController } from './controllers/RoomController';

const routes = Router();

// Rota para criar uma nova disciplina
routes.post('/subject', new SubjectController().create);

// Rota para criar uma nova sala
routes.post('/room', new RoomController().create);

routes.get('/room', new RoomController().list);

// Rota para criar um novo vídeo em uma sala específica
routes.post('/room/:idRoom/create', new RoomController().createVideo);

// Rota para associar uma disciplina a uma sala específica
routes.post('/room/:idRoom/subject', new RoomController().roomSubject);

export default routes;
