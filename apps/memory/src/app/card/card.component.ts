import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardService, CardIcon } from '../services/card.service';

@Component({
  selector: 'memory-nx-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() card: CardIcon;
  @Input() isDebug: boolean;
  @Input() isMatched: boolean;
  @Input() isDisabled: boolean;


  @Output() selected = new EventEmitter<CardIcon>();
  @Output() resetCards = new EventEmitter<undefined>();
  @Output() checkPair = new EventEmitter<CardIcon[]>();
  @Output() checkIsAllMatched = new EventEmitter<undefined>();
  @Output() disabled = new EventEmitter<boolean>();

  constructor(public cardService: CardService) { }

  public checkCount(card: CardIcon): void {
    if (card.selected || this.isDisabled || card.matched) {
      return;
    }

    if (this.cardService.selectedArray.length < 2) {
      this.selected.emit(card);
      this.cardService.selectedArray.push(card);
    }

    if(this.cardService.selectedArray.length === 2) {
      this.disabled.emit(true);

      setTimeout(() => {
        this.checkPair.emit(this.cardService.selectedArray);
        this.disabled.emit(false);
      }, 1000);
    }
  }
}
