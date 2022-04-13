import { CreateMessage } from './dto/create-message.dto';
import { Injectable } from '@nestjs/common';
import { Message } from './interface/message.interface';

@Injectable()
export class MessageService {
  message: Message[] = [];

  findAll(): Message[] {
    return this.message;
  }

  findById(id: string): Message {
    return this.message.find((message) => message.id == id);
  }

  create(newMessage: CreateMessage): Message {
    return this.message.find((message) => message.id == newMessage.id);
  }
}
