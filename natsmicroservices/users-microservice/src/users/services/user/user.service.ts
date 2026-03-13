import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  createUser(data: any) {
    console.log('UserService: Creating user', data);
    return { id: Math.floor(Math.random() * 1000), ...data };
  }
}
