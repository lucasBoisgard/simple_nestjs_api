import { Field, Int, ObjectType } from "@nestjs/graphql";
// import { Message } from "src/message/message.model";
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
@ObjectType()
export class Room {
    @Prop()
    @Field((type) => Int)
    id: string;

    @Prop()
    @Field()
    name: string;

    @Prop()
    @Field()
    public: boolean;

    @Prop()
    @Field((type) => Int)
    author?: string;

    @Prop()
    @Field(() => [String])
    message?: string[];

    @Prop()
    @Field()
    password?: string;
}

export type RoomDocument = Room & Document;
export const RoomSchema = SchemaFactory.createForClass(Room);
