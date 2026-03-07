import { Module } from '@nestjs/common';
import { UserController } from './users/controllers/user/user.controller';
import { UserService } from './users/services/user/user.service';


@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule { }
