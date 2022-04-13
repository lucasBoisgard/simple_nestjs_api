import { UserType } from 'src/user/interfaces/user.interface';

export class CreateMessage {
  readonly id: string;
  readonly content: string;
  readonly author: UserType;
  readonly time: string;
}
