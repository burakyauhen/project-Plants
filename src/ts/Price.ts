export class Price {

    pushDropdownButton(button: HTMLButtonElement) {
        if (button.classList.contains('dropdown-button_opened')) {
            this.closeDropdownButton(button);
        } else {
            document.querySelectorAll('.dropdown-button').forEach((button) => {
                this.closeDropdownButton(button);
            });
            this.openDropdownButton(button);
        }
    }

    closeDropdownButton(button: Element) {
        button.classList.remove('dropdown-button_opened');
        button.querySelector('.dropdown-button__image')?.classList.remove('dropdown-button__image_rotated');
    }

    openDropdownButton(button: Element) {
        button.classList.add('dropdown-button_opened');
        button.querySelector('.dropdown-button__image')?.classList.add('dropdown-button__image_rotated');
    }
}