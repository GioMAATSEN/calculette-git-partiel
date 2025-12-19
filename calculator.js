function add(a, b) {
  return a + b;
}

function sub(a, b) {
  // TODO
}

function mul(a, b) {
  // TODO
}

function calculate(a, b, op) {
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return "Entrées invalides";
  }

  if (op === "add") {
    return add(a, b);
  }

  return "Opération non implémentée";
}

document.getElementById("calcBtn").addEventListener("click", () => {
  const a = Number(document.getElementById("a").value);
  const b = Number(document.getElementById("b").value);
  const op = document.getElementById("op").value;

  const res = calculate(a, b, op);
  document.getElementById("result").textContent = String(res);
});
