class Contact {

  loadContact(){
    let getContent = document.getElementById("content");


    let contentDiv = document.createElement("div");


    contentDiv.setAttribute("id", "tabcontent1");
    contentDiv.setAttribute("class", "hide")
    

    let contentH3 = document.createElement("h3");
    contentH3.textContent = "Contacts"

    let contentP = document.createElement("p");
    contentP.textContent = "07828277363"

    
    contentDiv.appendChild(contentH3);
    contentDiv.appendChild(contentP);
    getContent.appendChild(contentDiv);



  }
}

export {Contact}