var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newItem = { [item]: Math.floor((Math.random() * 99) + 1) }
 cart.push(newItem)
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  var items = Object
  if (cart.length === 0) {
    return console.log('Your shopping cart is empty.');
  } else if (cart.length === 1) {
    var item = Object.keys(cart[0])[0]
    return console.log(`In your cart, you have ${item} at \$${cart[0][item]}.`);
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

addToCart('eggs')
viewCart()
