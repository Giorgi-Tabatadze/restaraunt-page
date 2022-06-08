const addHoverAnimation = (element) => {
  
  const addHoverClass = (e) => {
    element.classList.add("hovered");
  };
  const removeHoverClass = (e) => {
    element.classList.remove("hovered");
  };

  element.addEventListener("mouseover", addHoverClass);
  element.addEventListener("mouseout", removeHoverClass);
};

export default addHoverAnimation;