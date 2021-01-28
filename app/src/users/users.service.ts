import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import IUserDocument from 'App/users/interfaces/user.document.interface';
import UserDto from 'App/users/dto/user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<IUserDocument>,
  ) {}

  async addUser(userDto: UserDto): Promise<IUserDocument> {
    return await new this.userModel(userDto).save();
  }

  async getUser(userId: string): Promise<IUserDocument> {
    return await this.userModel.findById(userId).exec();
  }

  async getUserByUsername(username: string): Promise<IUserDocument> {
    return await this.userModel.findOne({ username }).exec();
  }

  async doesUserExists(username: string): Promise<boolean> {
    return await this.userModel.exists({ username });
  }
}
