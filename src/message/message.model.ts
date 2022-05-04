import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
@ObjectType()
export class Message {
  
  @Prop()
  @Field(() => Int)
  id: number;

  @Prop({ required: true })
  @Field(() => String)
  content: string;

  @Prop({ required: true })
  @Field(() => String)
  author: string;

  @Prop()
  @Field(() => String)
  createdAt: string;
}


export type MessageDocument = Message & Document;
export const MessageSchema = SchemaFactory.createForClass(Message);
