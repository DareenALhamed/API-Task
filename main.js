async function getProducts() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();

  const products = data.products;
  const result = products
    .map(function (ele) {
      return `

<img src = ${ele.thumbnail}/>
<h2>${ele.title}</h2>
<p> ${"$"} ${ele.price} </p> 
<h4> ${"-"}${ele.discountPercentage} ${"%"}</h4>


`;
    })
    .join("");

  document.querySelector(".products").innerHTML = result;
}

getProducts();
