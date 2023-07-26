export class Service {
    private set: Set<string>;
    constructor(set: Set<string>){
        this.set = set;    
    }

    pushServiceButton(button: HTMLButtonElement) {
        const buttonName: string = button.textContent || 'nothing';

        if (button.classList.contains('button_active')) {
            this.makeButtonInactive(button);
            this.deleteButtonNameFromSet(buttonName);
            if (this.set.size === 0) {
                this.makeAllPictureBlocksUnblured();
            } else {
                this.makeChosenPictureBlocksBlured();
            }
        } else {
            if (this.set.size < 2) {
                this.makeButtonActive(button);
                this.addButtonNameToSet(buttonName);
                this.makeChosenPictureBlocksBlured();
            }
        }
        console.log(this.set.size);
    }

    makeButtonInactive(button: HTMLButtonElement): void {
        button.classList.remove('button_active');
    }

    makeButtonActive(button: HTMLButtonElement): void {
        button.classList.add('button_active');
    }

    deleteButtonNameFromSet(buttonName: string) {
        buttonName === 'Gardens'? this.set.delete('Garden') : this.set.delete(buttonName);
    }

    addButtonNameToSet(buttonName: string) {
        buttonName === 'Gardens' ? this.set.add('Garden') : this.set.add(buttonName);
    }

    makeAllPictureBlocksUnblured() {
        document.querySelectorAll('.service__picture-block').forEach((block) => block.classList.remove('service__picture-block_blured'));
    }

    makeChosenPictureBlocksBlured() {
        const servicePictureBlocks = document.querySelectorAll('.service__picture-block');
        const serviceTitlePictureBlocks = document.querySelectorAll('.picture-block__title');
       
        servicePictureBlocks.forEach((block) => block.classList.add('service__picture-block_blured')); 
        serviceTitlePictureBlocks.forEach((block) => {
            const blockNameFirstWord = block.textContent?.replace(/ .*/,'');
            console.log(blockNameFirstWord);
            if (blockNameFirstWord && Array.from(this.set).includes(blockNameFirstWord)) {
                block.closest('.service__picture-block')?.classList.remove('service__picture-block_blured');
            }
        });
    }
}