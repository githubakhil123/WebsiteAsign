"use strict";
const slider = document.querySelector('.slider');
const popup = document.querySelector('.popup');
const cancel = document.querySelector('.cancel');
const menu = document.querySelector('.menu');
const infoElAll = document.querySelectorAll('.info');
const infoEl = document.querySelector('.info');



// menu
for (let i = 0; i < infoElAll.length; i++) {
    infoElAll[i].addEventListener('mouseover', function() {
        if (infoElAll[i]) {
            for (let i = 0; i < infoElAll.length; i++) {
                infoElAll[i].classList.add('blur');
            }
            infoElAll[i].classList.remove('blur');
        }
    })
    infoElAll[i].addEventListener('mouseout', function() {
        for (let i = 0; i < infoElAll.length; i++) {
            infoElAll[i].classList.remove('blur');
        }
    })
}


// slider popup for mobile view
slider.addEventListener('click', function() {
    const popupOpen = popup.style.display = 'flex';
    if (popupOpen) {
        cancel.addEventListener('click', function() {
            popup.style.display = 'none';
        })
    }
})