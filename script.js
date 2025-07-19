const foodItems = [
  {
    id: 1,
    name: "Masala Dosa",
    price: 100,
    rating: 4.5,
    image: "images/masaldosa.png",
  },
  {
    id: 2,
    name: "Paneer Tikka",
    price: 180,
    rating: 4.6,
    image: "images/paneertikka.png",
  },
  {
    id: 3,
    name: "Burger",
    price: 120,
    rating: 4.4,
    image: "images/burger.png",
  },
  {
    id: 4,
    name: "Oreo Shake",
    price: 90,
    rating: 4.7,
    image: "images/oreoshake.png",
  },
];

let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

function updateCartCount() {
  document.getElementById("cart-count").textContent = cart.length;
}

function addToCart(item) {
  if (!cart.find((i) => i.id === item.id)) {
    cart.push(item);
    sessionStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
  }
}

function renderFoodList() {
  const list = document.getElementById("food-list");
  list.innerHTML = "";

  foodItems.forEach((item) => {
    const card = document.createElement("div");
    card.className = "food-card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <div class="info">
        <h3>${item.name}</h3>
        <p>₹${item.price}</p>
        <p>⭐ ${item.rating}</p>
        <button onclick='addToCart(${JSON.stringify(item)})'>Add to Cart</button>
      </div>
    `;
    list.appendChild(card);
  });
}

renderFoodList();
updateCartCount();
