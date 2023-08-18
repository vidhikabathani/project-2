import nav from "../components/nav.js";
document.getElementById("nav").innerHTML=nav()

const display=(data)=>{
    data.map((product)=>{
        let img=document.createElement("img");
        img.src=product.image;

        let title=document.createElement("h2");
        title.innerHTML=product.image;

        let price=document.createElement("h4");
        price.innerHTML=product.price;
        
        let category=document.createElement("p");
        category.innerHTML=product.category;

        let rate=document.createElement("span");
        rate.innerHTML=product.rating.image;
        if(product.rating.rate>4){
            product.rating.style.color="green"
        }
        else if(product.rating.rate<=4 && product.rating.rate>=3){
            product.rating.style.color="red"
        }
        else{
            product.rating.style.color="gray"
        }

        let btn=document.createElement("button")
        btn.innerHTML="Buy Now"
    })
}

const get=()=>{
    fetch(" http://localhost:3000/product")
    .then((response) => response.json())
  .then((data) =>display(response));
}

get();