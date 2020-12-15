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
/*-------------Login----------------------*/
try {

    var db = openDatabase('MySiteDB', '1.0', 'DB', 8 * 1024 * 1024);
    db.transaction(function(tx) {
        tx.executeSql(`CREATE TABLE IF NOT EXISTS  user (UserID ,UserName,UserPassword)`);
        tx.executeSql('INSERT INTO user  VALUES (1, "@User_name" , "0000")');
    });

} catch (error) {
    alert(error.tostring());
};

function Login(event) {
    let UserName = document.getElementById("User name").value;
    let Password = document.getElementById("password").value;
    if (UserName && Password) {
        try {
            var db = openDatabase('SiteDB', '1.0', 'DB', 8 * 1024 * 1024);
            db.transaction(function(tx) {
                tx.executeSql('SELECT * FROM USER WHERE UserName = ' + UserName + ' AND UserPassword = ' + Password);
            });
        } catch (error) {
            alert(error.tostring());
        }
    } else
        alert("Please fill out your login information");
    event.preventDefault();
}
let MyForm = document.getElementById("MyForm");
MyForm.addEventListener("submit", function(event) {
    let UserName = document.getElementById("User name").value;
    let Password = document.getElementById("password").value;
    if (UserName && Password) {
        try {
            var db = openDatabase('SiteDB', '1.0', 'DB', 8 * 1024 * 1024);
            db.transaction(function(tx) {
                tx.executeSql('SELECT * FROM USER WHERE UserName = ' + UserName + ' AND UserPassword = ' + Password);
            });

        } catch (error) {
            alert(error.tostring());
        }
    } else
        alert("Please fill out your login information");
    event.preventDefault();
});