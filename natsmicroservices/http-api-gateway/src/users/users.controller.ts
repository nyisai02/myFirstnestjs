import { Body, Controller, Inject, Post } from "@nestjs/common";
import { ClientProxy, MessagePattern } from "@nestjs/microservices";
import { CreateUserDto } from "src/dto/CreateUser.dto";

@Controller('users')
export class UsersController {
    constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) {}
    

    @Post('create')
    createUser(@Body() createUserDto: CreateUserDto) {

        console.log(createUserDto);
        return this.natsClient.send({cmd :'create_user'}, createUserDto)

    }
}