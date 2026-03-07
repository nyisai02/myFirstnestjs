import { Module } from '@nestjs/common';

import { UserModule } from './users/controllers/user/user.module';
import { UserService } from './users/services/user/user.service';


@Module({
  imports: [UserModule],
  controllers: [],
  providers: [UserService],
})
export class AppModule { }
