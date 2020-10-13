import { Component, OnInit } from '@angular/core';
import { AppState } from '../reducers';
import { Store, select } from '@ngrx/store';
import { ToggleTweetModalAction } from './store/tweetmodal.actions';
import { getVisible } from './store/tweetmodal.selectors';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-tweet-modal',
  templateUrl: './tweetmodal.component.html',
  styleUrls: ['./tweetmodal.component.scss'],
})
export class TweetModalComponent implements OnInit {
  constructor(
    private store$: Store<AppState>,
    private sanitizer: DomSanitizer
  ) {}

  visible: Observable<boolean>;
  // https://publish.twitter.com/?hideConversation=on&query=https%3A%2F%2Ftwitter.com%2Fgreg_doucette%2Fstatus%2F1269691298522501121&theme=dark&widget=Tweet
  public slides = [
    {
      html: this.sanitizer.bypassSecurityTrustHtml(
        `<blockquote class="twitter-tweet" data-conversation="none" data-theme="dark"><p lang="en" dir="ltr">3️⃣5️⃣8️⃣ Oklahoma City, OK: lengthy montage of Oklahoma police bringing the brutality to protests against police brutality <br><br>Illegal seizure of private property, beating the sh*t out of people, indiscriminately shooting unarmed protestors for sport<br><br>Yikes<br><br>[<a href="https://t.co/8xwi9xIQMV">https://t.co/8xwi9xIQMV</a>] <a href="https://t.co/A9CMdGuB9l">pic.twitter.com/A9CMdGuB9l</a></p>&mdash; T. Greg &quot;Bouquet of F*ckery&quot; Doucette (@greg_doucette) <a href="https://twitter.com/greg_doucette/status/1269475945594916864?ref_src=twsrc%5Etfw">June 7, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`
      ),
    },
    {
      html: this.sanitizer.bypassSecurityTrustHtml(
        `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">3️⃣8️⃣0️⃣ Los Angeles, CA: cop pulls a gun on a random black guy at the park, yells at him at gunpoint to get on his knees...<br><br>...then gets told &quot;you&#39;ve got the wrong guy,&quot; says &quot;my bad,&quot; and leaves<br><br>[<a href="https://twitter.com/mrwillmartin?ref_src=twsrc%5Etfw">@mrwillmartin</a>]<br><br> <a href="https://t.co/3KBb1iqFfJ">pic.twitter.com/3KBb1iqFfJ</a></p>&mdash; T. Greg &quot;Bouquet of F*ckery&quot; Doucette (@greg_doucette) <a href="https://twitter.com/greg_doucette/status/1269669881974317066?ref_src=twsrc%5Etfw">June 7, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`
      ),
    },
    {
      html: this.sanitizer.bypassSecurityTrustHtml(
        `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Sunsets don&#39;t get much better than this one over <a href="https://twitter.com/GrandTetonNPS?ref_src=twsrc%5Etfw">@GrandTetonNPS</a>. <a href="https://twitter.com/hashtag/nature?src=hash&amp;ref_src=twsrc%5Etfw">#nature</a> <a href="https://twitter.com/hashtag/sunset?src=hash&amp;ref_src=twsrc%5Etfw">#sunset</a> <a href="http://t.co/YuKy2rcjyU">pic.twitter.com/YuKy2rcjyU</a></p>&mdash; US Department of the Interior (@Interior) <a href="https://twitter.com/Interior/status/463440424141459456?ref_src=twsrc%5Etfw">May 5, 2014</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`
      ),
    },
  ];
  ngOnInit(): void {
    this.visible = this.store$.pipe(select(getVisible));

    // Action -> Effect -> Success Action - Data to Reducer
  }

  toggle() {
    this.store$.dispatch(ToggleTweetModalAction());
  }

  selectUSState() {
    // Action -> Effect -> Toggle -> Reduce Data -> Selector
  }
}
