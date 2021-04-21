import { makeAutoObservable } from "mobx";
import { Card, Color, Suit } from "./Card.class";

export interface Guess {
    isNextCardHigher: boolean;
}

export class Game {
    private cards: Card[] = [];

    private _currentCard: Card;
    private _gameOver: boolean = false;
    private _correctGuessCount: number = 0;
    private _incorrectGuessCount: number = 0;

    constructor() {
        this.initGameCards();
        this._currentCard = this.cards[0];
        makeAutoObservable(this);
    }

    public guess(guess: Guess): Game {
        const nextCard: Card | undefined = this.cards.pop();
        if (undefined === nextCard) {
            this._gameOver = true;
            return this;
        }

        if (guess.isNextCardHigher) {
            if (this._currentCard.numeral < nextCard.numeral) {
                this._correctGuessCount++;
            } else {
                this._incorrectGuessCount++;
            }
        } else {
            if (this._currentCard.numeral > nextCard.numeral) {
                this._correctGuessCount++;
            } else {
                this._incorrectGuessCount++;
            }
        }

        this._currentCard = nextCard;
        this._gameOver = (this._correctGuessCount + this._incorrectGuessCount) === 52;
        return this;
    }

    public get gameOver(): boolean {
        return this._gameOver;
    }

    public get currentCard(): Card {
        return this._currentCard;
    }

    public get correctGuessCount(): number {
        return this._correctGuessCount;
    }

    public get incorrectGuessCount(): number {
        return this._incorrectGuessCount;
    }

    private initGameCards(): void {
        for (const suit in Suit) {
            for (let cardNumeral = 2; cardNumeral <= 14; cardNumeral++) {
                const cardSuit: Suit = Suit[suit as keyof typeof Suit];
                const cardColor: Color = (suit === "CLUBS" || suit === "SPADES") ? Color.BLACK : Color.RED;

                this.cards.push(new Card(cardSuit, cardColor, cardNumeral));
            }
        }

        this.cards.sort(() => Math.random() - 0.5);
    }
}
