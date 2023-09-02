const products = {
  category1: [
    { name: "THEMET 505", price: 25 },
    { name: "TIMET 10 G", price: 50 },
    { name: "BRUFEN", price: 75 },
    { name: "SURAKSHA", price: 100 },
    { name: "FEURADON", price: 125 },
    { name: "SUPER CYPER", price: 150 },
    { name: "SUPER FIGHTER", price: 175 },
    { name: "DHANUSHBAN", price: 200 },
    { name: "DHANUSHBAN 50", price: 225 },
    { name: "CORAMIN GR", price: 250 },
    { name: "CORAMIN", price: 275 },
    { name: "BHARAT MIDA", price: 300 },
    { name: "BEEDAN", price: 325 },
    { name: "BEEGENT", price: 350 },
    { name: "BHARAT ROGER", price: 375 },
    { name: "NAGRAJ", price: 400 },
    { name: "NINJA", price: 425 },
    { name: "NINJA PLUS", price: 450 },
    { name: "ACETA 20", price: 500 },
    { name: "CHLOR Q", price: 525 },
    { name: "FOLIDON SUPER", price: 550 },
    { name: "MIDA 70", price: 575 },
    { name: "AKTARA 25", price: 600 },
    { name: "RAKTARA 70", price: 625 },
    { name: "BEEDAN SP", price: 650 }
  ],
  category2: [
    { name: "C-SULF/SUPER SULF", price: 675 },
    { name: "BHARAT SULF", price: 700 },
    { name: "SULFIX", price: 725 },
    { name: "BHARAT M 45", price: 750 },
    { name: "HEXAZOLE", price: 775 },
    { name: "HEXAMYCIN", price: 800 },
    { name: "COC 50", price: 825 },
    { name: "HEXAZOLE PLUS", price: 850 },
    { name: "CURE 75", price: 875 },
    { name: "CURE 50", price: 900 }
  ],
  category3: [
    { name: "FINISH / FIRE", price: 925 },
    { name: "FIRE", price: 950 },
    { name: "TOTAL FINISH", price: 975 },
    { name: "PENDA SUPER", price: 1000 },
    { name: "CUT OFF", price: 25 },
    { name: "BHARATZINE", price: 50 },
    { name: "MAHAKAAL -80", price: 75 },
    { name: "ETHYL 38", price: 100 },
    { name: "ETHYL 38", price: 125 }
  ],

  category4: [
    { name: "KALA SONA LIQUID", price: 150 },
    { name: "KALA SONA TEN STAR GR", price: 175 },
    { name: "KALA MOTI SEVEN STAR GR", price: 200 },
    { name: "HERBAL GOLD GR", price: 225 },
    { name: "MAGIC FLOWER GR", price: 250 },
    { name: "MAGIC FLOWER LIQUID", price: 275 },
    { name: "BLACK BOSS", price: 300 },
    { name: "BHARAT N FLOWER GR", price: 325 },
    { name: "BHARAT CULAN", price: 350 },,
    { name: "GROWZIB8", price: 375 }
  ]
}

let cartItems = [];
let totalAmount = 0;

function loadProducts() {
  const categorySelect = document.getElementById("category");
  const productSelect = document.getElementById("product");

  productSelect.innerHTML = '<option selected disabled>No Category Selected</option>';

  const selectedCategory = categorySelect.value;

  if (selectedCategory !== "No Category Selected") {
    const selectedProducts = products[selectedCategory];
    selectedProducts.forEach((product) => {
      const option = document.createElement("option");
      option.value = product.name;
      option.text = `${product.name} - ${product.price} INR`;
      productSelect.appendChild(option);
    });
    productSelect.disabled = false;
  } else {
    productSelect.disabled = true;
  }
}

function updatePrice() {
  const productSelect = document.getElementById("product");
  const selectedProduct = productSelect.value;

  const selectedCategory = document.getElementById("category").value;

  const selectedProducts = products[selectedCategory];
  const selectedProductObj = selectedProducts.find(product => product.name === selectedProduct);

  document.getElementById("price").textContent = selectedProductObj.price + " INR";
}

function addToCart() {
  const productSelect = document.getElementById("product");
  const quantityInput = document.getElementById("quantity");
  const cartItemsList = document.getElementById("cartItems");
  const totalAmountElement = document.getElementById("totalAmount1");

  const selectedProduct = productSelect.value;
  const quantity = parseInt(quantityInput.value);

  const selectedCategory = document.getElementById("category").value;

  const selectedProducts = products[selectedCategory];
  const selectedProductObj = selectedProducts.find(product => product.name === selectedProduct);

  const totalPrice = selectedProductObj.price * quantity;

  const cartItem = {
    product: selectedProduct,
    quantity: quantity,
    totalPrice: totalPrice
  };

  cartItems.push(cartItem);

  const listItem = document.createElement("li");
  listItem.className = "list-group-item";
  listItem.textContent = `${selectedProduct} - Quantity: ${quantity} - Price: ${totalPrice} INR`;
  listItem.setAttribute("data-product", selectedProduct);

  const removeButton = document.createElement("button");
  removeButton.className = "btn btn-danger btn-sm float-end";
  removeButton.textContent = "Remove";
  removeButton.type = "button";
  removeButton.onclick = function () {
    removeCartItem(cartItem);
  };

  listItem.appendChild(removeButton);
  cartItemsList.appendChild(listItem);

  totalAmount += totalPrice;
  totalAmountElement.textContent = totalAmount;

  quantityInput.value = 1;
  productSelect.value = "No Category Selected";
  document.getElementById("price").textContent = "0 INR";
}

function removeCartItem(cartItem) {
  const index = cartItems.findIndex(item => item.product === cartItem.product);

  if (index > -1) {
    const removedItem = cartItems.splice(index, 1)[0];

    const cartItemsList = document.getElementById("cartItems");
    const listItem = cartItemsList.querySelector(`li[data-product="${removedItem.product}"]`);

    totalAmount -= removedItem.totalPrice;
    document.getElementById("totalAmount1").textContent = totalAmount;

    cartItemsList.removeChild(listItem);
  }
}

// Event listeners
document.getElementById("category").addEventListener("change", loadProducts);
document.getElementById("product").addEventListener("change", updatePrice);
document.getElementById("addToCart").addEventListener("click", addToCart);
