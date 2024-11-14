const navMenu = document.querySelector(".nav");
const line = document.querySelector(".line");

const offScreenMenu = document.querySelector(".off-screen-menu");

navMenu.addEventListener("click", () => {
   console.log("Works");

   navMenu.classList.toggle("active");
   offScreenMenu.classList.toggle("active");
   line.classList.toggle("active");
});
