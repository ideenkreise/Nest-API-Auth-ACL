import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { GetUser } from './get-user.decorator';
import { AuthPayload } from './interface/auth.payload.interface';
import { JwtAuthGuard } from './jwt.guard';
import { RoleEnum } from './role.enum';
import { hasRoles } from './roles.decorator';
import { RolesGuard } from './roles.guard';

@Controller('auth')
@ApiTags('Authentication')
export class AuthController {
  constructor(private readonly authService: AuthService,
    // private caslAbilityFactory: CaslAbilityFactory
  ) { }

  @Post('/signUp')
  signUp(@Body() authCredentialsDto: CreateUserDto): Promise<AuthPayload> {
    return this.authService.signUp(authCredentialsDto);
  }
  @Post('/signIn')
  signIn(@Body() authCredentialsDto: LoginUserDto): Promise<AuthPayload> {
    return this.authService.signIn(authCredentialsDto);
  }



  @Get()
  findAll() {
    return this.authService.findAll();
  }



  @hasRoles(RoleEnum.Admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  @Get('test')
  findAllTest(@GetUser() user: User) {
    console.log(user);
    // return user;
    return this.authService.findAll();
  }



  @Get(':id')
  findOne(@Param('id') id: string): Promise<UpdateUserDto> {
    return this.authService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateUserDto) {
    return this.authService.update(id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(id);
  }

  @Get('role-test')
  getTest() {
    // console.log('role-test')
    return this.authService.findAll();
  }
}
