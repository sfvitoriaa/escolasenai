import { Controller, Get } from '@nestjs/common';

@Controller('cursos')
export class CursosController {

  @Get()
  getCursos(): string[] {
    return [
      'Técnico em Desenvolvimento de Sistemas',
      'Técnico em Redes de Computadores',
      'Técnico em Automação Industrial',
    ];
  }
}