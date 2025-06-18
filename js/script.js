const inventoryItems = [
  ["1", "OBI RON'S Wheat", 39.99],
  ["2", "Sunny side Grapefuit Radler", 39.99],
  ["3", "Kolsch", 29.99],
  ["4", "American Blonde Ale", 32.0],
  ["5", "Amber Ale", 40.0],
  ["6", "Rasberry Sour", 64.99],
  ["7", "Mango Ale Sour", 64.99],
  ["8", "Vienna Lager", 35.0],
];

const cartContent = [];
document.getElementById('item1').addEventListener('click', handleAddItem);
document.getElementById('item2').addEventListener('click', handleAddItem);
document.getElementById('item3').addEventListener('click', handleAddItem);
document.getElementById('item4').addEventListener('click', handleAddItem);
// document.getElementById('item5').addEventListener('click', handleAddItem);
// document.getElementById('item6').addEventListener('click', handleAddItem);
// document.getElementById('item7').addEventListener('click', handleAddItem);
// document.getElementById('item8').addEventListener('click', handleAddItem);



function handleAddItem(event) {
  const itemId = event.target.value;

  for (let i = 0; i < inventoryItems.length; i++) {
    if (itemId === inventoryItems[i][0]) {
        addCartItem(itemId);
        break;
    }
  }
}

// Validate that the email address entered on the contact form is validate form
function validateEmail(email) {
  return email.included("@") && email.includes(".");
}

// When the user clicks a Add to cart button add the item to the cart array
function addCartItem(itemid) {
  let newItemToCart = [itemid, inventoryItems[itemid][1], inventoryItems[itemid][2]];
  cartContent.push(newItemToCart);
}

// This funcion will populate the table on the cart html page with what has been addecd to the cart from the main html page
function renderCartContent() {
  const tbody = document.getElementById("tableBody");
  tbody.innerHTML = "";
  let total = 0;

  cartContent.forEach((product) => {
    total += product.price;
    const row = document.createElement("tr");
    row.innerHTML = `
          <td>${product.id}</td>
          <td>${product.desc}</td>
          <td class="text-end">$${product.price.toFixed(2)}</td>
        `;
    tbody.appendChild(row);
  });

  document.getElementById("totalCell").textContent = `$${total.toFixed(2)}`;
}

function loadCartPage() {
  window.location.assign("cart.html");
}