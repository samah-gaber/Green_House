import { Injectable } from '@angular/core';

@Injectable()
export class DomainService {
دم
  constructor() { }

  // domain = 'http://192.168.43.132:9999/api/';
  // domain = 'http://192.168.137.130:9991/api/';
  // domain = 'http://192.168.43.176:9991/api/';
  domain = '';

  getDomain() {
    return this.domain;
  }
}
