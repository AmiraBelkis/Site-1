function dropDownMenu() {
    var list = document.getElementById("MenuList"); // take tyhe nav ul element
    if (list.className === "responsive") {
        list.className = "";
    } else list.className += "responsive"; // add a class to the menu list

}
///to make the menu list icon turns into X on click
const navToggle = document.querySelector('.nav-toggle');
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});
/*---------------Ripple Hover Effect---------------*/
const ANIMATEDCLASSNAME = "animated";
const ELEMENTS = document.querySelectorAll(".HOVER");
const ELEMENTS_SPAN = [];
ELEMENTS.forEach((element, index) => {
    let addAnimation = false;
    if (element.classList[1] == "FLASH") {
        element.addEventListener("animationend", e => {
            element.classList.remove(ANIMATEDCLASSNAME);
        });
        addAnimation = true;
    }
    if (!ELEMENTS_SPAN[index])
        ELEMENTS_SPAN[index] = element.querySelector("span");
});