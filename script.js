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
/*-------------------switch signe-------------*/
function SwitchSigne(child) {
    var selectedClass = "Selected";
    var Login = document.getElementById("Login");
    var SigneUp = document.getElementById("Signe Up");

    if ((child === 'Signe Up') && (Login.className === selectedClass)) {
        var TheForm = document.getElementById('SigneInUp');
        TheForm.innerHTML = ` <form class="box" id="MyLoginForm" autocomplete="off">
        <nav>
            <ul id="MenuList" class="SignLogMenu">
                <li id="Login" ><a onclick="SwitchSigne('Login')">Login</a></li>
                <li id="Signe Up" class="Selected"><a onclick="SwitchSigne('Signe Up')">Signe Up</a></li>
            </ul>
        </nav>
        <hr width="60%">
        <h1>Welcome</h1>
        <img src="./src/User.png" class="UserIcon">
        <input type="text" id="User name" placeholder="User name" required>
        <input type="text" id="User name" placeholder="Email@exemple.com" required>
        <input type="password" id="password" placeholder="Password" required>
        <input type="submit" name="submit" value="Signe up">
        <hr width="60%">
    </form>`;
    } else if ((child === 'Login') && (SigneUp.className === selectedClass)) {
        var TheForm = document.getElementById('SigneInUp');
        TheForm.innerHTML = ` <form class="box" id="MyLoginForm" autocomplete="off">
        <nav>
            <ul id="MenuList" class="SignLogMenu">
                <li id="Login" class="Selected"><a onclick="SwitchSigne('Login')">Login</a></li>
                <li id="Signe Up"><a onclick="SwitchSigne('Signe Up')">Signe Up</a></li>
            </ul>
        </nav>
        <hr width="60%">
        <h1>Welcome</h1>
        <img src="./src/User.png" class="UserIcon">
        <input type="text" id="User name" placeholder="User name" required>
        <input type="password" id="password" placeholder="Password" required>
        <text class="forgetPassword">Forgot <a href="#">password ?</a></text>
        <input type="submit" name="submit" value="Login">
        <hr width="60%">
    </form>`;
    }

}