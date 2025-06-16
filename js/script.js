const items = [
  [1, "OBI RON'S Wheat", 39.99],
  [2, "Sunny side Grapefuit Radler", 39.99],
  [3, "Kolsch", 29.99],
  [4, "American Blonde Ale", 32.0],
  [5, "Amber Ale", 40.0],
  [6, "Rasberry Sour", 64.99],
  [7, "Mango Ale Sour", 64.99],
  [8, "Vienna Lager", 35.0],
];

const cartContent = [];
const sendButton1 = document.getElementById("button1");
const sendButton2 = document.getElementById("button2");
const sendButton3 = document.getElementById("button3");
const sendButton4 = document.getElementById("button4");
const sendButton5 = document.getElementById("button5");
const sendButton6 = document.getElementById("button6");
const sendButton7 = document.getElementById("button7");
const sendButton8 = document.getElementById("button8");

function handleSend() {
  const itemid = sendButton1.value;
  console.log("itemid: " + itemid);
  for (let i = 0; i < items.length; i++) {
    for (let j = 0; j < items[i].length; j++) {
      if (itemid === items[i][j]) {
        addCartItem(itemid);
      }
    }
  }
}


sendButton1.addEventListener("click", handleSend);

// Validate that the email address entered on the contact form is validate form
function validateEmail(email) {
  return email.included("@") && email.includes(".");
}

// When the user clicks a Add to cart button add the item to the cart array
function addCartItem(itemid) {
  let newRow = [
    { id: itemid, desc: items[itemid][1], price: items[itemid][2] },
  ];
  console.log("item: " + itemid);
  cartContent.push(newRow);
  console.log("cartContent " + cartContent);
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