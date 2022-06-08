import "./style.css"
import loadHome from "./home";
import addHoverAnimation from "./hovered";


const startPage = () => {

  //declare content Div
  const body = document.querySelector("body");
  const contentDiv = document.createElement("div");
  contentDiv.setAttribute("id", "content");
  body.appendChild(contentDiv);

  //make header and nav and list of buttons
  const header = document.createElement("header");
  header.classList.add("header-footer", "header");
  contentDiv.appendChild(header);

  const nav = document.createElement("nav");
  nav.classList.add("navigation");
  header.appendChild(nav);

  const navUl = document.createElement("ul");
  navUl.classList.add("header-nav");
  nav.appendChild(navUl);

  const homeLi = document.createElement("li");
  const menuLi = document.createElement("li");
  const contactLi = document.createElement("li");
  homeLi.classList.add("header-li");
  menuLi.classList.add("header-li");
  contactLi.classList.add("header-li");
  navUl.appendChild(homeLi);
  navUl.appendChild(menuLi);
  navUl.appendChild(contactLi);

  //navigation buttons
  const homeBtn = document.createElement("button");
  const menuBtn = document.createElement("button");
  const contactBtn = document.createElement("button");
  homeBtn.classList.add("nav-button");
  menuBtn.classList.add("nav-button");
  contactBtn.classList.add("nav-button");
  homeBtn.innerText = "HOME";
  menuBtn.innerText = "MENU";
  contactBtn.innerText = "CONTACT";
  addHoverAnimation(homeBtn);
  addHoverAnimation(menuBtn);
  addHoverAnimation(contactBtn);

  homeLi.appendChild(homeBtn);
  menuLi.appendChild(menuBtn);
  contactLi.appendChild(contactBtn);


  //main
  const main = document.createElement("main");
  main.classList.add("main");
  contentDiv.appendChild(main);

  
  const welcome = loadHome();
  
  main.appendChild (welcome);
}

startPage();