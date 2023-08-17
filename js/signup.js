import nav from "../components/nav.js";

document.getElementById("nav").innerHTML=nav()


const userdata = (e) => {
    e.preventDefault();

    let user = {
        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    }
    var nameregex = /^[a-zA-Z]+$/;
    var emailregex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var passwordregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (!user.fname.match(nameregex)) {
        alert("Invalid User Name")
    }
    else if (!user.email.match(emailregex)) {
        alert("Invalid User Email")
    }
    else if (!user.password.match(passwordregex)) {
        alert("Invalid Password")
    }
    else {
        const response = fetch("http://localhost:3000/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
    }
}


document.getElementById("form").addEventListener("submit", userdata);