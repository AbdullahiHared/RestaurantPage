import {initialPageLoad} from "./pageLoad.js";
import {aboutContent} from "./about.js";
import {homePage} from "./home.js";

homePage();

//Select the buttons
const about = document.querySelector('.about');
const menu = document.querySelector('.menu');
const home = document.querySelector('.home');

function clearStar () {
    let starIcon = document.querySelector('.star');
    starIcon.style.display = "none";
}



about.addEventListener('click', function () {
    aboutContent();
    clearStar();
});
menu.addEventListener('click', function () {
    initialPageLoad();
    clearStar();
});
home.addEventListener('click', homePage);