import { UserType } from 'src/user/interfaces/user.interface';

export interface Message {
  id: number;
  content: string;
  author: UserType;
  time: string;
}
