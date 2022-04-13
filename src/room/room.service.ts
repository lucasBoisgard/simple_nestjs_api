import { CreateRoom } from './dto/create-room.dto';
// import { Room } from 'src/room/interfaces/room.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Room, RoomDocument } from './schemas/room.schema';
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

  async create(newRoom: CreateRoom): Promise<Room> {
    const createdRoom = new this.roomModel(newRoom);
    return createdRoom.save();
  }
}
