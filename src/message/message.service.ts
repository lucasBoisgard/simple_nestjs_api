import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Message, MessageDocument } from './message.model';
import { Model } from 'mongoose';

@Injectable()
export class MessageService {
  constructor(@InjectModel(Message.name) private messageModel: Model<MessageDocument>) {}

  async findAll(): Promise<Message[]> {
    return await this.messageModel.find();
  }

  // async findById(id: string): Promise<Message> {
  //   return await this.messageModel.find((message) => message.id == id);
  // }

  // async create(newMessage: CreateMessage): Promise<Message> {
  //   return await this.messageModel.find((message) => message.id == newMessage.id);
  // }
}
