import { Injectable } from '@angular/core';

@Injectable()
export class DomainService {

  constructor() { }

  domain = 'http://192.168.43.132:9999/api';

  getDomain() {
    return this.domain;
  }
}
