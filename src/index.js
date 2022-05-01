import "./styles.css";
import row1 from "./img/row1.PNG";

document.getElementById("app").innerHTML = `<h1>Hello Vanilla!</h1>`;

let canvas = document.getElementById("ccanvas");
let ctx = canvas.getContext("2d");
// ctx.fillRect(50, 25, 150, 100);
// ctx.fillRect(50, 135, 150, 100);
// ctx.fillRect(50, 245, 150, 100);

// ctx.font = "12px sans-serif";
// ctx.fillText("x", 220, 75);
// ctx.fillText("y", 220, 175);
// ctx.fillText("z", 220, 275);

// var row = new Image();
// row.src = row1;
// row.onload = function () {
//   ctx.drawImage(row, 50, 25, 300, 125);
// };

let size = 50;
// for (let x = 0; x < canvas.width - size; x += size) {
//   ctx.clearRect(0, 0, canvas.width, canvas.height); // Clean up
//   ctx.fillRect(x , 50, size, size);
// }

let x = 0;
// const id = setInterval(() => {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ctx.fillRect(x , 50, size * 2, size);
//   ctx.fillRect(x , 50 + size + 10, size * 2, size);
//   ctx.fillRect(x , 50 + (2 * size) + 20, size * 2, size);
//   x += size;

//   if (x >= canvas.width - size) {
//     clearInterval(id);
//   }
// }, 200);

let squares = [];
function tick() {
  // Clear canvas
  // if (x >= canvas.width - size * 2) {
  //   clearInterval(id);
  // }
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillRect(x, 50, size * 2, size);
  ctx.fillRect(x - 10, 50 + size + 10, size * 2, size);
  ctx.fillRect(x - 20, 50 + 2 * size + 20, size * 2, size);
  x = x + size;
}

// const id = setInterval(() => {
//   tick();
// }, 200);

let start = 0;
function animate(timestamp) {
  const elapsed = timestamp - start;
  if (elapsed > 200) {
    start = timestamp;
    if (x < canvas.width - size) {
      tick();
    }
  }
  requestAnimationFrame(animate);
}

animate();
