const iconL = document.getElementById("icon-list");
const menuL = document.getElementById("menu-list");

iconL.addEventListener("click", () => {
    menuL.classList.toggle("hidden");
});
