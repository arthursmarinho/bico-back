import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  names: string[] = ['fred', 'arthur', 'theo', 'joa'];

  getNames() {
    return this.names;
  }
}
