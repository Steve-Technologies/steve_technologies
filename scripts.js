body = document.querySelector("body");

const floatIcons = [
  "./assets/tech-logos/AWS.svg",
  "./assets/tech-logos/Cloudflare.svg",
  "./assets/tech-logos/CPP.svg",
  "./assets/tech-logos/CSS3.svg",
  "./assets/tech-logos/dotnet.svg",
  "./assets/tech-logos/Facebook.svg",
  "./assets/tech-logos/instagram.svg",
  "./assets/tech-logos/chatgpt.svg",
  "./assets/tech-logos/Flask.svg",
  "./assets/tech-logos/Flutter.svg",
  "./assets/tech-logos/GitHub.svg",
  "./assets/tech-logos/google_cloud.svg",
  "./assets/tech-logos/HTML5.svg",
  "./assets/tech-logos/Ionic.svg",
  "./assets/tech-logos/Java.svg",
  "./assets/tech-logos/JavaScript.svg",
  "./assets/tech-logos/jQuery.svg",
  "./assets/tech-logos/Laravel.svg",
  "./assets/tech-logos/LinkedIn.svg",
  "./assets/tech-logos/Linux.svg",
  "./assets/tech-logos/MongoDB.svg",
  "./assets/tech-logos/MySQL.svg",
  "./assets/tech-logos/Node.js.svg",
  "./assets/tech-logos/OpenCV.svg",
  "./assets/tech-logos/PHP.svg",
  "./assets/tech-logos/Python.svg",
  "./assets/tech-logos/React.svg",
  "./assets/tech-logos/Rust.svg",
  "./assets/tech-logos/Selenium.svg",
  "./assets/tech-logos/VScode.svg",
  "./assets/tech-logos/WebAssembly.svg",
  "./assets/tech-logos/WooCommerce.svg",
  "./assets/tech-logos/WordPress.svg",
  "./assets/tech-logos/Xcode.svg",
];

new FloatingIcons("#hero", floatIcons, 1);

read_steve = document.querySelector("#read_steve");
steve_popup = document.querySelector("#more_steve");
read_steve.addEventListener("click", () => {
  steve_popup.showModal();
  body.classList.add("modal-open");
});

read_joyce = document.querySelector("#read_joyce");
joyce_popup = document.querySelector("#more_joyce");
read_joyce.addEventListener("click", () => {
  joyce_popup.showModal();
  body.classList.add("modal-open");
});

function close_popup(e) {
  body.classList.remove("modal-open");
  e.parentElement.parentElement.parentElement.close();
}
