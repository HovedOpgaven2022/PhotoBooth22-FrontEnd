import { Injectable } from '@angular/core';
const bcrypt = require('bcryptjs')

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor() { }

  async generateSalt() {
    return await bcrypt.genSalt(10);
  }

  async hashPassword(password: string, salt: string) {
    return await bcrypt.hash(password, salt);
  }

  async comparePassword(password: string, hash: string) {
    return await this.hashPassword(password, bcrypt.getSalt(hash)) === hash;
  }
}
