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
    return console.log('Your shopping cart is empty.')
  } else if (cart.length === 1) {
    return console.log(`In your cart, you have ${Object.keys(cart[0])[0]} at \$${cart[0][0]}`)
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
