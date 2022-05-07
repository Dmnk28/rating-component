"use strict";
const switchCardState = () => {
    /* Get Card */
    const card = document.getElementById('card');
    /* Get Card-Content */
    const icon = document.getElementById('icon-img');
    const heading = document.getElementById('card-heading');
    const text = document.getElementById('card-text');
    card.classList.add('centered');
    icon.src = './images/illustration-thank-you.svg';
    heading.innerText = 'Thank you!';
    text.innerText = 'We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!';
};
const handleSubmit = (event, form) => {
    event.preventDefault();
    form.style.display = "none";
    switchCardState();
};
const cardControls = () => {
    /* Get Card-Form-Elements */
    const cardForm = document.getElementById('rating-ui');
    const submit = document.getElementById('submit-btn');
    const ratingBtns = document.getElementsByClassName('star-btn');
    let rating;
    const handleRating = (event, target, otherBtns) => {
        event.preventDefault();
        rating = Number(target.value);
        target.classList.add('selected');
    };
    submit === null || submit === void 0 ? void 0 : submit.addEventListener("click", (event) => {
        handleSubmit(event, cardForm);
    }, false);
};
document.addEventListener("DOMContentLoaded", cardControls, false);
