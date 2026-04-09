// Keranjang Belanja Logic
let cartCount = 0;
const cartCounter = document.getElementById('cart-count');
const addButtons = document.querySelectorAll('.add-btn');

addButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        cartCount++;
        cartCounter.innerText = cartCount;
        
        // Animasi feedback sederhana
        btn.innerText = "Ditambahkan!";
        btn.style.borderColor = "#2ea043";
        btn.style.color = "#2ea043";
        
        setTimeout(() => {
            btn.innerText = "Tambah Ke Keranjang";
            btn.style.borderColor = "#00d2ff";
            btn.style.color = "#00d2ff";
        }, 1500);
    });
});

// Filter Produk Logic
const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Hapus class active dari tombol lain
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const category = button.getAttribute('data-category');

        productCards.forEach(card => {
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.5s';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Newsletter Submit
const newsForm = document.querySelector('.subscribe-form');
newsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsForm.querySelector('input').value;
    if(email) {
        alert(`Terima kasih! Newsletter akan dikirim ke: ${email}`);
        newsForm.reset();
    }
});