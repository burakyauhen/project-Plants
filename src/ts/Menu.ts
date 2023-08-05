export class Menu {
    private _menuOpened: boolean = false;
    
    get menuOpened() {
        return this._menuOpened;
    }

    closeMenu() {
        document.querySelector('.nav')?.classList.remove('nav_active');
        document.querySelector('body')?.classList.remove('none-scroled');
        document.querySelector('.header__burger')?.classList.remove('header__burger_rotated');
        document.querySelector('.pop-up')?.classList.remove('pop-up_active');
        this._menuOpened = !this._menuOpened;
    }

    openMenu() {
        document.querySelector('.nav')?.classList.add('nav_active');
        document.querySelector('body')?.classList.add('none-scroled');
        document.querySelector('.header__burger')?.classList.add('header__burger_rotated');
        setTimeout(() => {
            document.querySelector('.pop-up')?.classList.add('pop-up_active');
        }, 500);
        this._menuOpened = !this._menuOpened;
    }
}