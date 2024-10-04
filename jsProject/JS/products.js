let productsContainer = document.querySelector('.productsContainer')

let getProducts = async ()=>{
    let products = await fetch('https://dummyjson.com/products').then(resp=>resp.json())
    products.products.map((p)=>{
        productsContainer.innerHTML += `<div class="card">
        <img src=${p.thumbnail} alt=${p.title}/>
        <p>${p.title}</p>
        <p>${p.price} EGP</p>
        <a href="./singleProduct.html?id=${p.id}">Show More</a>
        </div>`
    })
}

getProducts()