import express from "express";
import { PrismaLessonRepository } from "./repositories/prisma/PrismaLessonRepository";
import { CreateLesson } from "./services/CreateLesson";

export const app = express();

app.use(express.json());

app.post("/lessons", async (request, response) => {

  const { title, description } = request.body;

  const prismaLessonsRepository = new PrismaLessonRepository();
  const createLesson = new CreateLesson(prismaLessonsRepository);

  try {
    await createLesson.execute({ title, description });
    return response.status(201).send();
  } catch (err: any) {
    return response.status(400).json({
      error: err.message,
    })
  }

});