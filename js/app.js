//=====================================
//==============Onload=================
//=====================================

var overlay = document.querySelector("#overlay");
var progressBar = document.querySelector(".overlay__progress");
var mainHeader = document.querySelector(".header__main");
progressBar.style.width = "80%";

window.onload = function() {
   //Removing Overlay and Animationg Header onload
   overlay.classList.add("loaded");
   progressBar.style.width = "100%";
   progressBar.style.transition = "width 0.5s linear";
   mainHeader.style.transform = "translateY(0)";
   mainHeader.style.opacity = "1";
};

//=====================================
//=========Smooth Scroll===============
//=====================================

const links = document.querySelectorAll(".js-nav");

//adding smooth scroll to all links on the page having class 'js-nav'

(function() {
   if (links) {
      links.forEach(link => {
         const section = link.getAttribute("href").replace("#", "");

         link.addEventListener("click", function(e) {
            e.preventDefault();
            scrolls("#" + section);
         });
      });
   }
})();

//=====================================
//===========ONSCROLL Events===========
//=====================================

//For Fixed Nav
var nav = document.querySelector(".header__nav");
var head = document.querySelector(".header__head");

//To highlight links on Page Scroll
var about = document.querySelector(".about");
var services = document.querySelector(".services");
var works = document.querySelector(".works");
var clients = document.querySelector(".clients");
var contact = document.querySelector("#contact");

var allLinks = document.querySelectorAll(".header__nav-list li a");

var aboutTopShift = about.offsetTop;
var servicesTopShift = services.offsetTop;
var worksTopShift = works.offsetTop;
var clientsTopShift = clients.offsetTop;
var contactTopShift = contact.offsetTop;

//For Counter Animation
var counter = document.querySelectorAll(".counter__count h3");
var counterOffsetTop = document.querySelector(".counter").offsetTop;

counterValues = [
   [0, 213, 50],
   [0, 170, 65],
   [0, 35, 300],
   [0, 2319, 4]
];

function changeNav() {
   // Handling Fixed Nav
   if (window.scrollY > aboutTopShift - 50) {
      nav.classList.add("fixed");
      nav.style.opacity = 1;
      head.style.opacity = 1;
   } else if (
      window.scrollY <= aboutTopShift - 50 &&
      window.scrollY >= aboutTopShift - 300
   ) {
      nav.style.opacity = 0;
      head.style.opacity = 0;
   } else {
      nav.style.opacity = 1;
      head.style.opacity = 1;
      nav.classList.remove("fixed");
   }

   //Changing Active Link On Nav
   if (window.scrollY >= contactTopShift - 10) {
      changeActive(4);
   } else if (window.scrollY >= clientsTopShift - 10) {
      changeActive(99999);
   } else if (window.scrollY >= worksTopShift - 10) {
      changeActive(3);
   } else if (window.scrollY >= servicesTopShift - 10) {
      changeActive(2);
   } else if (window.scrollY >= aboutTopShift - 10) {
      changeActive(1);
   } else {
      changeActive(0);
   }

   function changeActive(active) {
      allLinks.forEach(function(item, index) {
         if (index != active) {
            item.classList.remove("--active");
         } else if (index == active) {
            item.classList.add("--active");
         }
      });
   }

   //Animating Counter OnScroll
   if (window.scrollY >= counterOffsetTop - 500) {
      counter.forEach(function(item, index) {
         setInterval(() => {
            if (counterValues[index][0] != counterValues[index][1]) {
               counterValues[index][0] += 1;
               item.innerHTML = counterValues[index][0];
            }
         }, counterValues[index][2]);
      });
   }
}

window.addEventListener("scroll", changeNav);

//=====================================
//===============AOS===================
//=====================================

AOS.init({
   offset: 100,
   duration: 500,
   easing: "ease-in-sine",
   delay: 100
});

//=====================================
//=============MODAL===================
//=====================================

//Gallery Modal

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

//Adding Event Listener of Click And Keys to Modal

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

//Scrolling Message section Onclick
var messageButton = document.querySelectorAll("#slider-icon");
var message = document.querySelectorAll(".messages__message");
buttonON = 0;

function scrolling(id) {
   message.forEach(function(item) {
      item.style.transform = "translateX(-" + id * 106 + "%)";
   });
   messageButton[id].classList.add("active");
   messageButton[buttonON].classList.remove("active");
   buttonON = id;
}

messageButton.forEach(function(item, i) {
   item.addEventListener("click", function() {
      if (i == 0) {
         scrolling(0);
      } else if (i == 1) {
         scrolling(1);
      } else {
         scrolling(2);
      }
   });
});

//=====================================
//===============FORM==================
//=====================================

//Showing form Modal on Submit
var subscribed = document.querySelector(".subscribed");
var subscribedClose = document.querySelector(".subscribed a");

document.getElementById("form").addEventListener("submit", function(evt) {
   evt.preventDefault();
   subscribed.classList.add("show");
});

subscribedClose.addEventListener("click", function() {
   subscribed.classList.remove("show");
});
