import nav from "../components/nav.js";

let show = (data) => {
    console.log(data);
    document.getElementById("box2").innerHTML = "";
    data.map((ele) => {
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = ele.image;
        let title = document.createElement("h3");
        title.innerHTML = ele.title;
        let category = document.createElement("p");
        category.innerHTML = ele.category;
        category.setAttribute("class", "category")
        let price = document.createElement("p");
        price.innerHTML = `${ele.price * 10}$`;
        category.setAttribute("class", "price")
        let rate = document.createElement("p");
        rate.innerHTML = ele.rating.rate;
        category.setAttribute("class", "rate")
        let btn1 = document.createElement("button");
        btn1.innerHTML = "BUY NOW";
        btn1.setAttribute("class", "btn1")
        // let btn2=document.createElement("button");
        // btn2.innerHTML="BUY NOW";
        // divbtn=document.createElement("div")
        // divbtn.append(btn1,btn2);
        // divbtn.setAttributes("class","buttons");
        div.append(img, title, category, price, rate, btn1);
        document.getElementById("box2").append(div);
        btn1.addEventListener("click", () => {
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            let exists = false;
            console.log(cart);
            cart.map((item, index) => {
                if (item.id == ele.id) {
                    cart[index].qty += 1;
                    localStorage.setItem("cart", JSON.stringify(cart));
                    exists = true;
                }
            });
            if (!exists) {
                cart.push({ ...ele, qty: 1 });
                localStorage.setItem("cart", JSON.stringify(cart));
                alert("added to cart");
                window.location.reload();
            }

            // function addToCart(id){
            //   if(!data[id].itemInCart){
            //     cartList=[...cartList,data[id]];
            //     show();

            //   }
            // }



        });

    });
};
let products = []


document.getElementById("lth").addEventListener("click", () => {
    products.sort((a, b) => a.price - b.price)
    show(products)
})


document.getElementById("htl").addEventListener("click", () => {

    console.log("clicked");
    products.sort((a, b) => b.price - a.price)
    show(products)
})
document.getElementById("men").addEventListener("click", () => {
    let temp = products.filter((val) => val.category == "men's clothing")
    show(temp)
})
document.getElementById("wm").addEventListener("click", () => {
    let temp = products.filter((val) => val.category == "women's clothing")
    show(temp)
})
document.getElementById("ele").addEventListener("click", () => {
    let temp = products.filter((val) => val.category == "electronics")
    show(temp)
})


fetch(" http://localhost:3000/product")
    .then((response) => response.json())
    .then((data) => { products = data, show(data) });

document.getElementById("nav").innerHTML = nav();