const loader = document.querySelector(".loader");
const content = document.querySelector(".content");
const images = document.querySelector(".imagess");

window.onload = function () {
  setTimeout(function () {
    loader.classList.add("hidden");
    // loader.classList.add("opacity-0");
    // loader.classList.remove("opacity-100");
    content.classList.remove("opacity-0");
    content.classList.add("opacity-100");
    images.classList.add("translate-x-0");
    images.classList.remove("-translate-x-full");
    images.classList.remove("opacity-0");
  }, 2000);
};

const togglePassword = document.querySelector(".toggle-password");
const showPassword = document.querySelector(".show-password");
const hidePassword = document.querySelector(".hide-password");

const inputPassword = document.querySelector(".password-input");

togglePassword.addEventListener("click", function () {
  if (showPassword.classList.contains("hidden")) {
    inputPassword.type = "text";
    showPassword.classList.remove("hidden");
    hidePassword.classList.add("hidden");
  } else {
    inputPassword.type = "password";
    showPassword.classList.add("hidden");
    hidePassword.classList.remove("hidden");
  }
});

// let mobil = { a: 1 };
// console.log(typeof mobil);

// let txt = "saya suka makan";

// console.log((txt += " Nasi Goreng"));

// let i = 1;
// while (i < 10) {
//   console.log("daasdasdsd a " + i);
//   i++;
// }

// for (let i = 1; i <= 100; i++) {
//   console.log("For : Hallo " + i);
// }

// var k = 0;
// do {
//   console.log("DO While : Saya Bernilai " + k);
//   k++;
// } while (k < 5);
