import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// import { Room } from 'src/room/schemas/room.schema';
// import { Post } from './post';

@Schema()
@ObjectType()
export class User {

  @Field(() => String)
  id: string;

  @Prop()
  @Field(() => String)
  username: string;

  @Prop()
  @Field(() => String)
  password: string;

  // @Prop()
  // @Field(type => [Room])
  // rooms: Room[];
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);

