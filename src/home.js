import addHoverAnimation from "./hovered";

const loadHome = () => {
  const welcomeDiv = document.createElement("div");
  welcomeDiv.setAttribute("id", "welcome");
  
  const h1 = document.createElement("h1")
  h1.classList.add("neonText");
  h1.innerText = "Tipsy Tiger Club"
  welcomeDiv.appendChild(h1);

  const h2 = document.createElement("h2");
  h2.innerText = "Feel The Dark Side"
  welcomeDiv.appendChild(h2);

  const p1 = document.createElement("p");
  p1.innerText = "FLY DOWN TO THE BEST CLUB IN THE IMPERIUM"
  welcomeDiv.appendChild(p1);

  const p2 = document.createElement("p");
  p2.innerText = "THIS IS HOW TO CHILLAX"
  welcomeDiv.appendChild(p2);

  const ticketBtn = document.createElement("button");
  ticketBtn.classList.add("tickets");
  addHoverAnimation(ticketBtn);
  ticketBtn.innerText = "GET TICKETS";

  welcomeDiv.appendChild(ticketBtn);

  return welcomeDiv;
}

export default loadHome;