const loadMenu = () => {
  const menuDiv = document.createElement("div");
  menuDiv.setAttribute("id", "menu");

  const h1 = document.createElement("h2");
  h1.innerText = "Drinks Menu";
  menuDiv.appendChild(h1);

  const makeCocktail = (name, smalltext, price) => {
    const cocktailLi = document.createElement("li");
    cocktailLi.classList.add("cocktail");

    const text = document.createElement("div")
    cocktailLi.appendChild(text);

    const p1L = document.createElement("p");
    p1L.classList.add("drink-name");
    const p1S = document.createElement("p");
    p1S.classList.add("small-text");
    p1L.innerText = name;
    p1S.innerText = smalltext;
    text.appendChild(p1L);
    text.appendChild(p1S);

    const priceP = document.createElement("p");
    priceP.innerText = `${price} EB`

    cocktailLi.appendChild(priceP);

    return cocktailLi
  }
  
  const menuUl = document.createElement("ul");
  
  const pansy = makeCocktail("Pansy", "BEER. ROLL PERCEPTION TO DETERMINE QUALITY", 10)
  const nomad = makeCocktail("Nomad Specialist", "JACK DANTELS WHISKEU ON THE NUTZ", 9)
  const soal = makeCocktail("Soal Specialist", "ROLL PERCEPTION FOR 10% THE REST IS WATER", 9)
  const silverhand = makeCocktail("The Silverhand", "1 SHOT VODKA, BRANDY AND SUPERFUEL CHOOH2", 10)
  const dekard = makeCocktail("Dekard", "SCOTCH NEAT. DONT FUCK IT UP AND GET RAPEY", 10);
  const johnny = makeCocktail("Johnny Silverhand", "QUILA OLD FASHIONED, BEER, CHILLI PEPPER", 11);
  const bloodRazor = makeCocktail("Blood Razor", "RED WINE, BRANDY AND CHERRY COKE", 11);
  const seaBreeze = makeCocktail("Ripper", "ROLL FOR WHISKEY OUZU AND CITRUS", 12);
  const theKiller = makeCocktail("The Killer", "5 HOOPS ITS ALL IN THE WRIST!", 70);
  const euro = makeCocktail("Euro", "FRESH JUICE, BOURBON, GIN ICE CUBES", 90);

  menuUl.appendChild(pansy);
  menuUl.appendChild(nomad);
  menuUl.appendChild(soal);
  menuUl.appendChild(silverhand);
  menuUl.appendChild(dekard);
  menuUl.appendChild(johnny);
  menuUl.appendChild(bloodRazor);
  menuUl.appendChild(seaBreeze);
  menuUl.appendChild(theKiller);
  menuUl.appendChild(euro);

  menuDiv.appendChild(menuUl);

  return menuDiv;
}

export default loadMenu;