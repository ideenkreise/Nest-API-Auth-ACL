
import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { TodoModule } from 'src/todo/todo.module';
import { CaslAbilityFactory } from './casl-ability.factory';

@Module({
    imports:[ 
        AuthModule,
        TodoModule    
    ],
    providers: [CaslAbilityFactory],
    exports: [CaslAbilityFactory],
})
export class CaslModule { }