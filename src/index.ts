import './main.scss';
import './fonts/fonts.scss';
// import './template.html';
// import './images/welcome/leafs.svg'
import { Service } from './ts/Service';

const serviceButtons = document.querySelector('.service__buttons');
const set: Set<string> = new Set([]);
const service = new Service(set);

window.onload = function() {
    serviceButtons?.addEventListener('click', handlerServiceButtonsSelect);
}

const handlerServiceButtonsSelect = (event: Event) => {
    const button = (event.target as HTMLButtonElement).closest('.service__button');
    if (!button) return;
    service.pushServiceButton(button as HTMLButtonElement);
}

