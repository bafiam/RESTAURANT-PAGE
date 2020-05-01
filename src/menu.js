class Menu {
  static loadMenu() {
    const getContent = document.getElementById('content');


    const contentDiv = document.createElement('div');
    contentDiv.setAttribute('id', 'tabcontent2');
    contentDiv.setAttribute('class', 'hide');

    const contentH3 = document.createElement('h3');
    contentH3.textContent = 'Menu';
    const contentP = document.createElement('p');
    contentP.textContent = 'Mollit reprehenderit quis et cupidatat duis commodo magna non voluptate occaecat fugiat. Amet tempor adipisicing voluptate in veniam irure excepteur est elit sint. Culpa commodo irure deserunt occaecat irure fugiat duis do duis. Duis adipisicing voluptate incididunt sint sint anim mollit fugiat ea aliqua ea cupidatat occaecat. Consectetur deserunt dolore nulla deserunt nostrud Lorem sunt eiusmod nostrud. Culpa consectetur anim ex irure dolore est amet et cillum amet fugiat sint anim veniam. Minim nostrud ex voluptate aliquip. Aute proident mollit eu ea veniam pariatur fugiat aliqua ipsum mollit deserunt tempor est id. Voluptate enim ipsum non commodo. Aute labore quis voluptate sunt ea et id enim pariatur et cillum id nostrud tempor. Do enim ullamco deserunt veniam reprehenderit eiusmod et aliqua Lorem qui cillum aliqua aliqua mollit.Excepteur ex incididunt et qui cillum commodo aute commodo reprehenderit anim velit proident esse pariatur. Consectetur est veniam et sint cupidatat do labore consequat qui nostrud Lorem. Laboris ex sit nisi culpa.';


    
    contentDiv.append(contentH3,contentP);
    getContent.append(contentDiv);
  }
}


export default Menu;