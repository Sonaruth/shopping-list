
/* CODE TWO FOR SHOPPING CART PROJECT   */
const product =[{
    id: 0,
    image: 'images/images 0.jpg',
    title: 'glasses',
    price: 120,
},
{
    id: 1,
    image: 'images/images (1).jpg',
    title: 'orange',
    price: 60,
},
{
    id: 2,
    image: 'images/images (2).jpg',
    title: 'heels',
    price: 230,
},
{
    id: 3,
    image: 'images/images (3).jpg',
    title: 'Product 4',
    price: 100,
},
 ]
// Add event listeners to the Add to Cart buttons
let i = 0;
const mainContainer = document.getElementById('root');

let itemCount = 0;   // To store the number of items in the cart
const itemCountDisplay = document.getElementById('itemCount'); // Element to display the number of items in the cart

product.forEach((items) => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    const {image, title, price} = items;
    productDiv.innerHTML =  
    `<div class="box">
        <div class='image-box'>
            <img class='images' src='${image}'/>  <!-- Ensure the image source is correctly wrapped in quotes -->
        </div>
        <div class='bottom'>
            <p>${title}</p>
            <h2>$ ${price}.00</h2>
            <button onclick='addtocart(${i})'>Add to cart</button> 
        </div>
    </div>`;
    mainContainer.appendChild(productDiv);
    i++;
});

var cart = [];

let totalPrice = 0; // To store the total price
const totalDisplay = document.getElementById('total');


function addtocart(index) {
    const item = product[index];
    cart.push({...item});
    itemCount++;  // Increment the count of items
    updateItemCount();
    displaycart();
    totalPrice += item.price; // Add the item's price to the total
    updateTotal();
}
function delElement(index) {
    totalPrice -= cart[index].price; // Subtract the item's price from the total
    cart.splice(index, 1);
    itemCount--;  // Decrease the count of items
    updateItemCount();
    displaycart();
    updateTotal();
}

function displaycart() {
    let j = 0;
    const cartElement = document.getElementById('cart');
    if (cart.length == 0) {
        cartElement.innerHTML = "Your Cart is empty";
    } else {
        cartElement.innerHTML = cart.map((item) => {
            var {image, title, price} = item;
            return `
            <div class="cart-item">
                <div class='row-img'>
                    <img class='rowimg' src='${image}'>  <!-- Wrap ${image} in quotes -->
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size:15px'>$ ${price.toFixed(2)}</h2>
                <i class='fa-solid fa-trash' onclick='delElement(${j++})'></i>
            </div>
            `;
        }).join('');
    }
}

// Initial cart display
displaycart();
function updateTotal() {
    totalDisplay.innerHTML = `$${totalPrice.toFixed(2)}`; // Update the total price display
}
function updateItemCount() {
    itemCountDisplay.innerHTML = itemCount;  // Display the updated item count
}
// Initial display
updateItemCount();
// Initial total display
updateTotal();


