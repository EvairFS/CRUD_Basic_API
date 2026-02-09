import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async login(email: string, senha: string) {
    const usuario = await this.prisma.usuario.findUnique({
      where: { email },
    });

    if (!usuario || usuario.senha !== senha) {
      throw new Error('Credenciais inválidas');
    }

    return { message: 'Login OK', usuario };
  }
}
