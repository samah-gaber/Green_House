import { Injectable } from '@angular/core';

@Injectable()
export class DomainService {
دم
  constructor() { }

  // domain = 'http://192.168.43.132:9999/api/';
  //domain = 'http://192.168.43.176:9999/api/';
  domain = '';

  getDomain() {
    return this.domain;
  }
}
