function addElement(arr) {
  const newAnchor = document.createElement("a");
  newAnchor.className = "card";
  newAnchor.href = "./pages/card.html";
  newAnchor.target = "_blank";

  const newDiv1 = document.createElement("div");
  newDiv1.className = "logo";
  const logo = newDiv1.appendChild(document.createElement("img"));
  logo.src = './icons/'+ arr.iconUrl;
  logo.className = "img";

  const newDiv2 = document.createElement("div");
  newDiv2.className = "label";
  const newP = newDiv2.appendChild(document.createElement("p"));
  newP.appendChild(document.createTextNode(arr.name));

  newDiv2.appendChild(newP);
  newAnchor.appendChild(newDiv1);
  newAnchor.appendChild(newDiv2);

  document.getElementById("container").appendChild(newAnchor);
  console.log("Everything is on the track.");
}

let cardData; 

fetch("./index.json")
  .then((response) => {
    return response.json();
  })
  .then((jsonData) => {
    cardData = jsonData;
    for (i = 0; i < jsonData.length; i++) {
      addElement(jsonData[i]);
    }
  });



function search(that) {
  var i;
  let filter = that.toUpperCase();

  let anchor = document.getElementsByClassName("card");
  

  for (i = 0; i < anchor.length; i++) {
    let textValue = anchor[i].innerText;
    if (textValue.toUpperCase().indexOf(filter) > -1) {
      anchor[i].style.display = "";
    } else {
      anchor[i].style.display = "none";
    }
  }
}

const container = document.querySelector('.container');
container.addEventListener('click', (e) => {
  let card = e.target;
  if (card.className === 'card'){
    for (let i = 0; i < cardData.length; i++){
      if (cardData[i].name === card.innerText) {
        console.log(cardData[i]);
        localStorage.setItem('name', cardData[i].name );
        localStorage.setItem('developer', cardData[i].developedBy );
        localStorage.setItem('desc', cardData[i].description );
        localStorage.setItem('year', cardData[i].firstAppeared );
        localStorage.setItem('more', cardData[i].documentation );
        localStorage.setItem('icon', cardData[i].iconUrl);
      }
    }

  }
})
