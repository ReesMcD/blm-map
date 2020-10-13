import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TweetModalService {
  constructor() {}

  popped = false;

  toggle() {
    this.popped = !this.popped;
  }
}
