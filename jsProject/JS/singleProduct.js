let params = new URLSearchParams(window.location.search)
let pid = params.get('id') 


let container = document.querySelector('.container')
let small = document.querySelector('.small-imgs')
let big = document.querySelector('.big-img')

let getProduct = async ()=>{
    let product = await fetch('https://dummyjson.com/products/' + pid ).then(res=>res.json())
    console.log("Product ID:", pid);

    small.innerHTML = ''
    product.images.forEach(image => {
        small.innerHTML += `
            <img src="${image}" alt="${product.title}" class="small-img" />
        `;
    });


    big.innerHTML = `
        <img src=${product.thumbnail} alt=${product.title} class="bigBig" />
        <div>
        <br>
            <h3>${product.title}</h3>
            <br>
            <br>
            <p>${product.description}</p>
            <br>
            <p>Price: ${product.price} EGP</p>
            <br>
            <p>Rating: ${product.rating} /5</p>
        </div>
    ` ;

let smallImages = document.querySelectorAll('.small-img');
smallImages.forEach(function(s){
    s.addEventListener('click', function(){
        let bigBig = document.querySelector('.bigBig')
        bigBig.src = s.src
    })
})

}

getProduct()


//     // Now, add event listeners to all small images (after they've been added to the DOM)
//     let smallImages = document.querySelectorAll('.small-img');
//     smallImages.forEach(function (s) {
//         s.addEventListener('click', function () {
//             let bigImage = big.querySelector('img');  // Select the image inside the big container
//             bigImage.src = s.src;  // Change the big image to the clicked small image's source
//         });
//     });
// };

// getProduct();
