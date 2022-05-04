import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateRoomInput {
    @Field(() => String)
    name?: string;

    @Field()
    public?: boolean;

    @Field(() => String,  { nullable: true })
    author?: string;

    @Field(() => [String],  { nullable: true })
    message: string[]
}
