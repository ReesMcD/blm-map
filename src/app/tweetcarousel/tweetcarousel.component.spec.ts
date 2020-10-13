import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetCarouselComponent } from './tweetcarousel.component';

describe('CarouselComponent', () => {
  let component: TweetCarouselComponent;
  let fixture: ComponentFixture<TweetCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TweetCarouselComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
