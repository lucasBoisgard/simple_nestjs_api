import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Message } from 'src/message/interface/message.interface';
// import { UserType } from 'src/user/interfaces/user.interface';

export type RoomDocument = Room & Document;

@Schema()
export class Room {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  public: boolean;

  @Prop({ required: true })
  author: string;

  @Prop()
  message: Message[];

  @Prop()
  password: string;

  @Prop()
  rooms: string[];
}

export const RoomSchema = SchemaFactory.createForClass(Room);
