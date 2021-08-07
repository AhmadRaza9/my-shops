const unOrderList = document.getElementById('product-list');
const addToCarSec = document.getElementById('add-to-cart');
const addToCartUl = document.getElementById('add-to-cart-product-list');
const subBtn = document.getElementById('subBtn');
const Title = document.getElementById('title');
const Price = document.getElementById('price');


const addProd = function() {
    const listHtml = `
    <li id='list'>
    <h1>Title: ${Title.value}</h1>
    <h1>Price: ${Price.value}$</h1>
    <button id="delete">DELETE</button>
    <button id="add-to-cart">Add To Cart</button>
    </li>`;
    unOrderList.insertAdjacentHTML('afterbegin', listHtml);
    Title.value = ' ';
    Price.value = ' ';
}

const removeProd = function() {
    const delBtn = unOrderList.querySelectorAll('button:first-of-type');
    const addToCartBtn = unOrderList.querySelectorAll('button:last-of-type');
    
    delBtn.forEach(e =>{
        e.addEventListener('click', btn => {
            btn.target.closest('li').remove();
        });
    });
    
    addToCartBtn.forEach(e =>{
        e.addEventListener('click', btn => {
            const cartProd =  btn.target.closest('li');
            addToCartUl.insertAdjacentElement('afterbegin', cartProd);
            // addToCartUl.append(cartProd);
            const buyBtn =  cartProd.querySelectorAll('button:last-of-type');
            buyBtn.forEach(e =>{
                e.remove();
            })
        });
    });  
}

subBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    addProd();
    removeProd();
});