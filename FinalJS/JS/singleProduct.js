let params = new URLSearchParams(window.location.search)
let pid = params.get('id') 


let container = document.querySelector('.container')

let getProduct = async ()=>{
    let product = await fetch('https://dummyjson.com/products/' + pid ).then(res=>res.json())
    console.log("Product ID:", pid);

    
    container.innerHTML = `
        <img src=${product.thumbnail} alt=${product.title} />
        <div>
            <p>${product.title}</p>
            <p>${product.description}</p>
            <p>${product.price} EGP</p>
            <p>${product.rating} /5</p>
        </div>
    ` 
}

getProduct()