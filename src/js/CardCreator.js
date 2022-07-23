export default class CardCreator {

    static createCard(text, geo, date) {
        const deskDisplayPart = document.querySelector('.desk-display-part');

        const card = document.createElement('div');
        card.className = "card";

        const cardTextAndDatePart = document.createElement('div');
        cardTextAndDatePart.className = "card-text-and-date-part";
        
        card.append(cardTextAndDatePart);

        const cardTextPart = document.createElement('p');
        cardTextPart.className = "card-text-part";
        cardTextPart.textContent = text;
        cardTextAndDatePart.append(cardTextPart);

        const cardDatePart = document.createElement('p');
        cardDatePart.className = "card-date-part";
        cardDatePart.textContent = date;
        cardTextAndDatePart.append(cardDatePart);

        const cardGeoPart = document.createElement('p');
        cardGeoPart.className = "card-geo-part";
        cardGeoPart.textContent = geo;
        card.append(cardGeoPart);



        let cards = document.querySelectorAll(".card");
        let cardsArr = [...cards];

        if (cardsArr.length > 0) {
            let firstCard = deskDisplayPart.firstChild;
            firstCard.before(card);
        } else {
            deskDisplayPart.append(card);
        }
        

        
        const cardBefore = document.createElement(`div`);
        cardBefore.className = 'card-before';
        card.append(cardBefore);
        let width = cardBefore.offsetWidth;


        let CardX = card.getBoundingClientRect().left;
        let scaleX = document.querySelector(`.desk-scale-part`).getBoundingClientRect().right;
        let margin = CardX - scaleX + width/2 + card.clientLeft + document.querySelector(`.desk-scale-part`).offsetWidth/2;
        let CardY = 0;

        cardBefore.style.setProperty('--sq-left', `${-margin}px`);
        cardBefore.style.setProperty('--sq-top', `${CardY}px`);
    }
}