document.querySelector(".hamburger").addEventListener("click", () => {
  console.log("clicked");
  document.querySelector("nav").classList.toggle("display-none");
});
