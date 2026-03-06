import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {

    private fakeUsers = [ 
        { name: 'John Doe', email: 'john.doe@example.com' }
    ];


    fetchUsers() {
        return this.fakeUsers;
    }

    createUser(userDetails : CreateUserType) {
        this.fakeUsers.push(userDetails);
        return;
    }
}
