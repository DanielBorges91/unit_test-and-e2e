import { LessonsRepository } from "../repositories/LessonRepository";

interface CreateLessonRequest {
  title: string;
  description?: string;
}

export class CreateLesson {

  constructor(
    private lessonsRepository: LessonsRepository,
  ) {}

  async execute ({title, description}: CreateLessonRequest) {

    // verificar se já existe uma lesson com o mesmo título

    if(!title) {
      throw new Error("Title is required!");
    }

    await this.lessonsRepository.create({
      title,
      description,
    })
  }
}