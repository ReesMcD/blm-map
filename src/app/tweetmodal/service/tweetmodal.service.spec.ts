import { TestBed } from '@angular/core/testing';

import { TweetModalService } from './tweetmodal.service';

describe('TweetModalService', () => {
  let service: TweetModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TweetModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
