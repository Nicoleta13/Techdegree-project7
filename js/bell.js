// Alert notifications

const notification = document.querySelector('.green-dot');
const bell = document.querySelector('.bell');
const dropdown = document.querySelector('#myDropdown');
const popupText = document.querySelector('.popupText');


bell.addEventListener('click', (event) => {
        notification.style.display = "none";
        dropdown.classList.toggle("show");
      });
