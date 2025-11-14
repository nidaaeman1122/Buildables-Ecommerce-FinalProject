function closeBanner() {
        document.getElementById('topBanner').style.display = 'none';
    }

function toggleMenu() {
    if (window.innerWidth <= 768) {
        document.getElementById('navLinks').classList.toggle('open');
    }
}

document.querySelectorAll('.navLinks a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            document.getElementById('navLinks').classList.remove('open');
        }
    });
});

function selectColor(clickedBtn) {
    document.querySelectorAll('.color-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    clickedBtn.classList.add('active');
}

function selectSize(btn) {
    document.querySelectorAll('.size-btn').forEach(b => {
        b.classList.remove('active');
    });
    btn.classList.add('active');
}

function totalClick(click) {
    const totalClicks = document.getElementById('totalClicks');
    const sumvalue = parseInt(totalClicks.innerText) + click;
    console.log(sumvalue + click);
    totalClicks.innerText = sumvalue;
    if(sumvalue < 0) {
        totalClicks.innerText = 0;
    }
}

function addToCart() {
    const quantity = document.querySelector('.qty-input').value;
    alert(`Added ${quantity} item(s) to your cart!`);
}
