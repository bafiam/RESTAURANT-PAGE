import Header from './header';
import Dashboard from './dashboard';
import Contact from './contact';
import Menu from './menu';
import './style.css';

const openContact = () => {
  const getContact = document.getElementById('tabcontent1');
  const getMenu = document.getElementById('tabcontent2');
  const getDash = document.getElementById('tabcontent3');
  if (getMenu.classList.contains('d-block') || getDash.classList.contains('d-block')) {
    getMenu.classList.replace('d-block', 'hide');
    getDash.classList.replace('d-block', 'hide');
  }

  getContact.classList.replace('hide', 'd-block');
};

const openMenu = () => {
  const getMenu = document.getElementById('tabcontent2');
  const getContact = document.getElementById('tabcontent1');
  const getDash = document.getElementById('tabcontent3');
  if (getContact.classList.contains('d-block') || getDash.classList.contains('d-block')) {
    getContact.classList.replace('d-block', 'hide');
    getDash.classList.replace('d-block', 'hide');
  }

  getMenu.classList.replace('hide', 'd-block');
};
const openDash = () => {
  const getMenu = document.getElementById('tabcontent2');
  const getContact = document.getElementById('tabcontent1');
  const getDash = document.getElementById('tabcontent3');
  if (getContact.classList.contains('d-block') || getMenu.classList.contains('d-block')) {
    getContact.classList.replace('d-block', 'hide');
    getMenu.classList.replace('d-block', 'hide');
  }

  getDash.classList.replace('hide', 'd-block');
};


class Navigate {
  static loadNavigate() {
    const getContent = document.getElementById('content');
    const navigateDiv = document.createElement('div');
    navigateDiv.setAttribute('class', 'tab');

    const dashBtn = document.createElement('button');
    dashBtn.textContent = 'Menu';
    dashBtn.setAttribute('class', 'dashbtn');
    dashBtn.addEventListener('click', () => {
      openDash();
    });

    const contactBtn = document.createElement('button');
    contactBtn.textContent = 'Contact';
    contactBtn.setAttribute('class', 'contactbtn');
    contactBtn.addEventListener('click', () => {
      openContact();
    });


    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'Home';
    menuBtn.setAttribute('class', 'menubtn');
    menuBtn.addEventListener('click', () => {
      openMenu();
    });


    navigateDiv.append(menuBtn, contactBtn, dashBtn);
    getContent.appendChild(navigateDiv);
  }
}


Header.loadHeader();
Navigate.loadNavigate();
Contact.loadContact();
Menu.loadMenu();
Dashboard.loadDashboard();