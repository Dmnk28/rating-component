const cardControls = (): void => {
    /* Get Card-Form-Elements */
    const cardForm: HTMLFormElement = document.getElementById('rating-ui') as HTMLFormElement;
    const submit: HTMLButtonElement = document.getElementById('submit-btn') as HTMLButtonElement;
    const ratingBtns: Element[]     = Array.from(document.getElementsByClassName('star-btn'));
    /* Get Card */
    const card: HTMLDivElement = document.getElementById('card') as HTMLDivElement;
    /* Get Card-Content */
    const icon: HTMLDivElement        = document.getElementById('icon') as HTMLDivElement;
    const heading: HTMLHeadingElement   = document.getElementById('card-heading') as HTMLHeadingElement;
    const text: HTMLParagraphElement    = document.getElementById('card-text') as HTMLParagraphElement;
    
    /* Chip-Element for Thank-You-Page */
    const ratingChip: HTMLDivElement    = document.createElement('div');
    ratingChip.id = 'rating-chip';
    ratingChip.classList.add('chip');
    
    /* Image-Element for Thank-You-Page */
    const image: HTMLImageElement = document.createElement('img');
    image.src = "./images/illustration-thank-you.svg";
    image.alt = "Thank you Illustration"
    image.classList.add("thank-you-image")


    let rating: number;         // Rating Value: Used number instead of string here, because in a real scenario the number would be more interessting for marketing departments, etc. For this simple project itself a string would elsewise be suitable. 
    
    const handleRating = (event: Event, target: HTMLButtonElement): void => {
        rating = Number(target.value);
        ratingBtns.forEach(btn => {
            btn.classList.remove('selected')
        });
        target.classList.add('selected');
    }
    
    ratingBtns.map(btn => {
        btn.addEventListener("click", (event) => {
            event.preventDefault();
            handleRating(event, event.target as HTMLButtonElement)  
        }, false)
    })

    const switchCardState = (): void => {
        card.classList.add('centered')
        icon.remove();
        ratingChip.innerText = `You selected ${rating.toString()} out of 5`;
        card.prepend(ratingChip);
        card.prepend(image);
        heading.innerText = 'Thank you!';
        text.innerText = 'We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!'
    }
    
    
    const handleSubmit = (event: Event, form: HTMLFormElement): void => {
        event.preventDefault();
        if (!rating) return alert('Please select a number between 1 and 5. Thanks!')
        form.style.display = "none";
        switchCardState();
    }

    submit?.addEventListener("click", (event) => {
        handleSubmit(event, cardForm)
    }, false);

}

document.addEventListener("DOMContentLoaded", cardControls, false);