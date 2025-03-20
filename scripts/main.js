
const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");

    if(mySrc === "images/kw.jpg") {
        myImage.setAttribute("src", "images/kon.jpg");
    } else {
        myImage.setAttribute("src", "images/kw.jpg");
    }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

myButton.addEventListener("click", () => {
    setUserName();
});

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }
  

