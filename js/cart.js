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

    let div = document.createElement("div")
    div.append(img, title, price, category)

    document.getElementById("cart-p").append(div)
  })
  let btn = document.createElement("button");
  btn.innerHTML = "CHECK OUT";
  
  document.getElementById("btn").append(btn)
}

let get = async () => {
  let res = await fetch("http://localhost:3000/cart");
  let data = await res.json();
  display(data);
  console.log(data)
};

get();