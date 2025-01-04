document.querySelector(".hamburger")?.addEventListener("click", () => {
  document.querySelector("nav")?.classList.toggle("display-none");
});
var video = document.querySelector(".toggle-video");
document.querySelector("#video")?.addEventListener("click", () => {
  document.querySelector(".toggle-video")?.classList.toggle("show-video");
  video.pause();
  video.currentTime = 0;
});
var modal = document.querySelector("#show-hide");
document.getElementById("learn-more")?.addEventListener("click", () => {
  if (modal) {
    document.querySelector("#show-hide").style.display = "block";
  }
});

var close = document.getElementById("close");
var audio = document.querySelector(".hobby-audio");
if (close) {
  document.getElementById("close").addEventListener("click", () => {
    document.querySelector("#show-hide").style.display = "none";
    audio.pause();
    audio.currentTime = 0;
  });
}
