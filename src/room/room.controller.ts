import { CreateRoom } from './dto/create-room.dto';
import { Room } from 'src/room/interfaces/room.interface';
import { RoomService } from './room.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Get()
  findAll(): Promise<Room[]> {
    return this.roomService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.roomService.findById(id);
  }

  @Post()
  create(@Body() newRoom: CreateRoom) {
    return this.roomService.create(newRoom);
  }
}
