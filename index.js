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
  } else if (cart.length === 2) {
    var item1 = Object.keys(cart[0])[0]
    var item2 = Object.keys(cart[1])[0]
    return console.log(`In your cart, you have ${item1} at \$${cart[0][item1]} and ${item2} at \$${cart[1][item2]}.`);
  } else {
    var items = []
    var itemString = 'In your cart, you have '
    var i = 0
    var j = 0
    while (i < cart.length) {
      items.push(Object.keys(cart[i])[0])
      i++
    }
    while (j < items.length - 1 || j === 0) {
      itemString += `${items[i]} at \$${cart[i][items[i]]}, `
      j++
    }
    var lastItem = Object.keys(cart[cart.length - 1])[0]
    itemString += `and ${lastItem} at \$${cart[cart.length - 1][lastItem]}.`
    return itemString
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

// addToCart('eggs')
// viewCart()
