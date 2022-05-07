const switchCardState = (): void => {
    /* Get Card */
    const card: HTMLDivElement = document.getElementById('card') as HTMLDivElement;
    /* Get Card-Content */
    const icon: HTMLImageElement        = document.getElementById('icon-img') as HTMLImageElement;
    const heading: HTMLHeadingElement   = document.getElementById('card-heading') as HTMLHeadingElement;
    const text: HTMLParagraphElement    = document.getElementById('card-text') as HTMLParagraphElement;


    card.classList.add('centered')
    icon.src = './images/illustration-thank-you.svg';
    heading.innerText = 'Thank you!';
    text.innerText = 'We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!'
}


const handleSubmit = (event: Event, form: HTMLFormElement): void => {
    event.preventDefault();
    form.style.display = "none";
    switchCardState();
}

const cardControls = (): void => {
    /* Get Card-Form-Elements */
    const cardForm: HTMLFormElement             = document.getElementById('rating-ui') as HTMLFormElement;
    const submit: HTMLButtonElement             = document.getElementById('submit-btn') as HTMLButtonElement;
    const ratingBtns: HTMLCollectionOf<Element> = document.getElementsByClassName('star-btn');
    
    let rating: number;
    
    const handleRating = (event: Event, target: HTMLButtonElement, otherBtns: HTMLCollectionOf<Element>): void => {
        event.preventDefault();
        rating = Number(target.value);
        target.classList.add('selected');
    }
        
    submit?.addEventListener("click", (event) => {
        handleSubmit(event, cardForm)
    }, false);

}

document.addEventListener("DOMContentLoaded", cardControls, false);