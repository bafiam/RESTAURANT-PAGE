class Menu {

  loadMenu(){
    let getContent = document.getElementById("content");


    let contentDiv = document.createElement("div");
    contentDiv.setAttribute("id", "tabcontent2");
    contentDiv.setAttribute("class", "hide")
    contentDiv.innerHTML = '';
    let contentH3 = document.createElement("h3");
    contentH3.textContent = "Menu"
    let contentP = document.createElement("p");
    contentP.textContent = "7hdhdhdhdbcdd"

    
    contentDiv.appendChild(contentH3);
    contentDiv.appendChild(contentP);
    getContent.appendChild(contentDiv);





  }
}

export {Menu}