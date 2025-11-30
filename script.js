function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart!");
}

function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let container = document.getElementById("cart-items");
  let total = 0;

  container.innerHTML = "";

  cart.forEach(item => {
    container.innerHTML += `<p>${item.name} — $${item.price}</p>`;
    total += item.price;
  });

  document.getElementById("total").innerText = "Total: $" + total.toFixed(2);
}
