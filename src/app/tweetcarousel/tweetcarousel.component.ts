import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-tweet-carousel',
  templateUrl: './tweetcarousel.component.html',
  styleUrls: ['./tweetcarousel.component.scss'],
})
export class TweetCarouselComponent implements OnInit, AfterViewInit {
  @Input() slides;
  currentSlide = 0;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.loadTwitter();
  }

  prev() {
    this.loadTwitter();
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    // Action to change slide -> reducer -> selector
  }

  next() {
    this.loadTwitter();
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    // Action to change slide -> reducer -> selector
  }

  loadTwitter() {
    // @ts-ignore
    twttr.widgets.load();
  }
}
