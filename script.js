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
  }else {
    alert("Ce n'est pas le bon jour!")
  }
}

const createCalendar = () => {
  for (let i = 0; i < calendarDays; i++) {
    const calendarOpenDoor = document.createElement("div");
    const calendarDoor = document.createElement("div");
    console.log("merde2");
    calendarOpenDoor.classList.add("img");
    calendarOpenDoor.style.gridArea = "door" + (i+1);
    calendarContainer.appendChild(calendarOpenDoor);

    calendarDoor.classList.add("txt");
    calendarDoor.innerHTML = i+1;
    calendarDoor.dataset.day = i+1;
    calendarOpenDoor.appendChild(calendarDoor);

    imgNumber = i+1
    let imgPath = `./img${imgNumber}.jpg`;

    calendarDoor.addEventListener("click", openDoor.bind(null, imgPath));
  }
}
calendarButton.addEventListener("click", createCalendar);
