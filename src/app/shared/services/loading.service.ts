import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private status = false;

  constructor() { }

  show() {
    this.status = true;
  }

  hide() {
    this.status = false;
  }

  getStatus() {
    return this.status;
  }
}
