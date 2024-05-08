import './header.css';
import { routes } from '../data/links';

export const header = () => {
  const header = document.querySelector('.header');
  const logoTitle = document.createElement('h1');
  const navBar = document.createElement('nav');

  logoTitle.textContent = ' -EventME- ';
  logoTitle.classList.add('logo');
  navBar.classList.add('navBar');

  for (const route of routes) {
    const link = document.createElement('a');

    link.textContent = route.text;
    link.href = '#';

    link.addEventListener('click', route.page);
    navBar.append(link);
  }
  header.append(logoTitle, navBar);
};
