
# Homebrew Nation

I emulated a website Northern Brewer the Beer Recipe Kits page.  It allows you to select a kit to homebrew beer.

## Pages and Features

## Index Page
- This is the main page of the website and shows feature beer kits that you can select and to your cart.

## Shop All Products Page
- Shows all beer kits that are available for purchase.

## About Page
- Learn about Homebrew Nation and how we started.

## contact Page
- Users can enter their name, email address, and a message for inquiries or feedback.


## Setup Instructions
1. Place all webpage files in the appropriate directory.
2. Create folder 'css' and move the styles.css file into the folder.
3. Create folder 'images' and move all the jpg files into the folder.
4. Create folder 'js' and move the script.js file into the folder.
5. Ensure that each page is properly linked for easy navigation.
6. Verify the contact form functionality for proper message delivery.
7. Test the map integration to ensure accurate location display.

For questions or suggestions, feel free to reach out via our contact page!

Future functionality with Javascript.

function handleSend1()
- Add the selected beer kit to the cart array
- Each button below the beer image will add that kit to the cart.  
- When it successfully adds the kit to the cart it will increment the quantity on the Cart button in the navigation bar.


function validateEmail(email)
- Validate that the email address entered on the contact form is validate format.

function addCartItem(itemid)
- Add the selected beer kit to the cart.

function renderCartContent()
- This funcion will populate the table on the cart html page with what has been addecd to the cart from the main html page and the Shop All Products html page.

function loadCartPage()
- Display the cart html page.