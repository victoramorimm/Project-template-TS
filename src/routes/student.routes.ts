import { Router } from 'express';
import { getRepository } from 'typeorm';
import Student from '../models/Student';
import { validate } from 'class-validator';

const studentRouter = Router();

studentRouter.post('/', async (request, response) => {
  try {
    const repo = getRepository(Student);

    const { key, name, email } = request.body;

    const student = repo.create({
      key,
      name,
      email
    });

    const errors = await validate(student);

    if (errors.length == 0) {
      const res = await repo.save(student);

      return response.status(201).json(res);
    } 

    return response.status(400).json(errors);
    
  } catch (error) {
    console.log('Erro: ' + error.message);
    return response.status(400).send();
  }
})

export default studentRouter;