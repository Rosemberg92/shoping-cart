let shop = document.getElementById('shop');

let shopItemsData = [{
    id: 1,
    name: "Amon Amarth",
    album: "Twilight of the Thunder God",
    price: 12,
    img: "img/1.jpg"
},{
    id: 2,
    name: "Arcturus",
    album: "Sideshow Symphonies",
    price: 15,
    img: "img/2.jpg"
},{
    id: 3,
    name: "Belphegor",
    album: "Bondage Goat Zombie",
    price: 11,
    img: "img/3.jpg"
},{
    id: 4,
    name: "Borknagar",
    album: "Borknagar",
    price: 13,
    img: "img/4.jpg"
}];

let basket = [];

let generateShop = () => {
    return (shop.innerHTML = shopItemsData.map((x) => {
        let{id,name,album,price,desc,img} = x;
        return`
        <div id=product-id-${id} class="item">
        <img width="220" src=${img} alt="">
        <div class="details">
            <h3>${name}</h3>
            <p>${album}</p>
            <div class="price-quantity">
                <h2>$ ${price}</h2>
                <div class="buttons">
                    <i onclick="decrement(${id})" class="bi bi-dash"></i>
                    <div id=${id} class="quantity">0</div>
                    <i onclick="increment(${id})" class="bi bi-plus"></i>
                </div>
            </div>
        </div>
    </div>
    `
})
.join(""));
};
generateShop();

let increment = (id) => {
    let search = basket.find((x) => x.id === id);

    if(search === undefined) {
        basket.push({
        id: id,
        item: 1,
    })
}else{
    search.item += 1;
}

    console.log(basket);
};
let decrement = (id) => {
    console.log(id);
};
let update = () => {
};