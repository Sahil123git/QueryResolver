const ele = document.querySelector(".create");
ele.addEventListener("click", myFunction);

function myFunction() {
  let eleInner = document.querySelector(".addPopup");
  const para = document.querySelector(".closeButton");
  
  eleInner.setAttribute("class", "popupButton");
  para.addEventListener("click", closePopup);
  eleInner.classList.remove("addPopup");

  function closePopup() {
    // para.empty();
    // console.log("para");
    eleInner.setAttribute(
      "class",
      "addPopup"
    ); /*it is adding addPopup class which was previously removed*/
    eleInner.classList.remove("popupButton");
  }
}
