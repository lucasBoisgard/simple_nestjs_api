import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Room, RoomDocument } from './room.model';
import { Model } from 'mongoose';

@Injectable()
export class RoomService {
  constructor(@InjectModel(Room.name) private roomModel: Model<RoomDocument>) {}

  async findAll(): Promise<Room[]> {
    return await this.roomModel.find().exec();
  }

  async findById(id: string): Promise<Room> {
    return await this.roomModel.findById(id).exec();
  }

  async create(newRoom: any): Promise<Room> {
    const createdRoom = new this.roomModel(newRoom);
    return createdRoom.save();
  }
}
