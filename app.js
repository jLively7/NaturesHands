const hero = document.querySelector('#hero');
const left = document.querySelector('#left');
const top_ = document.querySelector('#top');
const right = document.querySelector('#right');
const bottom = document.querySelector('#bottom');
const hidden = document.querySelector('.hide');
const mission = document.querySelector('.mission__content');
const whipped = document.querySelector('.whipped__content');
const balm = document.querySelector('.balm__content');


left.addEventListener('click', () => {
    mission.classList.toggle('hide');
    whipped.classList.add('hide');
    balm.classList.add('hide');
    if (!mission.classList.contains('hide')) {
        hero.classList.add('hide');
    } else {hero.classList.remove('hide');}
});

top_.addEventListener('click', () => {
    whipped.classList.toggle('hide');
    mission.classList.add('hide');
    balm.classList.add('hide');
    if (!whipped.classList.contains('hide')) {
        hero.classList.add('hide');
    } else {hero.classList.remove('hide');}
});

bottom.addEventListener('click', () => {
    balm.classList.toggle('hide');
    mission.classList.add('hide');
    whipped.classList.add('hide');
    if (!balm.classList.contains('hide')) {
        hero.classList.add('hide');
    } else {hero.classList.remove('hide');}
});