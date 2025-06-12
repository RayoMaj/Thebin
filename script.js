const bin = document.getElementById("bin");
const cameraLink = document.querySelector(".camera-link");
const camera = document.querySelector(".camera");

let dropped = false;

bin.addEventListener("click", () => {
 
  bin.style.transform = "rotate(180deg)";

  if (!dropped) {
    cameraLink.style.display = "block"; 

    requestAnimationFrame(() => {
    camera.style.top = "500px"; 
    });

    dropped = true;
  }
});
