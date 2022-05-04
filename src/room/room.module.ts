import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
// import { RoomController } from './room.controller';
import { RoomService } from './room.service';
import { Room, RoomSchema } from './room.model';
import RoomResolver from './room.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Room.name, schema: RoomSchema }]),
  ],
  providers: [RoomService, RoomResolver],
})
export class RoomModule {}
