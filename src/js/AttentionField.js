import CardCreator from "./CardCreator";
import ShowNote from "./ShowNote";
import toProperGeo from "./toProperGeo";

export default class AtteninonField {
    static showAttention(){
        const body = document.querySelector(`body`);
        
        const attentionField = document.createElement(`div`);
        attentionField.className = "attention-field";
        body.append(attentionField);

        const attentionCard = document.createElement(`div`);
        attentionCard.className = "attention-card";
        attentionField.append(attentionCard);

        const attentionCardHeader = document.createElement(`header`);
        attentionCardHeader.className = "attention-card-header";
        attentionCardHeader.textContent = "Something went wrong..."
        attentionCard.append(attentionCardHeader);

        const attentionCardContent = document.createElement(`p`);
        attentionCardContent.className = "attention-card-content";
        attentionCardContent.textContent = "We are very sorry, but we could not gain your whereabouts. Type your geo coordinates manually, or... we can say that you are somewhere faraway."
        attentionCard.append(attentionCardContent);

        const attentionCardLabel = document.createElement(`label`);
        attentionCardLabel.className = "attention-card-label";
        attentionCardLabel.setAttribute("to", "attention-input");
        attentionCardLabel.textContent = "Enter the latitude and longitude separated by commas";
        attentionCard.append(attentionCardLabel);

        const attentionCardInput = document.createElement(`input`);
        attentionCardInput.className = "attention-card-input";
        attentionCardInput.setAttribute("name", "attention-input");
        
        attentionCardLabel.append(attentionCardInput);
        attentionCardInput.focus();

        attentionCardInput.addEventListener(`keyup`, (evt)=> {
            if (evt.key == "Enter") {

                if (attentionCardInput.value !== "") {
                    console.log(1);
                    if (!(/^\[?\−?\-?\d{1,3}\.\d*\,?\s?\−?\-?\d{1,3}\.\d*\]?/gm.test(attentionCardInput.value))) {
                        ShowNote.note("Enter coordinates separated by commas ");
                        attentionCardInput.focus();
                        return false;
                    } else {
                    let text = document.querySelector(`.desk-input`).value;
                    let date = new Date();
                    let dataString = date.toString();
                    let dataArr = dataString.split('GMT');
                    let messageDate = dataArr[0];
                    
                    let geo = toProperGeo(attentionCardInput.value);

                    CardCreator.createCard(text, geo, messageDate);
                    document.querySelector(`.desk-input`).value = "";
                    geo = "";
                    attentionField.remove();
                    }
                } 
            }   
        })

        const attentionCardButtonsBlock = document.createElement(`div`);
        attentionCardButtonsBlock.className = "attention-card-buttons-block";
        attentionCard.append(attentionCardButtonsBlock);

        const attentionCardButtonOk = document.createElement(`div`);
        attentionCardButtonOk.className = "attention-card-button ok";
        attentionCardButtonOk.textContent = "Okey, use this data!";
        attentionCardButtonsBlock.append(attentionCardButtonOk);

        attentionCardButtonOk.addEventListener('click', ()=> {
        
            if (attentionCardInput.value !== "") {
                if (!(/^\[?\d{1,3}\.\d*\,?\s?\−?\d{1,3}\.\d*\]?/gm.test(attentionCardInput.value))) {
                    ShowNote.note("Enter coordinates separated by commas ");
                    attentionCardInput.focus();
                    return false;
                } else {
                let text = document.querySelector(`.desk-input`).value;
                let date = new Date();
                let dataString = date.toString();
                let dataArr = dataString.split('GMT');
                let messageDate = dataArr[0];

                let geo = toProperGeo(attentionCardInput.value);

                CardCreator.createCard(text, geo, messageDate);
                document.querySelector(`.desk-input`).value = "";
                geo = "";
                attentionField.remove();
                }
            } 
        }
        )

        const attentionCardButtonNope = document.createElement(`div`);
        attentionCardButtonNope.className = "attention-card-button nope";
        attentionCardButtonNope.textContent = "Say I'm on the Mars!";
        attentionCardButtonsBlock.append(attentionCardButtonNope);

        attentionCardButtonNope.addEventListener(`click`, ()=> {
            let text = document.querySelector(`.desk-input`).value;
            let geo = "From the Mars, with Love!";
            let date = new Date();
            let dataString = date.toString();
            let dataArr = dataString.split('GMT');
            let messageDate = dataArr[0];

            CardCreator.createCard(text, geo, messageDate);
            document.querySelector(`.desk-input`).value = "";
            geo = "";
            attentionField.remove(); 
            
        })
    }
}