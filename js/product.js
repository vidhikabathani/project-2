import nav from "../components/nav.js";
document.getElementById("nav").innerHTML = nav()

const display = (data) => {
    data.map((product) => {
        let img = document.createElement("img");
        img.src = product.image;

        let title = document.createElement("h2");
        title.innerHTML = product.title;

        let price = document.createElement("h4");
        price.innerHTML = product.price;

        let category = document.createElement("p");
        category.innerHTML = product.category;

        let rate = document.createElement("p");
        rate.innerHTML = product.rating.rate;

        let btn = document.createElement("button")
        btn.innerHTML = "Buy Now"
        btn.setAttribute("class", "btn")


        let div = document.createElement("div")
        div.append(img, title, price, category, rate, btn)

        document.getElementById("box2").append(div)


        btn.addEventListener("click", () => {
            console.log(product.id)
            if (localStorage.getItem("Login")) {
                fetch("http://localhost:3000/cart", {
                    method: "POST",
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(product)
                })
            }
            else {
                alert("please first login then you can add to cart")
                setTimeout(
                    window.location.href = "../pages/login.html"
                    , 1000)
            }
        })
    })
}

const get = () => {
    fetch(" http://localhost:3000/product")
        .then((response) => response.json())
        .then((response) => display(response));
}

get();
// const cart = fetch("http://localhost:3000/cart", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify(cart),
// });
