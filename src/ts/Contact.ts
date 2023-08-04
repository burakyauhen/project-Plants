interface cityObj {
    name: string;
    phone: string;
    adress: string;
}

export class Contact {
    private citySet: Set<string>;
    private cities: Array<cityObj>;
    private formAdress: string;

    constructor(citySet: Set<string>, cities: Array<cityObj>) {
        this.citySet = citySet;
        this.cities = cities;
        this.formAdress = '';
    }

    pushContactButton(button: HTMLButtonElement) {
        this.deleteAdressForm();
        if (button.classList.contains('contact-us__botton_opened')) {
            this.deleteCityList();
            this.makeButtonInactive();
            this.removeContactImage();
        } else {
            const strHTML = this.buildCityItems();
            document.querySelector('.contact-us__city-list')?.insertAdjacentHTML('afterbegin', strHTML);
            this.makeButtonActive();
            this.addContactImage();
        }
    }

    buildCityItems(): string {
        let strHTML = '';
        for (const city of this.citySet) {
            strHTML += `<li class='contact-us__city-item'>${city}</li>`;
        }
        return strHTML;
    }

    deleteCityList() {
        (document.querySelector('.contact-us__city-list') as HTMLDataListElement).innerHTML = '';
    }

    makeButtonActive() {
        document.querySelector('.contact-us__button-content')?.classList.add('contact-us__button-content_active');
        document.querySelector('.contact-us__button-image')?.classList.add('contact-us__button-image_active');
        document.querySelector('.contact-us__botton')?.classList.add('contact-us__botton_opened');
    }

    makeButtonInactive() {
        document.querySelector('.contact-us__button-content')?.classList.remove('contact-us__button-content_active');
        document.querySelector('.contact-us__button-image')?.classList.remove('contact-us__button-image_active');
        document.querySelector('.contact-us__botton')?.classList.remove('contact-us__botton_opened');
    }

    choseCity(target: HTMLElement) {
        const contactUsButtonName = document.querySelector('.contact-us__button-name');
        if (target === undefined || contactUsButtonName === null) {
            return;
        } else {
            const city = this.cities.find((value) => value.name === target.innerHTML);
            if (city != undefined) {
                this.createAdressForom(city);
            }
            this.putAdressForm();
            [target.innerHTML, contactUsButtonName.innerHTML] = [contactUsButtonName?.innerHTML, target.innerHTML];
        }
    }

    putAdressForm() {
        this.makeButtonInactive();
        this.deleteCityList();
        this.addContactImage();
        document.querySelector('.contact-us__menu')?.insertAdjacentHTML('beforeend', this.formAdress);
    }

    createAdressForom(city: cityObj) {
        this.formAdress = `
        <div class="contact-us__adress-form">
            <div class="contact-us__form-keys">
                <p class="contact-us__keys">City:</p>
                <p class="contact-us__keys">Phone:</p>
                <p class="contact-us__keys">Office adress:</p>
            </div>
            <div class="contact-us__form-values">
                <p class="contact-us__values">${city.name}</p>
                <p class="contact-us__values">${city.phone}</p>
                <p class="contact-us__values">${city.adress}</p>
            </div>
            <a href="tel:'${city.phone}'" class="contact-us__form-button">Call us</a>
        </div>`;
    }

    deleteAdressForm() {
        document.querySelector('.contact-us__adress-form')?.remove();
    }

    removeContactImage() {
        window.innerWidth < 700 &&
            document.querySelector('.contact-us__image')?.classList.remove('contact-us__image_hidden');
    }

    addContactImage() {
        window.innerWidth < 700 &&
            document.querySelector('.contact-us__image')?.classList.add('contact-us__image_hidden'); 
    }







}