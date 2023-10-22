/*const myHeading = document.querySelector("h1");
myHeading.textContent = "Hellows Worldsk!";
*/


// IMAGE CHANGER
const myImage = document.querySelector("img");

myImage.onclick = () => { // I think this can be rewritten using a switch statement
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/274541228_5095492943843655_9024557307638746537_n.jpg") { // 1st pic spurce: Berto
        myImage.setAttribute("src", "images/20231012_174543.jpg"); // 2nd pic source: Oreo
    } else if (mySrc === "images/20231012_174543.jpg") { // 2nd
        myImage.setAttribute("src","images/20230930_040740.jpg"); // 3rd pic
    } else {
        myImage.setAttribute("src","images/274541228_5095492943843655_9024557307638746537_n.jpg");
    }
};

// User Name
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

// sets and outputs user name
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
    localStorage.setItem("name",myName);
    myHeading.textContent = `Meet Berto, ${myName}`;
    }
}

if(!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Meet Berto, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};
