import { Resolver, Query, ResolveField, Args } from '@nestjs/graphql';
import { User } from './user.model'
import { UserService } from './user.service';

@Resolver(() => User)
export default class UserResolver {
  constructor(
    private userService: UserService,
  ) {}

  @Query(returns => User)
  async user(@Args('username') username: string) {
    return await this.userService.findOne(username);
  }

}