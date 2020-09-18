import { Router } from 'express';
import { getRepository } from 'typeorm';
import Student from '../models/Student';

const studentRouter = Router();

studentRouter.post('/', async (request, response) => {
  try {
    const repo = getRepository(Student);
    const res = repo.save(request.body);
    return response.status(201).json(res);
    
  } catch (error) {
    console.log('Erro: ' + error.message);
    return response.status(400).send();
  }
})

export default studentRouter;