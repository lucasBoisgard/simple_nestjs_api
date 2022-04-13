// import { UserType } from 'src/user/interfaces/user.interface';
import { Message } from 'src/message/interface/message.interface';
export interface Room {
  id?: string;
  name?: string;
  author?: string;
  message?: Message[];
  public?: boolean;
  password?: string;
}
