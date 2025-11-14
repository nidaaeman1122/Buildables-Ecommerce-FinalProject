// Cart Data
let cart = [
  { name: "Gradient Graphic T-shirt", price: 145, qty: 1 },
  { name: "Checkered Shirt", price: 180, qty: 1 },
  { name: "Skinny Fit Jeans", price: 240, qty: 1 }
];

function updateTotals() {
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const discount = subtotal * 0.2;
  const total = subtotal - discount + 15;

  document.querySelector('.subtotal').textContent = `$${subtotal}`;
  document.querySelector('.disc').textContent = `- $${Math.round(discount)}`;
  document.querySelector('.total').textContent = `$${Math.round(total)}`;
  document.querySelector('.badge').textContent = cart.reduce((s, i) => s + i.qty, 0);
}

document.addEventListener('click', (e) => {
  const item = e.target.closest('.item');
  if (!item) return;
  const index = Array.from(document.querySelectorAll('.item')).indexOf(item);

  if (e.target.classList.contains('plus')) {
    cart[index].qty++;
  } else if (e.target.classList.contains('minus') && cart[index].qty > 1) {
    cart[index].qty--;
  } else if (e.target.closest('.remove')) {
    cart.splice(index, 1);
    item.remove();
    updateTotals();
    return;
  }

  item.querySelector('.num').textContent = cart[index].qty;
  updateTotals();
});

document.querySelector('.apply').addEventListener('click', () => {
  const code = document.querySelector('.promo input').value.trim();
  if (code === "SAVE10") {
    alert("Promo applied! Extra 10% off.");
  } else if (code) {
    alert("Invalid promo code.");
  }
});

document.querySelector('.close-banner').addEventListener('click', () => {
  document.querySelector('.top-banner').style.display = 'none';
});

updateTotals();