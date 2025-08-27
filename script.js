const cards = document.querySelectorAll(".card");
const infoPanel = document.getElementById("infoPanel");

cards.forEach(card => {
  card.addEventListener("click",  () => {
    const info =  card.getAttribute("data-info");
    infoPanel.innerHTML =  `<p>${info}</p>`;
  });
});


function createFireflies(count) {
  for (let i = 0; i < count; i++) {
    const firefly = document.createElement("div");
     firefly.className =  "firefly"; 
     firefly.style.left = `${Math.random() * window.innerWidth}px`;
    firefly.style.top = `${Math.random() * window.innerHeight}px`;
    firefly.style.animationDuration =  `${10 + Math.random() * 10}s`;
    document.body.appendChild(firefly);
  }
}

createFireflies(15);

