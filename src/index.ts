import './main.scss';
import './fonts/fonts.scss';
// import './template.html';
// import './images/welcome/leafs.svg'
import { Service } from './ts/Service';
import { Price } from './ts/Price';

const serviceButtons = document.querySelector('.service__buttons');
const pricesMenu = document.querySelector('.prices__menu');

const set: Set<string> = new Set([]);
const service = new Service(set);
const price = new Price();

window.onload = function() {
    serviceButtons?.addEventListener('click', handlerServiceButtonsSelect);
    pricesMenu?.addEventListener('click', handlerPricesButtonsSelect);
}

const handlerServiceButtonsSelect = (event: Event) => {
    const button = (event.target as HTMLButtonElement).closest('.service__button');
    if (!button) return;
    service.pushServiceButton(button as HTMLButtonElement);
}

const handlerPricesButtonsSelect = (event: Event) => {
    if (!(event.target as HTMLButtonElement).classList.contains('price-button')) {
        const button = (event.target as HTMLButtonElement).closest('.dropdown-button');
        if (!button) return;
        price.pushDropdownButton(button as HTMLButtonElement);
    } 
}

