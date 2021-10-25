import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnChanges {
  @Input() cards: any;
  constructor() {}
  ngOnChanges(changes: SimpleChanges) {
    for (let index = 0; index < this.cards.length; index++) {
      this.imageIsVertical(this.cards[index].postImg, index);
    }
  }

  incrementLikes(card: any) {
    card.postLikes += 1;
  }

  imageIsVertical(image: any, index: number) {
    let self = this;
    const img = new Image();
    img.src = image;
    img.onload = function () {
      if (img.width > 416 && img.height > 300) {
        self.cards[index].imageIsVertical = true;
        return true;
      } else {
        self.cards[index].imageIsVertical = false;
        return false;
      }
    };
  }
}
