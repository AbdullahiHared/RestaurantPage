export function aboutContent () {
    let divContent = document.querySelector('#content');
    let currentTitle = document.querySelector('#currentTitle');
    divContent.textContent = "";

    const aboutInfo = document.createElement('div');
    aboutInfo.classList.add('aboutInfo');
    aboutInfo.textContent = "Welcome to Your Off/On Restaurant! At our restaurant, \nwe pride ourselves " +
        "on offering delicious meals inspired by diverse cultures and cuisines. \n" +
        "While we're currently based on the internet, our commitment to providing \n" +
        "exceptional dining experiences knows no bounds. Our team is dedicated to continuously \n" +
        "improving our menu to delight your taste buds every time you visit.";


    currentTitle.textContent = "Welcome to Your Off/On Restaurant!";

    divContent.appendChild(aboutInfo);
}