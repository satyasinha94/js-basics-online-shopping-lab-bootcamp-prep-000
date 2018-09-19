var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem = {};
  var price = Math.floor(Math.random() * Math.floor(100));
  Object.assign (newItem, {itemName: item}, {itemPrice: price});
  cart.push(newItem);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart = []) {
    return "Your shopping cart is empty."
  }
}

function total() {
  var totalPrice = 0
  for (var i = 0; i < cart.length + 1; i++) {
    if (isNaN(cart[i])) {
      continue;
    }
  	totalPrice += cart[i]
  }
return totalPrice
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  if (typeof cardNumber === "undefined") {
  return "Sorry, we don't have a credit card on file for you."
  }
  }
