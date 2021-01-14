import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CaslModule } from './casl/casl.module';
import { TypeOrmConfigService } from './config/typeorm.config';
import { TodoModule } from './todo/todo.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), 
    AuthModule,
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    CaslModule,

    TodoModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
