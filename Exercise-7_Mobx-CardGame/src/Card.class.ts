export enum Suit {
    CLUBS = "Clubs",
    DIAMONDS = "Diamonds",
    HEARTS = "Hearts",
    SPADES = "Spades"
}

export enum Color {
    RED = "Red",
    BLACK = "Black"
}

export class Card {
    private _suit: Suit;
    private _color: Color;
    private _numeral: number;

    constructor(suit: Suit, color: Color, numeral: number) {
        this._suit = suit;
        this._color = color;
        this._numeral = numeral;
    }

    public get suit(): Suit {
        return this._suit;
    }

    public get color(): Color {
        return this._color;
    }

    public get numeral(): number {
        return this._numeral;
    }
}
