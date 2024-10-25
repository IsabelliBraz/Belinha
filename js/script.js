const belinha = document.querySelector("#belinha");
let x = window.innerWidth / 2 - 32;
let y = window.innerHeight / 2 - 64;

function draw() {
  belinha.style.left = `${x}px`;
  belinha.style.top = `${y}px`;
}

draw();

window.addEventListener("keyup", () => {
  belinha.className = "";
});

window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowRight":
      belinha.className = "right";
      x += 5;
      break;
    case "ArrowLeft":
      belinha.className = "left";
      x -= 5;
      break;
    case "ArrowUp":
      belinha.className = "top";
      y -= 5;
      break;
    case "ArrowDown":
      belinha.className = "bottom";
      y += 5;
      break;
  }
  draw();
});
