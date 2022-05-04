// import { Resolver, Query, ResolveField, Args, Mutation } from '@nestjs/graphql';
// import { Message } from './message.model'
// import { MessageService } from './message.service';
// // import { CreateRoomInput } from './message.input';

// @Resolver(() => Room)
// export default class UserResolver {
//   constructor(
//     private userService: RoomService,
//   ) {}

//   @Query(() => [Room])
//   async rooms() {
//     return await this.userService.findAll();
//   }

//   @Mutation(() => Room)
//   async createRoom(@Args('payload') payload: CreateRoomInput) {
//     return await this.userService.create(payload);
//   }
// } 


//   //   @Mutation(() => User)
//   //   async createUser(@Args('payload') payload: CreateUserInput) {
//   //     return await this.userService.create(payload);
//   //   }
