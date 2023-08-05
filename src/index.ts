import './main.scss';
import './fonts/fonts.scss';
import { Service } from './ts/Service';
import { Price } from './ts/Price';
import { Contact } from './ts/Contact';
import { Menu } from './ts/Menu';

window.onload = function() {
    serviceButtons?.addEventListener('click', handlerServiceButtonsSelect);
    pricesMenu?.addEventListener('click', handlerPricesButtonsSelect);
    contactButton?.addEventListener('click', handlerContactButtonSelect);
    headerBurger?.addEventListener('click', handlerHeaderBurgerSelect);
    navList?.addEventListener('click', handlerNavListSelect);
    popUp?.addEventListener('click', handlerPopUpSelect);
}

// Hamburger menu 
//**********************************
const menu = new Menu();
const headerBurger = document.querySelector('.header__burger');
const navList = document.querySelector('.nav__list');
const popUp = document.querySelector('.pop-up');

const handlerHeaderBurgerSelect = (event: Event) => {
   if (menu.menuOpened === false) {
    menu.openMenu();
   } else {
    menu.closeMenu();
   }
} 

const handlerNavListSelect = (event: Event) => {
    const button = (event.target as HTMLDataListElement).closest('.nav__item');
    if (!button) return;
    menu.closeMenu();
}

const handlerPopUpSelect = (event: Event) => {
    menu.closeMenu();
}
//**********************************


//Serivce block
//********************************** 
const serviceButtons = document.querySelector('.service__buttons');
const set: Set<string> = new Set([]);
const service = new Service(set);

const handlerServiceButtonsSelect = (event: Event) => {
    const button = (event.target as HTMLButtonElement).closest('.service__button');
    if (!button) return;
    service.pushServiceButton(button as HTMLButtonElement);
}
//********************************** 


//Price block
//********************************** 
const pricesMenu = document.querySelector('.prices__menu');
const price = new Price();
const handlerPricesButtonsSelect = (event: Event) => {
    if (!(event.target as HTMLButtonElement).classList.contains('price-button')) {
        const button = (event.target as HTMLButtonElement).closest('.dropdown-button');
        if (!button) return;
        price.pushDropdownButton(button as HTMLButtonElement);
    } 
}
//********************************** 


//Contact block
//********************************** 
const contactButton = document.querySelector('.contact-us__botton');
interface cityObj {
    name: string;
    phone: string;
    adress: string;
}
const cities: Array<cityObj> = [
    {
        name: "Canandaigua, NY",
        phone: "+1	585	393 0001",
        adress: "151 Charlotte Street",
    },
    {
        name: "Yonkers, NY",
        phone: "+1	914	678 0003",
        adress: "511 Warburton Ave",
    },
    {
        name: "Sherrill, NY",
        phone: "+1	315	908 0004",
        adress: "14 WEST Noyes BLVD",
    },
    {
        name: "New York City",
        phone: "+1	212	456 0002",
        adress: "9 East 91st Street",
    },
];
const citySet: Set<string> = new Set([]);
cities.forEach((city: cityObj) => citySet.add(city.name));
const contact = new Contact(citySet, cities);

const handlerContactButtonSelect = (event: Event) => {
    const target = event.target as HTMLElement;

    if (target.classList.contains('contact-us__city-item')) {
        contact.choseCity(target as HTMLElement);
    } else {
        contact.pushContactButton(contactButton as HTMLButtonElement);
    }
}
//********************************** 