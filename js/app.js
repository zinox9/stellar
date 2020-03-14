//=====================================
//==============Onload=================
//=====================================

var overlay = document.querySelector("#overlay");
var progressBar = document.querySelector(".overlay__progress");

progressBar.style.width = "80%";
progressBar.style.transition = "width 10s linear";

window.onload = function() {
   console.log("Adding Class");
   overlay.classList.add("loaded");
   progressBar.style.width = "100%";
   progressBar.style.transition = "width 0.5s linear";
};

//=====================================
//=============MODAL===================
//=====================================

var modalActivator = document.querySelectorAll("#item");
var modalNumber = document.querySelector(".modal__counter");
var modalImage = document.querySelectorAll(".modal__image");
var modalName = document.querySelector(".modal__name");
var modalBtnR = document.querySelector(".modal__showcase-right");
var modalBtnL = document.querySelector(".modal__showcase-left");
var backdrop = document.querySelector(".modal__backdrop");

//----------SHOWING IMAGES & CONTENT-----------------
var data = [
   ["1/8", "Lamp"],
   ["2/8", "Fuji"],
   ["3/8", "Woodcraft"],
   ["4/8", "Droplet"],
   ["5/8", "Shutterbug"],
   ["6/8", "Minimalismo"],
   ["7/8", "Film"],
   ["8/8", "Skaterboy"]
];

var active = 0; //saving the last active image

function imageShow(i) {
   modalNumber.innerHTML = data[i][0];
   modalName.innerHTML = data[i][1]; //changing data

   modalImage[active].classList.remove("active");
   modalImage[i].classList.add("active"); //for animation

   //translating the Image Caraousel
   modalImage.forEach(function(item) {
      item.style.transform = "translateX(-" + i * 100 + "%)";
   });

   function myFunction(item, index) {
      document.getElementById("demo").innerHTML += index + ":" + item + "<br>";
   }

   active = i; // changing the active image number

   if (active == 7) {
      modalBtnR.style.color = "rgba(0,0,0,0)";
      modalBtnL.style.color = "rgba(255, 255, 255,0.15)";
   } else if (active == 0) {
      modalBtnL.style.color = "rgba(0,0,0,0)";
      modalBtnR.style.color = "rgba(255, 255, 255,0.15)";
   } else {
      modalBtnL.style.color = "rgba(255, 255, 255,0.15)";
      modalBtnR.style.color = "rgba(255, 255, 255,0.15)";
   }
}

modalActivator.forEach(function(item, i) {
   item.addEventListener("click", function() {
      imageShow(i);
   });
});

modalBtnR.addEventListener("click", function() {
   imageShow(active + 1);
});

modalBtnL.addEventListener("click", function() {
   imageShow(active - 1);
});

document.addEventListener("keydown", function(e) {
   if (e.code === "ArrowRight") {
      imageShow(active + 1);
   } else if (e.code === "ArrowLeft") {
      imageShow(active - 1);
   }
});

backdrop.addEventListener("click", function() {
   location.replace(
      window.location.href.replace("#modal", "#section-works-gallery")
   );
});

//=====================================
//=============Messages================
//=====================================

var messageButton = document.querySelectorAll("#slider-icon");
var message = document.querySelectorAll(".messages__message");
buttonON = 0;

function scrollTo(id) {
   message.forEach(function(item) {
      item.style.transform = "translateX(-" + id * 106 + "%)";
      console.log(id * 105);
   });
   messageButton[id].classList.add("active");
   messageButton[buttonON].classList.remove("active");
   buttonON = id;
}

messageButton.forEach(function(item, i) {
   item.addEventListener("click", function() {
      console.log("Clicked Slider", i);
      if (i == 0) {
         scrollTo(0);
      } else if (i == 1) {
         scrollTo(1);
      } else {
         scrollTo(2);
      }
   });
});
