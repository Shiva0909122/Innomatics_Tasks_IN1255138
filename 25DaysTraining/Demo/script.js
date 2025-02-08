let menuData = [];

function fetchMenu() {
    fetch('https://api.npoint.io/fd2ca043960610c4536a')
        .then(response => response.json())
        .then(data => {
            menuData = data;
            displayMFoodCards();
        });
}

function displayMFoodCards() {
    const foodCards = document.getElementById('foodCards');
    
    let cardsHTML = '';

    menuData.forEach((food) => {
        // Assuming each food item has an image_url
        cardsHTML += `
        <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div class="card">
                <img src="${food.image_url || 'https://via.placeholder.com/150'}" class="card-img-top" alt="${food.name}">
                <div class="card-body">
                    <h5 class="card-title">${food.name}</h5>
                    <p class="card-text">Location: ${food.location_id}</p>
                    <p class="card-text">City: ${food.city}</p>
                    <p class="card-text">Country: ${food.country_name}</p>
                </div>
            </div>
        </div>`;
    });
    
    foodCards.innerHTML = cardsHTML;
}

document.addEventListener('DOMContentLoaded', fetchMenu);
