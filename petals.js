function createPetal(){
  const petal = document.createElement("div");
  petal.className = "petal";

  petal.style.left = Math.random() * window.innerWidth + "px";
  petal.style.animationDuration = (6 + Math.random() * 6) + "s";
  petal.style.opacity = Math.random();

  document.body.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 12000);
}

setInterval(createPetal, 400);
