var cart = [];

function addToCart(item) {
  cart.push(item);
  
  // update the cart table
  var table = document.getElementsByTagName("table")[0];
  var row = table.insertRow(-1);
  var nameCell = row.insertCell(0);
  var priceCell = row.insertCell(1);
  var qtyCell = row.insertCell(2);
  var totalCell = row.insertCell(3);
  nameCell.innerHTML = item;
  priceCell.innerHTML = "$10.00"; // or the price of the item
  qtyCell.innerHTML = "1"; // or the quantity of the item
  totalCell.innerHTML = "$10.00"; // or the total price of the item
}
