//=====================================
//==============Onload=================
//=====================================

var overlay = document.querySelector("#overlay");
var progressBar = document.querySelector(".overlay__progress");
var main = document.querySelector(".header__main");
progressBar.style.width = "80%";

window.onload = function() {
   overlay.classList.add("loaded");
   progressBar.style.width = "100%";
   progressBar.style.transition = "width 0.5s linear";
   main.style.transform = "translateY(0)";
   main.style.opacity = "1";
};

//=====================================
//=========Smooth Scroll===============
//=====================================

const links = document.querySelectorAll(".js-nav");

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
//=============ONSCROLL NAV============
//=====================================

var nav = document.querySelector(".header__nav");
var head = document.querySelector(".header__head");

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

var counter = document.querySelectorAll(".counter__count h3");
var counterOffsetTop = document.querySelector(".counter").offsetTop;

current_0 = 0;
current_1 = 0;
current_2 = 0;
current_3 = 0;

function changeNav() {
   // HAndling Fixed Nav
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

   //Handling Highlight
   if (window.scrollY >= contactTopShift - 10) {
      allLinks[0].classList.remove("--active");
      allLinks[4].classList.add("--active");
      allLinks[4].classList.add("--active");
   } else if (window.scrollY >= clientsTopShift - 10) {
      allLinks[0].classList.remove("--active");
      allLinks[3].classList.remove("--active");
      allLinks[4].classList.remove("--active");
   } else if (window.scrollY >= worksTopShift - 10) {
      allLinks[0].classList.remove("--active");
      allLinks[2].classList.remove("--active");
      allLinks[3].classList.add("--active");
   } else if (window.scrollY >= servicesTopShift - 10) {
      allLinks[0].classList.remove("--active");
      allLinks[1].classList.remove("--active");
      allLinks[2].classList.add("--active");
      allLinks[3].classList.remove("--active");
   } else if (window.scrollY >= aboutTopShift - 10) {
      allLinks[0].classList.remove("--active");
      allLinks[1].classList.add("--active");
      allLinks[2].classList.remove("--active");
   } else {
      allLinks[1].classList.remove("--active");
      allLinks[0].classList.add("--active");
   }

   if (window.scrollY >= counterOffsetTop - 400) {
      setInterval(() => {
         if (current_0 != 213) {
            current_0 += 1;
            counter[0].innerHTML = current_0;
         }
      }, 50);
      setInterval(() => {
         if (current_1 != 170) {
            current_1 += 1;
            counter[1].innerHTML = current_1;
         }
      }, 65);
      setInterval(() => {
         if (current_2 != 35) {
            current_2 += 1;
            counter[2].innerHTML = current_2;
         }
      }, 300);
      setInterval(() => {
         if (current_3 != 2319) {
            current_3 += 1;
            counter[3].innerHTML = current_3;
         }
      }, 5);
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

function scrolling(id) {
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
         scrolling(0);
      } else if (i == 1) {
         scrolling(1);
      } else {
         scrolling(2);
      }
   });
});
