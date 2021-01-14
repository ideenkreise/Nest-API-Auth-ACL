import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JWT_LIFE_SPAN, JWT_SECRET } from '../config/keys.config';
import { AuthController } from './auth.controller';
import { UserRepository } from './auth.repository';
import { AuthService } from './auth.service';
import { Role } from './entities/role.entity';
import { JwtAuthGuard } from './jwt.guard';
import { JwtStrategy } from './jwt.strategy';
import { RoleController } from './role/role.controller';
import { RoleService } from './role/role.service';
import { RolesGuard } from './roles.guard';
@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: 'jwt'
    }),
    JwtModule.register({
      secret: JWT_SECRET,
      signOptions: {
        expiresIn: JWT_LIFE_SPAN,
      },
    }),
    TypeOrmModule.forFeature([
      UserRepository
    ]),
    TypeOrmModule.forFeature([Role]),

  ],
  controllers: [
    AuthController,
    RoleController
  ],
  providers: [
    AuthService,
    RoleService,
    JwtStrategy,
    RolesGuard,
    JwtAuthGuard,
  ],
  exports: [
    JwtStrategy,
    PassportModule,
  ]
})
export class AuthModule { }
