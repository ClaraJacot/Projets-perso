import { ajoutTitre,ajoutResume,ajoutInfos,ajoutLien } from "./modal.js";
import movies from './movies.js';
//console.log(movies)
//console.log(movies[5-1].titre);

const calendarButton = document.querySelector(".btn");
const calendarContainer = document.querySelector(".container");
const calendarDays = 24;
let today = new Date();
console.log(today);
let day = today.getDate();
console.log(day);

const openDoor = (path, event) => {
  if (event.target.dataset.day <= day) {
    event.target.parentNode.style.backgroundImage = `url(${path})`;
    event.target.style.opacity = "0";
    console.log(event.target.dataset.day)
    console.log(event.target.parentNode.style.gridArea)
    console.log()
    event.target.remove();
    //event.target = true;
    //console.log(event.target)
    //if (event.target.parentNode.style.gridArea == `door${event.target.dataset.day}`){
      useModal();
    //}
  // event.target.parentNode.addEventListener("mouseover", function () {
  //    console.log("merde");
    
  // });
  }else {
    alert("Ce n'est pas le bon jour!")
  }
}


const createCalendar = () => {
  for (let i = 0; i < calendarDays; i++) {
    const calendarOpenDoor = document.createElement("div");
    const calendarDoor = document.createElement("div");
    
    calendarOpenDoor.classList.add("img");
    calendarOpenDoor.setAttribute("id", i+1)
    calendarOpenDoor.style.gridArea = "door" + (i+1);
    calendarContainer.appendChild(calendarOpenDoor);

    calendarDoor.classList.add("txt");
    calendarDoor.innerHTML = i+1;
    calendarDoor.dataset.day = i+1;
    calendarOpenDoor.appendChild(calendarDoor);
   
    let imgNumber = i+1
    let imgPath = `./img${imgNumber}.jpg`;

    calendarDoor.addEventListener("click", openDoor.bind(null, imgPath));
  
  }
}
calendarButton.addEventListener("click", createCalendar);


function useModal() {

  const modal = document.querySelector(".modal-content");
  const images = document.querySelectorAll(".img");
  const span = document.querySelector(".close");
  console.log("blabla")
  
  images.forEach((image)=>{
    image.addEventListener("mouseover", function(){
      if (image.style.backgroundImage!=""){
        ajoutTitre(movies,image.id)
      modal.style.display = "block";}
    });    
  })
  
  span.onclick = function(){
      modal.style.display = "none";
  }
  window.onclick = function(event) {
    
      modal.style.display = "none";
    
  }
}
