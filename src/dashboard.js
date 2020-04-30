
class Dashboard {

  loadDashboard() {
    const data = [
      {image:"../src/imgs/front-about.jpg", title:"spiced food", cost:"$1234"},
      {image:"../src/imgs/front-about2.jpg", title:"spiced food", cost:"$1234"},
      {image:"../src/imgs/Talisman_web_0025.jpg", title:"spiced food", cost:"$1234"},
      {image:"../src/imgs/Talisman_web_0033.jpg", title:"spiced food", cost:"$1234"},
      {image:"../src/imgs/Talisman_web_0067-400x400.jpg", title:"spiced food", cost:"$1234"},
      {image:"../src/imgs/Talisman_web_0073-400x400.jpg", title:"spiced food", cost:"$1234"}
    ]

    let getContent = document.getElementById("content");

    let parentDiv = document.createElement("div");
    for (const element of data) {
      let contentDiv = document.createElement("div");
      contentDiv.setAttribute("class", "contentDiv")
      let imgDiv = document.createElement("div");
      imgDiv.setAttribute("class", "imgDiv")
      let contentImg = document.createElement("img");
      contentImg.src = element.image;
      let textDiv = document.createElement("div");
      textDiv.setAttribute("class", "textDiv")
      let contentTitle = document.createElement("h4");
      contentTitle.textContent = element.title;
      let contentPrice = document.createElement("h5");
      contentPrice.textContent = element.cost;


      imgDiv.appendChild(contentImg);
      contentDiv.appendChild(imgDiv);
      
      textDiv.appendChild(contentTitle);
      textDiv.appendChild(contentPrice);
      contentDiv.appendChild(textDiv);

      
      
      parentDiv.appendChild(contentDiv);
   
    }
    
    getContent.appendChild(parentDiv);
  }
  
}

export { Dashboard };  