
// Enable nested dropdowns
document.addEventListener("DOMContentLoaded", function () {
    var dropdowns = document.querySelectorAll('.dropdown-submenu');

    dropdowns.forEach(function (dropdown) {
        dropdown.addEventListener('mouseover', function () {
            let submenu = this.querySelector('.dropdown-menu');
            if (submenu) {
                submenu.classList.add('show');
            }
        });

        dropdown.addEventListener('mouseleave', function () {
            let submenu = this.querySelector('.dropdown-menu');
            if (submenu) {
                submenu.classList.remove('show');
            }
        });
    });
});


// Disable right click
document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
});