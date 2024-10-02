// navigation slider effect (not done yet TODO)

//hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".navbar li a");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// image gallery

// Store the images in an array
var images = [
  "./images/image-product-1.jpg",
  "./images/image-product-2.jpg",
  "./images/image-product-3.jpg",
  "./images/image-product-4.jpg",
];
var currentIndex = 0;
var data = [];
var total = 0;

// function to open the modal and display the clicked image
function openModal(index) {
  currentIndex = index;
  document.getElementById("modalImage").src = images[currentIndex];
  document.getElementById("myModal").style.display = "flex";
}

// function to close the modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// function to navigate through images
function changeImage(step) {
  currentIndex += step;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  document.getElementById("modalImage").src = images[currentIndex];
  document.getElementById("mbl-modalImage").src = images[currentIndex];
}

// changing counter value
let counter = 0;
let cart_counter = 0;

const ctrValue = document.getElementById("count");
const incBtn = document.getElementById("add-qty");
const decBtn = document.getElementById("sub-qty");

incBtn.addEventListener("click", () => {
  counter++;
  ctrValue.innerHTML = counter;
});

decBtn.addEventListener("click", () => {
  counter--;
  ctrValue.innerHTML = counter;
});

// add to cart and qty updation

const cartValue = document.getElementById("add-to-cart");
const display = document.getElementById("displayList");
var added_to_cart = false;

cartValue.addEventListener("click", () => {
  cart_counter = counter;
  added_to_cart = true;
  ctrValue.innerHTML = 0;
  counter = 0;
  document.getElementById("cart-item-count").innerHTML = `<b>${cart_counter}</b>`;
  openCartBox();
});

// display cartbox

function openCartBox() {
  const cartdisplay = document.getElementById("cartdisp");
  const cartContent = document.getElementById("cart-content");

  if (cart_counter == 0 || (cart_counter >= 0 && added_to_cart == false)) {
    cartContent.innerHTML = `<h6 class = "empty-cart">Your cart is empty.</h6>`;
  } else {
    cartContent.innerHTML = `<div class="cart-widget">
        <div class="cart-img">
          <img src="./images/image-product-1-thumbnail.jpg" alt="product" />
        </div>
        <div class="cart-details">
          <h6>Fall Limited Edition Sneakers</h6>
          <h6>$125.00 x ${cart_counter} <span class = "bold">$${
      125 * cart_counter
    }.00 </span></h6>
        </div>
        <div class = "align-dlt-btn">
          <button class="cart-dlt" id="cart-dlt" onclick = "deleteAll()">
            <img src="./images/icon-delete.svg" alt="delete" />
          </button>
        </div>
      </div>
      <button class="checkout-btn" id="checkout-btn">
        <h6>Checkout</h6>
      </button>`;
  }
  cartdisplay.style.display = "flex";
}

// to close the cartbox

function closeCartBox() {
  document.getElementById("cartdisp").style.display = "none";
}

// to delete all items in cart through delete button

function deleteAll() {
  cart_counter = 0;
  document.getElementById("cartdisp").style.display = "none";
  document.getElementById("cart-item-count").innerHTML = `<b>0</b>`;

}

