const navMenu = document.querySelector(".nav");
const line = document.querySelector(".line");
const offScreenMenu = document.querySelector(".off-screen-menu");
const menuItems = document.querySelectorAll(".off-screen-menu li");

navMenu.addEventListener("click", () => {
   navMenu.classList.toggle("active");
   line.classList.toggle("active");

   if (offScreenMenu.classList.contains("active")) {
      // Close the menu
      offScreenMenu.classList.remove("active");
      resetAnimations(menuItems);
   } else {
      // Open the menu
      offScreenMenu.classList.add("active");
      applyDelays(menuItems);
   }
});

function applyDelays(items) {
   const baseDelay = 0.1; // Start faster, was 0.6
   const stagger = 0.2; // Keep staggered timing

   items.forEach((item, index) => {
      item.style.animation = "none"; // Reset animation
      void item.offsetWidth; // Trigger reflow
      item.style.animation = `fadeIn 1s forwards`;
      item.style.animationDelay = `${baseDelay + index * stagger}s`;
   });
}

function resetAnimations(items) {
   items.forEach((item) => {
      item.style.animation = "none"; // Clear animation
      item.style.animationDelay = "0s"; // Reset delay
   });
}
