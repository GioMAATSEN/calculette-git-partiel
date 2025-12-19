
function add(a, b) {
  // TODO
}

function sub(a, b) {
  // TODO
}

function mul(a, b) {
  // TODO
}

function calculate(a, b, op) {
  // TODO
}

document.getElementById("calcBtn").addEventListener("click", () => {
  const a = Number(document.getElementById("a").value);
  const b = Number(document.getElementById("b").value);
  const op = document.getElementById("op").value;

  const res = calculate(a, b, op);
  document.getElementById("result").textContent = String(res);
});
