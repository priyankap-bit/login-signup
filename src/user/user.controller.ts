/* eslint-disable prettier/prettier */
import { BadRequestException, Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User as UserEntity } from './user.entity';
import * as bcrypt from 'bcrypt';


@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get('users')
    userList() {
      return this.userService.getlist();
    }

    @Post('signup')
    async signUp(
        @Body('acc_type') acc_type: string,
        @Body('name') name: string, 
        @Body('email') email: string, 
        @Body('phone') phone: number, 
        @Body('country') country: string, 
        @Body('password') pass: string, 
      ) {
      const hashedPassword = await bcrypt.hash(pass, 12);
      const password = hashedPassword;
      return this.userService.insertData({
        acc_type,
        name,
        email,
        phone,
        country,
        password,
      });

    }

    @Post('login')
    async logIn(
      @Body('email') email: string, 
      @Body('password') password: string, 
    ){

      const user = await this.userService.logIn({where: {email}})
      
      if(!user){
        throw new BadRequestException('Invalid credentials')
      }

      if (!await bcrypt.compare(password, user.password)){
        throw new BadRequestException('Invalid password')
      }
      const success = 'Login Successfull';
      return {
        user : user,
        success : success
      }

    }

  }


