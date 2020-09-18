import { Router } from 'express';
import { getRepository } from 'typeorm';
import Lesson from '../models/Lesson';

const lessonRouter = Router();

lessonRouter.post('/', async (request, response) => {
  try {
    const repo = getRepository(Lesson);
    const res = repo.save(request.body);
    return response.status(201).json(res);
  
  } catch (error) {
    console.log('Erro: ' + error.message);
    return response.status(400).send();
  }
});

lessonRouter.get('/', async (request, response) => {
  response.json(await getRepository(Lesson).find());
});

export default lessonRouter;