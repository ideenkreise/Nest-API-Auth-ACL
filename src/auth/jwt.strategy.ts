import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JWT_SECRET } from '../config/keys.config';
import { UserRepository } from './auth.repository';
import { JwtPayload } from './interface/jwt-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration : false,
            secretOrKey: JWT_SECRET,
        });
    }
    async validate(payload: JwtPayload) {
        const { user_id, role } = payload;
         if (role === "user") {
            const user = await this.userRepository.findOneUser( user_id );
            if (!user) {
                throw new UnauthorizedException();
            }
            return user;
        }
    }
}
