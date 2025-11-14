// .........navbar...promotionalLabel...........
document.addEventListener('DOMContentLoaded', function() {
        const closeButton = document.getElementById('close-banner-btn');
        const promoBanner = document.getElementById('promo-banner');

        if (closeButton && promoBanner) {
            closeButton.addEventListener('click', function() {
                promoBanner.classList.add('hidden');
            });
        }
    });

    // ........navbar toggle .........

    document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('menu-toggle-btn');
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = toggleButton ? toggleButton.querySelector('i') : null;

    if (toggleButton && navLinks) {
        toggleButton.addEventListener('click', () => {
            navLinks.classList.toggle('open');

            const isExpanded = navLinks.classList.contains('open');
            toggleButton.setAttribute('aria-expanded', isExpanded);

            if (menuIcon) {
                if (isExpanded) {
                    menuIcon.classList.remove('fa-bars');
                    menuIcon.classList.add('fa-times'); 
                } else {
                    menuIcon.classList.remove('fa-times');
                    menuIcon.classList.add('fa-bars');
                }
            }
        });
    }
});

    // .......filter section toggling.......
   document.addEventListener('DOMContentLoaded', function() {
    
    const openFilterBtn = document.getElementById('open-filter-btn');
    const closeFilterBtn = document.getElementById('close-filter-btn'); 
    
    const productGrid = document.querySelector('.product__card'); 
    const productHeader = document.querySelector('.product__grid-header'); 
    
    const body = document.body;
    const ACTIVE_CLASS = 'filter-modal-active';

    function closeFilterModal(e) {
        if (e) e.preventDefault();
        
        body.classList.remove(ACTIVE_CLASS);
        
        body.style.overflow = 'auto';
    }

    if (openFilterBtn) {
        openFilterBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            body.classList.add(ACTIVE_CLASS);
            body.style.overflow = 'hidden';
        });
    }
    
    if (closeFilterBtn) {
        closeFilterBtn.addEventListener('click', closeFilterModal);
    }
    
    const applyFilterBtn = document.querySelector('.apply__filter-btn');
    if (applyFilterBtn) {
        applyFilterBtn.addEventListener('click', closeFilterModal);
    }


    const closeBannerBtn = document.getElementById('close-banner-btn');
    const promoBanner = document.getElementById('promo-banner');
    if (closeBannerBtn && promoBanner) {
        closeBannerBtn.addEventListener('click', () => {
            promoBanner.classList.add('hidden');
        });
    }
});


// .....Category.........
// ... .Color/price/size/style toggle.....

     function setupToggle(headerId, contentId) {
        const toggleButton = document.getElementById(headerId);
        const contentPanel = document.getElementById(contentId);

        toggleButton.addEventListener('click', function() {
            contentPanel.classList.toggle('collapsed');
            toggleButton.classList.toggle('open');
        });
    }
     setupToggle('color-header-toggle', 'color-options-panel');
    setupToggle('price-header-toggle', 'price-options-panel');
    setupToggle('size-header-toggle', 'size-options-panel');
    setupToggle('style-header-toggle', 'style-options-panel');
    
// .......color_selection..........
document.addEventListener('DOMContentLoaded', () => {
    const colorButtons = document.querySelectorAll('.color__name');

    colorButtons.forEach(Button => {
        Button.addEventListener('click', () => {
         colorButtons.forEach(othercolorButton => {
                othercolorButton.classList.remove('selected');
            });
            Button.classList.add('selected'); 
        });
    });
});

// .........size_selection..........
document.addEventListener('DOMContentLoaded', () => {
    const sizeButtons = document.querySelectorAll('.size__options .size__btn');

    sizeButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); 
            
            sizeButtons.forEach(btn => {
                btn.classList.remove('selected');
            });

            event.currentTarget.classList.add('selected');
        });
    });
});

// ......for pageNumbers.........
document.addEventListener('DOMContentLoaded', () => {
    const paginationNumbersInner = document.querySelector('.pagination__numbers-inner');
    const numberLinks = paginationNumbersInner.querySelectorAll('.pagination__link:not(.dots)');
    const prevLink = document.querySelector('.prev-link');
    const nextLink = document.querySelector('.next-link');

    const updateActiveLink = (newActiveElement) => {
        if (!newActiveElement || newActiveElement.classList.contains('dots')) {
            return;
        }

        const currentActive = paginationNumbersInner.querySelector('.pagination__link.active');
        if (currentActive) {
            currentActive.classList.remove('active');
        }
        
        newActiveElement.classList.add('active');
    };

    numberLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); 
            updateActiveLink(link);
        });
    });

    nextLink.addEventListener('click', (e) => {
        e.preventDefault();
        const currentActive = paginationNumbersInner.querySelector('.pagination__link.active');
        
        if (currentActive) {
            let nextSibling = currentActive.nextElementSibling;
            
            while (nextSibling && !nextSibling.classList.contains('pagination__link')) {
                nextSibling = nextSibling.nextElementSibling;
            }

            if (nextSibling) {
                updateActiveLink(nextSibling);
            }
        }
    });

    prevLink.addEventListener('click', (e) => {
        e.preventDefault();
        const currentActive = paginationNumbersInner.querySelector('.pagination__link.active');
        
        if (currentActive) {
            let prevSibling = currentActive.previousElementSibling;

            while (prevSibling && !prevSibling.classList.contains('pagination__link')) {
                prevSibling = prevSibling.previousElementSibling;
            }

            if (prevSibling) {
                updateActiveLink(prevSibling);
            }
        }
    });
});