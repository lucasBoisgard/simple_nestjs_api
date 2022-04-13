// import { UserType } from 'src/user/interfaces/user.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDTO } from './dto/create-user.dto';
import { Hasher } from '../auth/helper/hasher';
import { _ } from 'lodash';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }
  // async findById(id: string): Promise<any> {
  //   return await this.userModel.findById(id).exec();
  // }

  async create(payload: CreateUserDTO) {
    const createdUser = new this.userModel({
      username: payload.username,
      password: await Hasher.hash(payload.password),
    });
    return createdUser.save();
  }

  async findOne(username: string): Promise<User | undefined> {
    return await this.userModel.findOne({ username: username });
  }

  async userExist(username: string): Promise<boolean> {
    return _.isEmpty(await this.userModel.find({ username: username }));
  }
}
