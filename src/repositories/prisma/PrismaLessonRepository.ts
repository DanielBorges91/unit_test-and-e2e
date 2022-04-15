import { prisma } from "../../prisma";
import { CreateLessonData, LessonsRepository } from "../LessonRepository";


export class PrismaLessonRepository implements LessonsRepository {
  async create(data: CreateLessonData): Promise<void> {
    await prisma.lesson.create({
      data
    });
  }
}