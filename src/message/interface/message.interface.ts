import { UserType } from 'src/user/interfaces/user.interface';

export interface Message {
  id?: string;
  content?: string;
  author?: UserType;
  time?: string;
}
