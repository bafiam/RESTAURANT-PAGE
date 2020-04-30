class Contact {
  static loadContact() {
    const getContent = document.getElementById('content');


    const contentDiv = document.createElement('div');


    contentDiv.setAttribute('id', 'tabcontent1');
    contentDiv.setAttribute('class', 'hide');


    const contentH3 = document.createElement('h3');
    contentH3.textContent = 'Contacts';

    const contentP = document.createElement('p');
    contentP.textContent = 'Elit incididunt nisi cupidatat eu proident laboris esse et aliqua qui anim ullamco. Magna non aliquip ullamco pariatur incididunt aute sunt exercitation irure nulla consequat commodo nulla laboris. Aliqua eiusmod ullamco ipsum labore officia est. Lorem mollit do fugiat fugiat eu enim mollit qui adipisicing eu proident nulla irure. Ipsum Lorem consectetur occaecat eu elit occaecat pariatur. Deserunt adipisicing adipisicing consectetur Lorem mollit aliquip elit non tempor eiusmod deserunt. Magna qui nostrud laborum adipisicing irure officia.';


    contentDiv.appendChild(contentH3);
    contentDiv.appendChild(contentP);
    getContent.appendChild(contentDiv);
  }
}

export default Contact;