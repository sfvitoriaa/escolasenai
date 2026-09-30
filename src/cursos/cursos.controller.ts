import { Controller, Get, Param } from '@nestjs/common';

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

  @Get(':name')
  getCursoByName(@Param('name') name: string): string {
    return `Informações sobre o curso técnico: ${name}`;
  }
}