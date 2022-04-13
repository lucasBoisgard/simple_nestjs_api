import { CreateMessage } from './dto/create-message.dto';
import { MessageService } from './message.service';
import {
  Body,
  Controller,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { Message } from './interface/message.interface';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Get()
  async findAll(@Res() res): Promise<Message[]> {
    const message = await this.messageService.findAll();
    return res.status(HttpStatus.OK).json(message);
  }

  @Get(':id')
  async findById(@Res() res, @Param('id') id: string): Promise<Message> {
    const message = await this.messageService.findById(id);
    if (!message) throw new NotFoundException('Id does not exist!');
    return res.status(HttpStatus.OK).json(message);
  }

  @Post()
  async create(
    @Res() res,
    @Body() createMessage: CreateMessage,
  ): Promise<Message> {
    const newMessage = await this.messageService.create(createMessage);
    return res.status(HttpStatus.OK).json({
      message: 'Message Added',
      newMessage,
    });
  }
}
