"use strict";
const cardControls = () => {
    /* Get Card-Form-Elements */
    const cardForm = document.getElementById('rating-ui');
    const submit = document.getElementById('submit-btn');
    const ratingBtns = Array.from(document.getElementsByClassName('star-btn'));
    /* Get Card */
    const card = document.getElementById('card');
    /* Get Card-Content */
    const icon = document.getElementById('icon');
    const heading = document.getElementById('card-heading');
    const text = document.getElementById('card-text');
    /* Chip-Element for Thank-You-Page */
    const ratingChip = document.createElement('div');
    ratingChip.id = 'rating-chip';
    ratingChip.classList.add('chip');
    /* Image-Element for Thank-You-Page */
    const image = document.createElement('img');
    image.src = "./images/illustration-thank-you.svg";
    image.classList.add("thank-you-image");
    let rating; // Rating Value: Used number instead of string here, because in a real scenario the number would be more interessting for marketing departments, etc. For this simple project itself a string would elsewise be suitable. 
    const handleRating = (event, target) => {
        rating = Number(target.value);
        ratingBtns.forEach(btn => {
            btn.classList.remove('selected');
        });
        target.classList.add('selected');
    };
    ratingBtns.map(btn => {
        btn.addEventListener("click", (event) => {
            event.preventDefault();
            handleRating(event, event.target);
        }, false);
    });
    const switchCardState = () => {
        card.classList.add('centered');
        icon.remove();
        ratingChip.innerText = `You selected ${rating.toString()} out of 5`;
        card.prepend(ratingChip);
        card.prepend(image);
        heading.innerText = 'Thank you!';
        text.innerText = 'We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!';
    };
    const handleSubmit = (event, form) => {
        event.preventDefault();
        if (!rating)
            return alert('Please select a number between 1 and 5. Thanks!');
        form.style.display = "none";
        switchCardState();
    };
    submit === null || submit === void 0 ? void 0 : submit.addEventListener("click", (event) => {
        handleSubmit(event, cardForm);
    }, false);
};
document.addEventListener("DOMContentLoaded", cardControls, false);
