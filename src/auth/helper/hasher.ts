import { compare, hash } from 'bcryptjs';

export class Hasher {
  static validate(password: string, hashedPassword: string): Promise<boolean> {
    return compare(password, hashedPassword);
  }

  static hash(password: string): Promise<string> {
    return hash(password, 10);
  }
}
