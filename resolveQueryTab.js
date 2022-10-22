let ranNum;
let ranEle = document.querySelector(".btn"); //on click of submit button
let valEle = document.querySelector(".OTP");
ranEle.addEventListener("click", valFndr);

function valFndr() {
  ranNum = valEle.innerHTML;
  console.log(ranNum);
  console.log("here");
}
let nameVal, regNo, desc, tags;
ranEle.addEventListener("click", extractDet);
function extractDet() {
  nameVal = document.querySelector(".nameVal").value;
  regNo = document.querySelector(".regVal").value;
  desc = document.querySelector(".txtArVal").value;
  tags = document.querySelector(".tags").value;
  console.log(nameVal + " " + regNo + " " + desc + " " + tags);
}
