import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { UserType } from 'src/user/interfaces/user.interface';

export type MessageDocument = Message & Document;

@Schema()
export class Message {
  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  author: UserType;

  @Prop()
  createdAt: string;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
