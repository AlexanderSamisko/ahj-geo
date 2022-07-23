import CardCreator from './CardCreator';
import AtteninonField from './AttentionField';

export default class Desk {
  constructor() {
    this.createDesk();
  }

  createDesk() {
    const body = document.querySelector('body');

    const desk = document.createElement('div');
    desk.className = 'desk';
    body.append(desk);

    const deskHeader = document.createElement('header');
    deskHeader.className = 'desk-header';
    desk.append(deskHeader);

    const deskHeaderDotFirst = document.createElement('div');
    deskHeaderDotFirst.className = 'desk-header-dot';
    deskHeader.append(deskHeaderDotFirst);

    const deskHeaderDotSecond = document.createElement('div');
    deskHeaderDotSecond.className = 'desk-header-dot';
    deskHeader.append(deskHeaderDotSecond);

    const deskHeaderDotThird = document.createElement('div');
    deskHeaderDotThird.className = 'desk-header-dot';
    deskHeader.append(deskHeaderDotThird);

    const deskBody = document.createElement('div');
    deskBody.className = 'desk-body';
    desk.append(deskBody);

    const deskScalePart = document.createElement('div');
    deskScalePart.className = 'desk-scale-part';
    deskBody.append(deskScalePart);

    const deskDisplayPart = document.createElement('div');
    deskDisplayPart.className = 'desk-display-part';
    deskBody.append(deskDisplayPart);

    const deskInput = document.createElement('input');
    deskInput.className = 'desk-input';
    desk.append(deskInput);
    deskInput.addEventListener('keyup', (evt) => {
      if (evt.key === 'Enter') {
        const date = new Date();
        const dataString = date.toString();
        const dataArr = dataString.split('GMT');
        const messageDate = dataArr[0];

        let geo = '';
        if (navigator.geolocation) {
          const text = deskInput.value;
          navigator.geolocation.getCurrentPosition(succes, error);

          function succes(position) {
            const crd = position.coords;

            successIsDone(crd.latitude, crd.longitude);
          }

          function error() {
            AtteninonField.showAttention();
            deskInput.blur();
          }

          function successIsDone(lati, long) {
            console.log(typeof lati);
            geo = `[${lati.toFixed(5)}, ${long.toFixed(5)}]`;
            CardCreator.createCard(text, geo, messageDate);
            deskInput.value = '';
          }
        } else {
          AtteninonField.showAttention();
          deskInput.blur();
        }
      }
    });
  }
}
