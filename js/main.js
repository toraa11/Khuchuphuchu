function toggleMenu(){
  document.getElementById("menu").classList.toggle("show");
}

function openLetter(){
  document.getElementById("letter").classList.add("seal");
  document.getElementById("letter").style.display="block";
}

function sealIt(){
  document.getElementById("motivation").style.display="block";
  document.getElementById("motivation").classList.add("seal");
}
