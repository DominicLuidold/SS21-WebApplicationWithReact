import { Card, Suit } from './Card.class';

export interface GameCardProps {
    card: Card;
}

export const GameCard = (props: GameCardProps): JSX.Element => {
    function getImageForSuit(suit: Suit): string {
        let url = '';
        switch (suit) {
            case Suit.CLUBS:
                url = 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/Card_club.svg/229px-Card_club.svg.png';
                break;
            case Suit.DIAMONDS:
                url = 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Card_diamond.svg/174px-Card_diamond.svg.png';
                break;
            case Suit.HEARTS:
                url = 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Card_heart.svg/203px-Card_heart.svg.png';
                break;
            case Suit.SPADES:
                url = 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b8/Card_spade.svg/184px-Card_spade.svg.png';
                break;
        }

        return url;
    }

    function getCardName(numeral: number): string {
        if (numeral === 11) {
            return 'JACK';
        } else if (numeral === 12) {
            return 'QUEEN';
        } else if (numeral === 13) {
            return 'KING';
        } else if (numeral === 14) {
            return 'ACE';
        } else {
            return numeral.toString();
        }
    }

    return (
        <div style={{display: 'flex'}}>
            <img src={getImageForSuit(props.card.suit)} alt={ props.card.suit + ' | ' + props.card.color + ' | ' + props.card.numeral}></img>
            <p style={{fontSize: 40}}>{getCardName(props.card.numeral)}</p>
        </div>
    );
}
