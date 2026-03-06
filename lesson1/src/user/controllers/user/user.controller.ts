import { Body, Controller, Get, Param, Post, Query, Req ,Res, UsePipes, ValidationPipe} from '@nestjs/common';
import express from 'express';
// use relative path to reach the DTO file since tsconfig has no path alias
import { CreateUserDto } from '../../../dtos/CreateUser.dto';
import { UsersService } from '../../services/users/users.service';

@Controller('user')
export class UserController {

    constructor(private userService : UsersService) {}
    

    @Post('api')
    createUser(@Req() request:express.Request, @Res() response:express.Response) {
       
        console.log(request.body);
        response.status(201).json({
            message: 'User created successfully',
            user: request.body
        });
    }

    @Get('query')
    getUserQuery(@Query('name') name: string, @Query('email') email: string) {
        return {
            name,
            email
        };
    }

    @Post('get-user')
    @UsePipes(new ValidationPipe())
    postUser(@Body() createUserDto: CreateUserDto) {
        return {
            message: 'User created successfully',
            user: createUserDto
        };
    }
    // http://localhost:3000/user/get-user
    //



    @Get('newuser')
    getNewUser() {
        return this.userService.fetchUsers();
    }

    @Post('create-user')
    createNewUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto);
    }
}
