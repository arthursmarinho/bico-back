import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  names: string[] = ['dsadas'];

  getNames() {
    return this.names;
  }
}
