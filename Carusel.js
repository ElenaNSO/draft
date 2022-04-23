const BTN_LEFT = document.querySelector("#button-arow-left");
const BTN_RIGHT = document.querySelector("#button-arow-right");
const CAROUSEL = document.querySelector("#pets-carousel");
const ITEM_LEFT = document.querySelector("#item-left");
const ITEM_RIGHT = document.querySelector("#item-right");

const PETS_BTN_LEFT = document.querySelector("#button-arow-left");
const PETS_BTN_RIGHT = document.querySelector("#button-arow-right");
const PETS_CAROUSEL = document.querySelector("#pets-carousel");
//const PETS_ITEM_LEFT = document.querySelector("#item-left");
//const PETS_ITEM_RIGHT = document.querySelector("#item-right");


const createCardPets = () => {
  const card = document.createElement("article");
  card.classList.add("pets-article");
  return card;
}

const moveLeft = () => {
	
  PETS_CAROUSEL.classList.add("transition-left");
  BTN_LEFT.removeEventListener("click", moveLeft);
  BTN_RIGHT.removeEventListener("click", moveRight);
};

const moveRight = () => {
  PETS_CAROUSEL.classList.add("transition-right");
  BTN_LEFT.removeEventListener("click", moveLeft);
  BTN_RIGHT.removeEventListener("click", moveRight);
};

BTN_LEFT.addEventListener("click", moveLeft);
BTN_RIGHT.addEventListener("click", moveRight);


let massCarusel = [];
let idPetsArticle = document.getElementsByClassName("pets-article");
let idPetsActive = document.getElementsByClassName("active");

for (let i = 0; i < idPetsActive.length; i++){
massCarusel.push(idPetsActive[i].id)
}

while(massCarusel.length < 6) {
	let rndId = String(Math.floor(Math.random() * 8));
	if (massCarusel.includes(rndId) !== true) {
	  massCarusel.push(rndId);
	}
}

massCarusel.splice(0,3)

PETS_CAROUSEL.addEventListener("animationend", (animationEvent) => {
  let changedItem;
  let idMassCarusel, idMassActive; 
  if (animationEvent.animationName === "move-left") {
    
	idMassActive = massCarusel[0];
	changedItem = document.getElementById("idMassActive");
	
	for (let i = 0; i < 3; i++) {
		
	const card = document.getElementById("idMassActive");
	idMassCarusel = massCarusel[i];
	
	idMassCarusel.insertAdjacentHTML('beforebegin', document.getElementById("idMassCarusel"));
	PETS_CAROUSEL.classList.remove("transition-left");
	
    //changedItem = ITEM_LEFT;
   // document.querySelector("#item-active").innerHTML = ITEM_LEFT.innerHTML;
  }
  }  
  //else  {
 //   PETS_CAROUSEL.classList.remove("transition-right");
    
 // }


    //changedItem.innerHTML = "";
  //for (let i = 0; i < 3; i++) {
  //  const card = createCardTemplate();
  //  card.innerText = Math.floor(Math.random() * 8);
  //  changedItem.appendChild(card);
 // }
  
  BTN_LEFT.addEventListener("click", moveLeft);
  BTN_RIGHT.addEventListener("click", moveRight);
})