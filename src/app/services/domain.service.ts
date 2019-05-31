import { Injectable } from '@angular/core';

@Injectable()
export class DomainService {

  constructor() { }

  domain = '';

  getDomain() {
    return this.domain;
  }
}
