import { Room } from 'src/room/interfaces/room.interface';

export interface UserType {
  username?: string;
  password?: string;
  room?: [Room];
}
