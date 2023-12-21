AOS.init({
  duration: 1200,
})
import { ajoutTitre, ajoutResume, ajoutInfos, ajoutLien } from "./modal.js";
import movies from './movies.js';
//console.log(movies)
//console.log(movies[5-1].titre);

const calendarButton = document.querySelector(".btn");
const calendarContainer = document.querySelector(".container");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const calendarDays = 24;
let today = new Date();
console.log(today);
let day = today.getDate();
console.log(day);

const openDoor = (path, event) => {
  if (event.target.dataset.day <= day) {
    event.target.parentNode.style.backgroundImage = `url(${path})`;
    event.target.style.opacity = "0";
    event.target.remove();
    useModal();
  } else {
    alert("Ce n'est pas le bon jour!")
  }
}

const createCalendar = () => {
  for (let i = 0; i < calendarDays; i++) {
    const calendarOpenDoor = document.createElement("div");
    const calendarDoor = document.createElement("div");

    calendarOpenDoor.classList.add("img");
    calendarOpenDoor.dataset.aos="zoom-in";
    calendarOpenDoor.setAttribute("id", i + 1);
    calendarOpenDoor.style.gridArea = "door" + (i + 1);
    calendarContainer.appendChild(calendarOpenDoor);

    calendarDoor.classList.add("txt");
    calendarDoor.innerHTML = i + 1;
    calendarDoor.dataset.day = i + 1;
    calendarOpenDoor.appendChild(calendarDoor);

    let imgNumber = i + 1
    let imgPath = `./img${imgNumber}.jpg`;

    calendarDoor.addEventListener("click", openDoor.bind(null, imgPath));
  }
}
calendarButton.addEventListener("click", function (){
  calendarContainer.scrollIntoView({behavior:"smooth"});
  createCalendar();
});

h1.addEventListener("mouseover", function () {
    h1.style.display = "none";
    h2.style.display = "block";

    setTimeout(function(){
      h2.style.display = "none";
      h1.style.display = "block";},1000);
    },false,);


function useModal() {

  const modal = document.querySelector(".modal-content");
  const images = document.querySelectorAll(".img");
  const span = document.querySelector(".close");
  const body = document.querySelector("body");

  images.forEach((image) => {
    image.addEventListener("mouseover", function () {
      if (image.style.backgroundImage != "") {
        ajoutTitre(movies, image.id);
        ajoutResume(movies, image.id);
        ajoutInfos(movies, image.id);
        ajoutLien(movies, image.id);
        modal.style.display = "block";
        modal.dataset.aos= "zoom-in";
        body.style.overflow ="hidden";
      }
    });
  })

  span.onclick = function () {
    modal.style.display = "none";
    body.style.overflow ="";
  }

  window.onclick = function (event) {
    modal.style.display = "none";
    body.style.overflow ="";
  }
}
