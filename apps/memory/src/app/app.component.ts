import { Component } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';
import { CardIcon, CardService } from './services/card.service';

@Component({
  selector: 'memory-nx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  public isDebug = false;
  public shuffledArray: CardIcon[] = [];
  public displayWinMessage = false;
  public showJumbotron = true;
  public isDisabled = false;

  constructor(public cardService: CardService) {
    // set ngx to use bootstrap 4
    setTheme('bs4');

    this.shuffledArray = this.cardService.shuffleArray(this.cardService.cardIconsArray);
  }

  public onSelected(card: CardIcon): void {
    this.cardService.handleSelectedCard(card);
  }

  public onResetCards(): void {
    this.cardService.resetCards();
  }

  public onCheckIsAllMatched(): void {
    if (this.cardService.isAllMatched(this.cardService.cardIconsArray)) {
      window.scroll(0,0);
      this.displayWinMessage = true;
    }
  }

  public onResetGame(): void {
    this.cardService.resetGame();
    this.displayWinMessage = false;
    this.showJumbotron = true;
  }

  public onCheckPair(cardsArray: CardIcon[]): void {
    if (this.cardService.isMatchCheck(cardsArray)) {

      this.onCheckIsAllMatched();
    }
    this.cardService.resetCards();
  }

  public onCloseJumbotron(): void {
    this.showJumbotron = false;
  }

  public onDisabled(disabled: boolean): void {
    this.isDisabled = disabled;
  }
}
