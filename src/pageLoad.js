
//initial page Loader
export const initialPageLoad = () => {
    let divContent = document.querySelector('#content');

    const meals = [
        {
            name: "Chicken Salad",
            imgSrc: '/images/chickenSalad.avif',
        },
        {
            name: "Fish Butter Masala",
            imgSrc: "/images/fishButter.avif",
        },
        {
            name: "Salmon With Salad",
            imgSrc: "/images/salmonWithSalad.avif"
        },
        {
            name : "Special Egg With Vegetables and beef",
            imgSrc: "/images/specialEggWithVeg.avif",
        },
        {
            name : "Veggie Yogurt Bowl",
            imgSrc: "/images/vegYogurtBowl.avif",
        }
    ];

    meals.forEach((meal) => {
        const mealInfo = document.createElement('div');
        mealInfo.classList.add('mealInfo');
        mealInfo.innerHTML = `
        <img src="${meal.imgSrc}" alt="${meal.name}" width="30%">
        <p class = "mealDescription">${meal.name}</p>`;
        console.log(meal.imgSrc);
        divContent.appendChild(mealInfo);
    })
}

