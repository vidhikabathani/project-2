import nav from "../components/nav.js";

document.getElementById("nav").innerHTML=nav()


const login=(e)=>{
    e.preventDefault();

    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;

    fetch(`http://localhost:3000/user?email=${email}`)
    .then((res) => res.json())
    .then((data) =>{
        if(data.length > 0){
            if(data[0].password===password){
                localStorage.setItem("Login",true)
                alert("Login Successfully.!!")
                window.location.href="../pages/product.html"
            }
            else{
                alert("Login Invalid!")
            }
        }
        else{
            alert("User Not Found");
        }
    })
}



document.getElementById("form").addEventListener("submit",login);