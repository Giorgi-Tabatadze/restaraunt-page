import Map from "./map.png";


const loadContact = () => {
  const contactDiv = document.createElement("div");
  contactDiv.setAttribute("id", "contact");

  const h1 = document.createElement("h2");
  h1.innerText = "Contact Us";
  contactDiv.appendChild(h1);

  const contactUl = document.createElement("ul");
  contactUl.classList.add("contact-list");
  contactDiv.appendChild(contactUl)
  
  const phoneNumber = document.createElement("li")
  phoneNumber.innerText = "Call Us:  +152 523 353 152";
  contactUl.appendChild(phoneNumber);

  const email = document.createElement("li")
  email.innerText = "Email: contact@ttclub.com";
  contactUl.appendChild(email);
  
  const address = document.createElement("li")
  const addressLink = document.createElement("a");
  address.innerText = "Location: ";
  addressLink.setAttribute("href", "https://www.nightcity.io?x=-845.000&y=975.000")
  addressLink.innerText = "Westbrook, Japan Town, R2 Highway 5";
  address.appendChild(addressLink);
  contactUl.appendChild(address);

  const mapLink = document.createElement("a");
  mapLink.setAttribute("href", "https://www.nightcity.io?x=-845.000&y=975.000")
  const map = new Image();
  map.src = Map;
  mapLink.appendChild(map);

  contactDiv.appendChild(mapLink);


  
  return contactDiv;
}

export default loadContact;

//https://www.nightcity.io?x=-845.000&y=975.000