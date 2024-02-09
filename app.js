const hero = document.querySelector('.hero__image');
const missionLink = document.querySelector('.mission_link');
const productsLink = document.querySelector('.products_link');
const hide = document.querySelector('.hide');
const mission = document.querySelector('.mission__content');
const products = document.querySelector('.products__content');
const lavender = document.querySelector('.lavender');


missionLink.addEventListener('click', () => {
    mission.classList.toggle('hide');
    missionLink.classList.toggle('bold');
    products.classList.add('hide');
    if (!mission.classList.contains('hide')) {
        hero.classList.add('hide');
    } else {hero.classList.remove('hide');}
    if (productsLink.classList.contains('bold')) {
        productsLink.classList.remove('bold');
    }
});

productsLink.addEventListener('click', () => {
    products.classList.toggle('hide');
    productsLink.classList.toggle('bold');
    mission.classList.add('hide');
    if (!products.classList.contains('hide')) {
        hero.classList.add('hide');
    } else {hero.classList.remove('hide');}
    if (missionLink.classList.contains('bold')) {
        missionLink.classList.remove('bold');
    }
});