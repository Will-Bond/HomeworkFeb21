var modalOuterBeta = document.querySelector(".modal-outer-beta");
var modalOuterPickit = document.querySelector(".modal-outer-pickit");
var modalOuterCookit = document.querySelector(".modal-outer-cookit");
var modalOuterStoreit = document.querySelector(".modal-outer-storeit");

function showPopoverBeta(event) {
  if (!event.target.matches(".beta, .closer-beta")) return;
  modalOuterBeta.classList.toggle("open");
  event.preventDefault();
}

function showPopoverPickit(event) {
  if (!event.target.matches(".pickit, .closer-pickit")) return;
  modalOuterPickit.classList.toggle("open");
  event.preventDefault();
}

function showPopoverCookit(event) {
  if (!event.target.matches(".cookit, .closer-cookit")) return;
  modalOuterCookit.classList.toggle("open");
  event.preventDefault();
}

function showPopoverStoreit(event) {
  if (!event.target.matches(".storeit, .closer-storeit")) return;
  modalOuterStoreit.classList.toggle("open");
  event.preventDefault();
}

document.addEventListener("click", showPopoverBeta);
document.addEventListener("click", showPopoverPickit);
document.addEventListener("click", showPopoverCookit);
document.addEventListener("click", showPopoverStoreit);
