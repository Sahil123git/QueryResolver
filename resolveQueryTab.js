let ranNum = 1234; //initial val of random num
let ranEle = document.querySelector(".btn"); //on click of submit button
let createBtn = document.querySelector(".create");
let valEle = document.querySelector(".OTP");
let eleInner = document.querySelector(".addPopup");
let ratingVal = document.querySelector(".ratingVal").innerHTML;

ranEle.disabled = true; //to disable submit button

let nameVal, regNo, desc;
let tags = []; //creating arr for tags
ranEle.addEventListener("click", extractDet);
createBtn.addEventListener("click", chkEnteredVal);

function extractDet() {
  //to extract values from user filled data
  nameVal = document.querySelector(".nameVal").value;
  regNo = document.querySelector(".regVal").value;
  desc = document.querySelector(".txtArVal").value;

  let arr = document.querySelector(".tags").value; //val entered by user
  let j = 0;

  tags[0] = ""; //to create arr of tags

  for (let i = 0; i < arr.length; i++) {
    //to get every tag from identifying space
    if (arr[i] == " ") {
      j++;
      tags[j] = "";
      continue;
    }
    tags[j] += arr[i];
  }
  for (let i = 0; i < tags.length; i++) {
    console.log(tags[i]);
  }
  console.log(nameVal + " " + regNo + " " + desc + " " + tags);

  //creating outer DIV
  let outerDiv = document.createElement("div");
  outerDiv.setAttribute("class", "query");
  //header p tags
  let headDiv = document.createElement("div");
  let nameTagQ = document.createElement("p");
  let nameTagA = document.createElement("p");
  let regTagQ = document.createElement("p");
  let regTagA = document.createElement("p");

  //setting values
  nameTagQ.innerText = "Name :";
  nameTagA.innerText = nameVal;
  regTagQ.innerText = "Registration No :";
  regTagA.innerText = regNo;

  headDiv.setAttribute("class", "header");
  nameTagQ.setAttribute("class", "Ques");
  nameTagA.setAttribute("class", "Ans");
  regTagQ.setAttribute("class", "Ques");
  regTagQ.setAttribute("class", "scndTag");
  regTagA.setAttribute("class", "Ans");

  headDiv.appendChild(nameTagQ);
  headDiv.appendChild(nameTagA);
  headDiv.appendChild(regTagQ);
  headDiv.appendChild(regTagA);

  //description data p tags
  let desDiv = document.createElement("div");
  let descQ = document.createElement("p");
  let descA = document.createElement("p");

  descQ.innerText = "Description :";
  descA.innerText = desc;

  desDiv.setAttribute("class", "Description");
  descA.setAttribute("class", "Ans");

  desDiv.appendChild(descQ);
  desDiv.appendChild(descA);

  //Tags p tag
  let tagsQ = document.createElement("p");
  tagsQ.setAttribute("class", "topic");
  tagsQ.innerText = "Tags";

  //tags p tag ans
  let tagsDiv = document.createElement("div");

  for (let i = 0; i < tags.length; i++) {
    let tagsp1 = document.createElement("p");
    tagsp1.innerText = tags[i];
    tagsDiv.appendChild(tagsp1);
    //now entering tags in website
  }

  tagsDiv.setAttribute("class", "tags");

  //creating resolved button
  let resBtn = document.createElement("button");

  resBtn.innerText = "Resolved";

  resBtn.setAttribute("class", "resolved");

  //adding all classes to outerDiv (5 ele to be inserted)
  outerDiv.appendChild(headDiv);
  outerDiv.appendChild(desDiv);
  outerDiv.appendChild(tagsQ);
  outerDiv.appendChild(tagsDiv);
  outerDiv.appendChild(resBtn);

  ranNum = valEle.innerHTML;
  let classRandomEle = "a" + ranNum;
  outerDiv.classList.add(classRandomEle);
  // console.log(classRandomEle + "  ele ");
  // console.logt
  ratingVal = Number(ratingVal) - 100;
  document.querySelector(".ratingVal").innerHTML = ratingVal;
  let midCol = document.querySelector(".querypar");
  midCol.appendChild(outerDiv);

  console.log(midCol);
  //to close pop up
  eleInner.setAttribute(
    "class",
    "addPopup"
  ); /*it is adding addPopup class which was previously removed*/
  eleInner.classList.remove("popupButton");
  ranEle.disabled = true; //again disabling submit button
  document.querySelector(".nameVal").value = ""; //Resetng all values
  document.querySelector(".regVal").value = "";
  document.querySelector(".txtArVal").value = "";
  document.querySelector(".tags").value = [];
}

//this func will enable submit button when all values are entered acc to us
function chkEnteredVal() {
  console.log("here");
  myInterval = setInterval(chkVal, 1000);

  function chkVal() {
    nameVal = document.querySelector(".nameVal").value;
    regNo = document.querySelector(".regVal").value;
    desc = document.querySelector(".txtArVal").value;
    let arr = document.querySelector(".tags").value;

    if (
      nameVal.length >= 3 &&
      regNo.length == 8 &&
      desc.length > 8 &&
      arr.length > 5
    ) {
      ranEle.disabled = false; //if condn true then submit button will get enabled
    }
  }
  if (ranEle.disable == false) {
    clearInterval(myInterval);
  }
}

//adding resolved popup
let res = document.querySelector(".resolved");
let addPopup = document.querySelector(".addPop2");
let midCol = document.querySelector(".querypar");
let close = document.querySelector(".closeX");
let btnotp = document.querySelector(".btnOTP");
let removeEle = document.querySelector(".query");

midCol.addEventListener("click", addClassForPopUp);

let parentNode;
function addClassForPopUp() {
  let clickedEle = event.target; //returning clicked ele
  parentNode = clickedEle.parentNode; //getting parent node of submit button
  // console.log(clickedEle.tagName);

  if (clickedEle.tagName === "BUTTON") {
    //if button is clicked then only show popup
    console.log(parentNode);
    addPopup.classList.add("popupButton");
    addPopup.classList.remove("hide");
    close.addEventListener("click", closePopUp); //two options to close popup
    btnotp.addEventListener("click", chkOTP);
  }
}
function closePopUp() {
  //for closing popup
  // console.log("her12");
  addPopup.classList.add("hide");
  addPopup.classList.remove("popupButton");
}
function chkOTP() {
  //for verifying otp
  console.log(parentNode);
  console.log(document.querySelector(".recOTP").value);

  if (
    parentNode.classList.contains("a" + document.querySelector(".recOTP").value)
  ) {
    addPopup.classList.add("hide");
    addPopup.classList.remove("popupButton");
    document.querySelector(".recOTP").value = "";
    parentNode.remove();
    // console.log(ratingVal);
    ratingVal = Number(ratingVal) + 200;
    document.querySelector(".ratingVal").innerHTML = ratingVal;
  }
}
