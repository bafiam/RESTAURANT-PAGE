import { Header } from './header';
import { Dashboard } from "./dashboard";
import { Contact } from "./contact";
import {  Menu } from "./menu";
import './style.css';


const header = new Header();
const dashboard = new Dashboard();
const contact = new Contact();
const menu = new Menu();
const navigate = new Navigate();


header.loadHeader();
dashboard.loadDashboard();
navigate.loadNavigate();
contact.loadContact();
menu.loadMenu();


class Navigate {

  loadNavigate(){
    
    let getContent = document.getElementById("content");
    let navigateDiv = document.createElement("div");
    navigateDiv.setAttribute("class", "tab")

    let contactBtn = document.createElement("button");
    contactBtn.textContent = "Contact";
    contactBtn.setAttribute("class", "contactbtn");
    contactBtn.addEventListener('click', () => {
      openContact();
    });

    

    let menuBtn = document.createElement("button");
    menuBtn.textContent = "Menu";
    menuBtn.setAttribute("class", "menubtn");
    menuBtn.addEventListener('click', () => {
      openMenu();
    });

    

    navigateDiv.appendChild(menuBtn)
    navigateDiv.appendChild(contactBtn);
    getContent.appendChild(navigateDiv);
 
  }
  
}



const openContact = () => {
  const getContact = document.getElementById("tabcontent1");
  const getMenu= document.getElementById("tabcontent2");
  if (getMenu.classList.contains("d-block")) {
    getMenu.classList.remove("d-block");
    getMenu.classList.add("hide")
  }

  getContact.classList.remove("hide");
  getContact.classList.add("d-block");
  
  
  
}

const openMenu = () => {
  const getMenu= document.getElementById("tabcontent2");
  const getContact = document.getElementById("tabcontent1");
  if (getContact.classList.contains("d-block")) {
    getContact.classList.remove("d-block")
    getContact.classList.add("hide")
    
  }
  
  getMenu.classList.remove("hide");
  getMenu.classList.add("d-block");
  
  
  
}
