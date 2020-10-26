import { Injectable } from '@angular/core';

export interface CardIcon {
  cardId: string;
  selected: boolean;
  matched: boolean;
}

@Injectable()
export class CardService {
  public cardIconsArray: CardIcon[] = [
    {
      cardId: 'fa-cc-amex',
      selected: false,
      matched: false,
    },
    {
      cardId: 'fa-cc-diners-club',
      selected: false,
      matched: false,
    },
    {
      cardId: 'fa-cc-discover',
      selected: false,
      matched: false,
    },
    {
      cardId: 'fa-cc-jcb',
      selected: false,
      matched: false,
    },
    {
      cardId: 'fa-cc-mastercard',
      selected: false,
      matched: false,
    },
    {
      cardId: 'fa-cc-paypal',
      selected: false,
      matched: false,
    },
    {
      cardId: 'fa-cc-stripe',
      selected: false,
      matched: false,
    },
    {
      cardId: 'fa-cc-visa',
      selected: false,
      matched: false,
    },
    {
      cardId: 'fa-credit-card',
      selected: false,
      matched: false,
    },
    {
      cardId: 'fa-credit-card-alt',
      selected: false,
      matched: false,
    },
    {
      cardId: 'fa-google-wallet',
      selected: false,
      matched: false,
    },
    {
      cardId: 'fa-paypal',
      selected: false,
      matched: false,
    },

    {
      cardId: 'fa-cc-amex',
      selected: false,
      matched: false,
    },
    {
      cardId: 'fa-cc-diners-club',
      selected: false,
      matched: false,
    },
    {
      cardId: 'fa-cc-discover',
      selected: false,
      matched: false,
    },
    {
      cardId: 'fa-cc-jcb',
      selected: false,
      matched: false,
    },
    {
      cardId: 'fa-cc-mastercard',
      selected: false,
      matched: false,
    },
    {
      cardId: 'fa-cc-paypal',
      selected: false,
      matched: false,
    },
    {
      cardId: 'fa-cc-stripe',
      selected: false,
      matched: false,
    },
    {
      cardId: 'fa-cc-visa',
      selected: false,
      matched: false,
    },
    {
      cardId: 'fa-credit-card',
      selected: false,
      matched: false,
    },
    {
      cardId: 'fa-credit-card-alt',
      selected: false,
      matched: false,
    },
    {
      cardId: 'fa-google-wallet',
      selected: false,
      matched: false,
    },
    {
      cardId: 'fa-paypal',
      selected: false,
      matched: false,
    },
  ];

  public selectedArray: CardIcon[] = [];

  public handleSelectedCard(selectedCard: CardIcon): CardIcon[] {
    return this.cardIconsArray.map((card) => {
      if (selectedCard.cardId === card.cardId) {
        selectedCard.selected = true;
      }
      return selectedCard;
    });
  }

  public resetCards(): CardIcon[] {
    return this.cardIconsArray.map((card) => {
      card.selected = false;
      this.selectedArray = [];
      return card;
    });
  }

  public isMatchCheck(cardsArray: CardIcon[]): boolean {
    if (cardsArray.length !== 2) {
      return;
    }

    if (cardsArray[0].cardId === cardsArray[1].cardId) {

      cardsArray[0].matched = true;
      cardsArray[1].matched = true;
      return cardsArray[0].cardId === cardsArray[1].cardId;
    }
    return false;
  }

  public shuffleArray(array: CardIcon[]): CardIcon[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  public isAllMatched(cardsArray: CardIcon[]): boolean {
    return cardsArray.every(card => card.matched);
  }

  public resetGame(): void {
    this.cardIconsArray = this.cardIconsArray.map(card => {
      card.selected = false;
      card.matched = false;
      return card;
    })
  }
}
