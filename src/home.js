export const homePage = () => {
    let divContent = document.querySelector('#content');
    let aboutInfo = document.querySelector('.aboutInfo');
    let currentTitle = document.querySelector('#currentTitle');
    currentTitle.textContent = "Welcome to Home";
    divContent.textContent = "";

    const openingHours = document.createElement('div');
    openingHours.textContent = "All days: 7am -7pm";
    openingHours.classList.add('openingHours');
    const service = document.createElement('div');
    service.classList.add('service');
    const serviceInfo = document.createElement('div');
    serviceInfo.textContent = "We are the best, The atmosphere and customer service" +
        " make you feel like you are sitting in the middle of the woods, eating like a bear! " +
        "This is exactly the kind of place that I like to return to again and again.";
    service.appendChild(openingHours);
    service.appendChild(serviceInfo);

    divContent.appendChild(service);
}
