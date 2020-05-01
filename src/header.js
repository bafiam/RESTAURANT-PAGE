import { imageOne } from './imgs/newback1.jpg';

class Header {
  static loadHeader() {
    const getContent = document.getElementById('content');

    const headerDiv = document.createElement('div');
    headerDiv.textContent = 'WELCOME TO THE TALISMAN HOTEL';
    headerDiv.setAttribute('class', 'headerDiv');
    getContent.appendChild(headerDiv);

    const desciption = 'From the humble beginnings back in the 90’s, The Talisman started as a small old house in Karen originally occupied by the famous wildlife photographer and author Alan Root in their youth. The Talisman has since grown into a household name with one of the best cuisines in the country. Come experience fine dining in a whole different setting. An environmental friendly place with an organic garden and  highly rated and awarded on International restaurant platforms.';


    const spanHead = document.createElement('h3');
    spanHead.textContent = 'THE TALISMAN STORY';
    spanHead.setAttribute('class', 'p-title');
    getContent.appendChild(spanHead);

    const span = document.createElement('p');
    span.textContent = desciption;
    span.setAttribute('class', 'history');
    const myIcon = new Image();
    myIcon.src = imageOne;
    span.appendChild(myIcon);
    getContent.appendChild(span);
  }
}

export default Header;