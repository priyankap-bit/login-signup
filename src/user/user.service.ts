/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User as UserEntity } from './user.entity';
import { Repository } from 'typeorm';
 
@Injectable()
export class UserService {
    constructor(@InjectRepository(UserEntity) private UserReposetory: Repository<UserEntity> ){}

    getlist() {
        return this.UserReposetory.find();
    }

    async insertData(Data: any): Promise <UserEntity> {
        return this.UserReposetory.save(Data);
    }

    async logIn(condition: any): Promise <UserEntity> {
        return this.UserReposetory.findOne(condition);
    }

}




