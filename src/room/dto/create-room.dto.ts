import { UserType } from 'src/user/interfaces/user.interface';

export class CreateRoom {
  readonly name: string;
  readonly author: UserType;
  readonly public: boolean;
  readonly password?: string;
}
