import { Body, Controller, Inject } from "@nestjs/common";
import { ClientProxy, MessagePattern } from "@nestjs/microservices";
import { CreateUserDto } from "src/dto/CreateUser.dto";

@Controller()
export class UsersController {
    constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) {}
    

    createUser(@Body() createUserDto: CreateUserDto) {

        console.log(createUserDto);
        this.natsClient.send({cmd :'create_user'}, createUserDto)

    }
}