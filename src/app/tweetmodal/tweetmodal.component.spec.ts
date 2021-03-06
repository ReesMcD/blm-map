import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetModalComponent } from './tweetmodal.component';

describe('TweetmodalComponent', () => {
  let component: TweetModalComponent;
  let fixture: ComponentFixture<TweetModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TweetModalComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
