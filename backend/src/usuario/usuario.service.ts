import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsuarioService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.UsuarioCreateInput) {
    return this.prisma.usuario.create({ data });
  }

  findAll() {
    return this.prisma.usuario.findMany();
  }

  findOne(id: number) {
    return this.prisma.usuario.findUnique({
      where: { id },
    });
  }

  update(id: number, data: Prisma.UsuarioUpdateInput) {
    return this.prisma.usuario.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.usuario.delete({
      where: { id },
    });
  }
}
