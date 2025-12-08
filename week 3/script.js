// Select button and menu
const menuBtn = document.getElementById("menu-toggle");
const navMenu = document.querySelector(".nav-list");

// Event Listener
menuBtn.addEventListener("click", function () {
  navMenu.classList.toggle("visible");

  // Print result to console
  console.log("Menu Toggled!");
  console.log(
    "Menu is now:",
    navMenu.classList.contains("visible") ? "Visible" : "Hidden"
  );
});
