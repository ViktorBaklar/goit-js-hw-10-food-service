import menuTemplate from '../templates/menuCard.hbs';
import menuData from '../menu.json';

const markup = menuTemplate(menuData);

const menuRef = document.querySelector('.js-menu');

menuRef.insertAdjacentHTML('beforeend', markup);