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
const loadcart = document.getElementById("loadcart");
if (loadcart) {
  loadcart.addEventListener("click", renderCartContent);
}
const element1 = document.getElementById("inventoryItem1");
if (element1) {
  element1.addEventListener("click", handleAddItem);
}
const element2 = document.getElementById("inventoryItem2");
if (element2) {
  element2.addEventListener("click", handleAddItem);
}
const element3 = document.getElementById("inventoryItem3");
if (element3) {
  element3.addEventListener("click", handleAddItem);
}
const element4 = document.getElementById("inventoryItem4");
if (element4) {
  element4.addEventListener("click", handleAddItem);
}
const element5 = document.getElementById("inventoryItem5");
if (element5) {
  element5.addEventListener("click", handleAddItem);
}
const element6 = document.getElementById("inventoryItem6");
if (element6) {
  element6.addEventListener("click", handleAddItem);
}
const element7 = document.getElementById("inventoryItem7");
if (element7) {
  element7.addEventListener("click", handleAddItem);
}
const element8 = document.getElementById("inventoryItem8");
if (element8) {
  element8.addEventListener("click", handleAddItem);
}
// document.getElementById("inventoryItem1").addEventListener("click", handleAddItem);
// document.getElementById("inventoryItem2").addEventListener("click", handleAddItem);
// document.getElementById("inventoryItem3").addEventListener("click", handleAddItem);
// document.getElementById("inventoryItem4").addEventListener("click", handleAddItem);
// document.getElementById("inventoryItem5").addEventListener("click", handleAddItem);
// document.getElementById("inventoryItem6").addEventListener("click", handleAddItem);
// document.getElementById("inventoryItem7").addEventListener("click", handleAddItem);
// document.getElementById("inventoryItem8").addEventListener("click", handleAddItem);

function handleAddItem(event) {
  const itemId = event.target.value;

  for (let i = 0; i < inventoryItems.length; i++) {
    if (itemId === inventoryItems[i][0]) {
      addCartItem(inventoryItems[i][0], inventoryItems[i][1],inventoryItems[i][2]);
      break;
    }
  }
}

// Validate that the email address entered on the contact form is validate form
function validateEmail(email) {
  return email.included("@") && email.includes(".");
}

// When the user clicks a Add to cart button add the item to the cart array
function addCartItem(itemid, description, price) {
  let newItemToCart = [
    itemid,
    description,
    price,
  ];
  cartContent.push(newItemToCart);
}

// This funcion will populate the table on the cart html page with what has been addecd to the cart from the main html page
function renderCartContent() {
    console.log("in the renderCartContent function");
    if (cartContent.length > 0) {
      for (let i=0;i <  cartContent.length;i++) {
        for (let j=0;j < cartContent[i].length; j++) {
          console.log(cartContent[i][j]);
        }
      }
    }
    
  // const tbody = document.getElementById("tableBody");
  // tbody.innerHTML = "";
  // let total = 0;

  // cartContent.forEach((product) => {
  //   total += product.price;
  //   const row = document.createElement("tr");
  //   row.innerHTML = `
  //         <td>${product.id}</td>
  //         <td>${product.desc}</td>
  //         <td class="text-end">$${product.price.toFixed(2)}</td>
  //       `;
  //   tbody.appendChild(row);
  // });

  // document.getElementById("totalCell").textContent = `$${total.toFixed(2)}`;
}