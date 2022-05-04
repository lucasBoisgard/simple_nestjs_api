import { Resolver, Query, ResolveField, Args, Mutation } from '@nestjs/graphql';
import { Room } from './room.model'
import { RoomService } from './room.service';
import { CreateRoomInput } from './room.input';

@Resolver(() => Room)
export default class RoomResolver {
  constructor(
    private userService: RoomService,
  ) {}

  @Query(() => [Room])
  async rooms() {
    return await this.userService.findAll();
  }

  @Mutation(() => Room)
  async createRoom(@Args('payload') payload: CreateRoomInput) {
    return await this.userService.create(payload);
  }
} 


  //   @Mutation(() => User)
  //   async createUser(@Args('payload') payload: CreateUserInput) {
  //     return await this.userService.create(payload);
  //   }
