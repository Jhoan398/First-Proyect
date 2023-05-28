import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { UsersModule } from 'src/users/users.module';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [UsersModule],
  providers: [AuthResolver, AuthService, PrismaService],
})
export class AuthModule {}
