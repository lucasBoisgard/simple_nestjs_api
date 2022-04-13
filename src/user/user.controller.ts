import { CreateUserDTO } from './dto/create-user.dto';
import {
  Controller,
  Get,
  Post,
  Body,
  HttpStatus,
  HttpException,
  Res,
} from '@nestjs/common';
// import { UserType } from './interfaces/user.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(@Res() res): Promise<any> {
    const users = await this.userService.findAll();
    return res.status(HttpStatus.OK).json(users);
  }

  // @Get('/:id')
  // async findById(@Res() res, @Param('id') id: string) {
  //   const user = await this.userService.findById(id);
  //   if (!user) throw new NotFoundException('Id does not exist!');
  //   return res.status(HttpStatus.OK).json(user);
  // }

  @Post('/register')
  async signUp(@Res() res, @Body() createUser: CreateUserDTO) {
    if (await this.userService.userExist(createUser.username)) {
      const newUser = await this.userService.create(createUser);
      return res.status(HttpStatus.OK).json({
        message: 'User Created',
        newUser,
      });
    } else {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'Existing username',
        },
        HttpStatus.FORBIDDEN,
      );
    }
  }
}
