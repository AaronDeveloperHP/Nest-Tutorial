import { Body, Controller,Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-users.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('users')
export class UsersController {

    constructor(private usersService:UsersService) {}
    @Get('/users')
    getAllUsers() {
        return this.usersService.getUsers();
    }

    @Post('/users')
    createUser(@Body() user: CreateUserDto) {
        return this.usersService.createUser(user);
    }
}
