const products = [
    {
        id: 1,
        sponsored: true,
        name: "samsung Edge 60 Pro (Pantone Shadow, 256 GB)",
        reviewCount: "(42370)",
        assured: true,
        discount: "18%",
        offered: "₹28,499 with Bank offer",
        originalPrice: 36999,
        discountedPrice: 29999,
        topDiscount: true,
        freeDelivery: true,
        warranty: "1 year warranty by MOTOROLA",
        specs: [
            "8 GB RAM | 256 GB Storage",
            "17.02 cm (6.7 inch) Display",
            "6000 mAh",
            "50MP + 50MP + 10MP",
            "50MP Front Camera"
        ],
        image: "https://rukminid2.flixcart.com/image/200/250/xif0q/mobile/1/4/h/-original-imahcrpwaxrsfjzd.jpeg?q=90&crop=false"
    },
    {
        id: 2,
        sponsored: false,
        name: "Tecno Pova Curve 5G (Geek Black, 128 GB)",
        reviewCount: "",
        assured: false,
        discount: "15%",
        offered: "₹15,199 with Bank offer",
        originalPrice: 18999,
        discountedPrice: 15999,
        topDiscount: false,
        freeDelivery: true,
        warranty: "1 year warranty by Tecno",
        specs: [
            "8 GB RAM | 128 GB Storage",
            "17.22 cm (6.78 inch) Display",
            "5500 mAh",
            "64MP Rear Camera",
            "13MP Front Camera"
        ],
        image: "https://rukminid2.flixcart.com/image/200/250/xif0q/mobile/7/j/m/-original-imahctmxtjhzqzyg.jpeg?q=90&crop=false"
    },
    {
        id: 3,
        sponsored: false,
        name: "Motorola G85 5G (Urban Grey, 128 GB)",
        reviewCount: "(42,558)",
        assured: true,
        discount: "23%",
        offered: "₹15,199 with Bank offer",
        originalPrice: 20999,
        discountedPrice: 15999,
        topDiscount: true,
        freeDelivery: true,
        warranty: "1 year warranty by MOTOROLA",
        specs: [
            "8 GB RAM | 128 GB Storage",
            "16.94 cm (6.67 inch) Display",
            "5000 mAh",
            "50MP + 8MP",
            "32MP Front Camera"
        ],
        image: "https://rukminid2.flixcart.com/image/200/250/xif0q/mobile/z/q/f/-original-imah2fjd75hkcynr.jpeg?q=90&crop=false"
    },
    {
        id: 4,
        sponsored: false,
        name: "MOTOROLA Edge 60 Fusion 5G (Pantone Shadow, 256 GB)",
        reviewCount: "(4,773)",
        assured: true,
        discount: "18%",
        offered: "₹28,499 with Bank offer",
        originalPrice: 36999,
        discountedPrice: 29999,
        topDiscount: true,
        freeDelivery: true,
        warranty: "1 year warranty by MOTOROLA",
        specs: [
            "8 GB RAM | 256 GB Storage",
            "17.02 cm (6.7 inch) Display",
            "6000 mAh",
            "50MP + 50MP + 10MP",
            "50MP Front Camera"
        ],
        image: "https://rukminid2.flixcart.com/image/96/120/xif0q/mobile/j/x/j/-original-imahbfmdgpjvgecg.jpeg?q=80&crop=false"
    },
    {
        id: 5,
        sponsored: true,
        name: "MOTOROLA Edge 60 Pro (Pantone Shadow, 256 GB)",
        reviewCount: "(4,773)",
        assured: true,
        discount: "18%",
        offered: "₹28,499 with Bank offer",
        originalPrice: 36999,
        discountedPrice: 29999,
        topDiscount: true,
        freeDelivery: true,
        warranty: "1 year warranty by MOTOROLA",
        specs: [
            "8 GB RAM | 256 GB Storage",
            "17.02 cm (6.7 inch) Display",
            "6000 mAh",
            "50MP + 50MP + 10MP",
            "50MP Front Camera"
        ],
        image: "https://rukminid2.flixcart.com/image/200/250/xif0q/mobile/1/4/h/-original-imahcrpwaxrsfjzd.jpeg?q=90&crop=false"
    },
    {
        id: 6,
        sponsored: true,
        name: "MOTOROLA Edge 60 Pro (Pantone Shadow, 256 GB)",
        reviewCount: "(4,773)",
        assured: true,
        discount: "18%",
        offered: "₹28,499 with Bank offer",
        originalPrice: 36999,
        discountedPrice: 29999,
        topDiscount: true,
        freeDelivery: true,
        warranty: "1 year warranty by MOTOROLA",
        specs: [
            "8 GB RAM | 256 GB Storage",
            "17.02 cm (6.7 inch) Display",
            "6000 mAh",
            "50MP + 50MP + 10MP",
            "50MP Front Camera"
        ],
        image: "https://rukminid2.flixcart.com/image/200/250/xif0q/mobile/1/4/h/-original-imahcrpwaxrsfjzd.jpeg?q=90&crop=false"
    },
    {
        id: 7,
        sponsored: true,
        name: "MOTOROLA Edge 60 Pro (Pantone Shadow, 256 GB)",
        reviewCount: "(4,773)",
        assured: true,
        discount: "18%",
        offered: "₹28,499 with Bank offer",
        originalPrice: 36999,
        discountedPrice: 29999,
        topDiscount: true,
        freeDelivery: true,
        warranty: "1 year warranty by MOTOROLA",
        specs: [
            "8 GB RAM | 256 GB Storage",
            "17.02 cm (6.7 inch) Display",
            "6000 mAh",
            "50MP + 50MP + 10MP",
            "50MP Front Camera"
        ],
        image: "https://rukminid2.flixcart.com/image/200/250/xif0q/mobile/1/4/h/-original-imahcrpwaxrsfjzd.jpeg?q=90&crop=false"
    },
    {
        id: 8,
        sponsored: true,
        name: "MOTOROLA Edge 60 Pro (Pantone Shadow, 256 GB)",
        reviewCount: "(4,773)",
        assured: true,
        discount: "18%",
        offered: "₹28,499 with Bank offer",
        originalPrice: 36999,
        discountedPrice: 29999,
        topDiscount: true,
        freeDelivery: true,
        warranty: "1 year warranty by MOTOROLA",
        specs: [
            "8 GB RAM | 256 GB Storage",
            "17.02 cm (6.7 inch) Display",
            "6000 mAh",
            "50MP + 50MP + 10MP",
            "50MP Front Camera"
        ],
        image: "https://rukminid2.flixcart.com/image/200/250/xif0q/mobile/1/4/h/-original-imahcrpwaxrsfjzd.jpeg?q=90&crop=false"
    },
    {
        id: 9,
        sponsored: true,
        name: "MOTOROLA Edge 60 Pro (Pantone Shadow, 256 GB)",
        reviewCount: "(4,773)",
        assured: true,
        discount: "2%",
        offered: "₹28,499 with Bank offer",
        originalPrice: 40999,
        discountedPrice: 39999,
        topDiscount: true,
        freeDelivery: true,
        warranty: "1 year warranty by MOTOROLA",
        specs: [
            "8 GB RAM | 256 GB Storage",
            "17.02 cm (6.7 inch) Display",
            "6000 mAh",
            "50MP + 50MP + 10MP",
            "50MP Front Camera"
        ],
        image: "https://rukminid2.flixcart.com/image/200/250/xif0q/mobile/1/4/h/-original-imahcrpwaxrsfjzd.jpeg?q=90&crop=false"
    }
];

function generateProductHtml(product) {
    return `
        <div class="common mobile">
            <div class="common main">
                <div class="mobile-img">
                    <img src="${product.image}" alt="${product.name}" class="image">
                </div>
                <div class="name-div common">
                    <div style="margin-left:1px">
                        <div class="marg"><span class="span">${product.name}</span></div>
                    </div>
                    <div class="stars common">
                        <div class="common rate">
                            <div style="width: 82px;display:flex;gap:2px;">
                                <img src="/assets/full.png" alt="full-star" width="14" height="16">
                                <img src="/assets/full.png" alt="full-star" width="14" height="16">
                                <img src="/assets/full.png" alt="full-star" width="14" height="16">
                                <img src="/assets/full.png" alt="full-star" width="14" height="16">
                                <img src="/assets/half.png" alt="half-star" width="14" height="16">
                            </div>
                            <div><span class="users">${product.reviewCount}</span></div>
                        </div>
                        ${product.assured ? `<div class="assure">
                            <img src="https://rukminid2.flixcart.com/www/150/40/promos/25/06/2024/71af54bd-9160-41ff-81cc-c55e534dedeb.png?q=90" alt="" class="" aria-busy="false" data-highres-loaded="false" loading="lazy" srcset="https://rukminid2.flixcart.com/www/60/16/promos/25/06/2024/71af54bd-9160-41ff-81cc-c55e534dedeb.png?q=80 1x, https://rukminid2.flixcart.com/www/120/32/promos/25/06/2024/71af54bd-9160-41ff-81cc-c55e534dedeb.png?q=60 2x, " fetchpriority="auto" style="filter: none; opacity: 1; transition: filter 0.5s ease-in-out, opacity 0.5s ease-in-out; width: 100%; height: 100%; margin: auto; object-fit: contain;">
                        </div>` : ''}
                    </div>
                    <div class="offer common">
                        <div class="offer-flex">
                            <div class="marginR">
                                <svg width="17" height="17" viewBox="0 0 12 12" fill="none"><path d="M6.73461 1V8.46236L9.5535 5.63352L10.5876 6.65767L5.99384 11.2415L1.41003 6.65767L2.42424 5.63352L5.25307 8.46236V1H6.73461Z" fill="#008C00"></path></svg>
                                <span class="eight">${product.discount}</span>
                            </div>
                            <div class="marginR"><span class="eight money">${product.originalPrice}</span></div>
                            <div><span class="eight six">${product.discountedPrice}</span></div>
                        </div>
                    </div>
                    <div class="wrap">
                        <div class="wow"><img class="wow-img" src="https://rukminid2.flixcart.com/www/76/32/promos/30/08/2023/59dc7885-72bf-4135-9099-025f074b0eb1.png?q=90" alt=""></div>
                        <span class="offered" style="font-family: Roboto, Helvetica, Arial, sans-serif;">${product.offered}</span>
                    </div>
                    ${product.topDiscount ? `<div class="wrap discount">
                        <span class="violet">Top Discount of the Sale</span>
                    </div>` : ''}
                    ${product.freeDelivery ? `<div class="wrap"><span class="free">Free Delivery</span></div>` : ''}
                    <div class="wrap"><span class="warranty">${product.warranty}</span></div>
                </div>
            </div>
            <div class="wishlist common"><svg width="24" height="24" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"></path><path d="M128 216S28 160 28 92a52 52 0 0 1 100-20h0a52 52 0 0 1 100 20c0 68-100 124-100 124Z" fill="#fff" stroke="#B8BBBF" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"></path></svg></div>
            <div class="detail common">
                ${product.specs.map(spec => `
                    <div class="common specs">
                        <div class="words">${spec}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderProducts(sortedProducts = products) {
    const container = document.getElementById('products-container');
    const containerTwo = document.getElementById('container-two');
    
    if (container) {
        container.innerHTML = '';
        sortedProducts.slice(0, 4).forEach(product => {
            container.innerHTML += generateProductHtml(product);
        });
        container.innerHTML += `<div class="scroll-div"></div>`;
    }

    if (containerTwo) {
        containerTwo.innerHTML = '';
        sortedProducts.slice(4).forEach(product => {
            containerTwo.innerHTML += generateProductHtml(product);
        });
    }
}

const sortButton = document.querySelector('.sort');
const sortModal = document.querySelector('.sort-modal');
const sortOptions = document.querySelectorAll('.sort-options li');
let currentSort = 'Popularity';

function toggleSortModal() {
    if (sortModal.classList.contains('active')) {
        sortModal.classList.remove('active');
        setTimeout(() => {
            sortModal.classList.add('hidden');
        }, 300);
    } else {
        sortModal.classList.remove('hidden');
        requestAnimationFrame(() => {
            sortModal.classList.add('active');
        });
    }
}

function updateSelectedOption(selectedOption) {
    sortOptions.forEach(option => {
        const checkbox = option.querySelector('.checkbox-input');
        const selectImg= option.querySelector('.select');
        const selectedImg= option.querySelector('.selected');
        if (option.textContent.trim() === selectedOption) {
            checkbox.checked = true;
            selectImg.style.display='none';
            selectedImg.style.display='inline';
        } else {
            checkbox.checked = false;
            selectImg.style.display='inline';
            selectedImg.style.display='none';
        }
    });
}


function sortProducts(sortBy) {
    let sortedProducts = [...products];
    
    switch (sortBy) {
        case 'Popularity':
            sortedProducts.sort((a, b) => {
                const aReviews = parseInt(a.reviewCount.replace(/[(),]/g, '')) || 0;
                const bReviews = parseInt(b.reviewCount.replace(/[(),]/g, '')) || 0;
                return bReviews - aReviews;
            });
            break;
        case 'Price - Low to High':
            sortedProducts.sort((a, b) => a.discountedPrice - b.discountedPrice);
            break;
        case 'Price - High to Low':
            sortedProducts.sort((a, b) => b.discountedPrice - a.discountedPrice);
            break;
        case 'Newest First':
            sortedProducts.sort((a, b) => b.id - a.id);
            break;
    }
    renderProducts(sortedProducts);
}

if (sortButton && sortModal && sortOptions) {
    sortButton.addEventListener('click', toggleSortModal);

    sortOptions.forEach(option => {
        option.addEventListener('click', () => {
            const selectedSort = option.textContent.trim();
            currentSort = selectedSort;
            updateSelectedOption(selectedSort);
            sortProducts(selectedSort);
            toggleSortModal();
        });
    });
    sortModal.addEventListener('click', function (e) {
        if (e.target === sortModal) {
            toggleSortModal();
        }
    });
}
        updateSelectedOption(currentSort);
        sortProducts(currentSort);

        
window.addEventListener('click', (e) => {
  if (!filterModal.contains(e.target) && !filterBtn.contains(e.target)) {
    filterModal.classList.remove('show');
    filterModal.classList.add('hidden');
  }
});

document.getElementById('filter-button').addEventListener('click', () => {
    document.getElementById('filter-overlay').style.display = 'flex';
});
document.querySelector('#filter-overlay .back-arrow').addEventListener('click', () => {
    document.getElementById('filter-overlay').style.display = 'none';
});
document.querySelectorAll('.optionPad').forEach(option => {
    option.addEventListener('click', () => {
        const targetId = option.getAttribute('data-id');
        document.querySelectorAll('.contentBox').forEach(box => box.style.display = 'none');

        const activeBox = document.getElementById(targetId);
        if (activeBox) activeBox.style.display = 'block';

        document.querySelectorAll('.optionPad').forEach(op => {
            op.classList.remove('optionSelected');
            op.classList.add('optionBg');
        });
        option.classList.add('optionSelected');
        option.classList.remove('optionBg');
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const holders = document.querySelectorAll(".holder");
    const clearBtn = document.querySelector(".clearMain");
    const applyBtn = document.querySelector(".apply");
    const clearTextBtn = document.querySelector('.clearText');
    const priceTick = document.querySelector('.priceTick');
    const brandTick = document.querySelector('.brandTick');

function updateTickVisibility() {
    const anyPriceChecked = document.querySelector('.holder[data-price] .checkbox-input:checked');
    const anyBrandChecked = document.querySelector('.holder[data-brand] .checkbox-input:checked');

    priceTick.style.display = anyPriceChecked ? 'flex' : 'none';
    brandTick.style.display = anyBrandChecked ? 'flex' : 'none';
}

document.querySelectorAll('.holder[data-price] .checkbox-input, .holder[data-brand] .checkbox-input')
    .forEach(cb => {
        cb.addEventListener('change', updateTickVisibility);
    });

updateTickVisibility();

clearTextBtn?.addEventListener('click', () => {
    document.querySelectorAll('.holder[data-price] .checkbox-input, .holder[data-brand] .checkbox-input')
        .forEach(cb => cb.checked = false);

    document.querySelectorAll('.holder[data-price], .holder[data-brand]').forEach(holder => {
        const checkbox = holder.querySelector('.checkbox-input');
        const tick = holder.querySelector('.tick');
        const ticked = holder.querySelector('.ticked');
        if (tick && ticked) updateTickImage(checkbox, tick, ticked);
    });
    updateTickVisibility();
    updateClearButton();
    closeFilterPopup();
});

const cancelBtn = document.querySelector('.cancel');

cancelBtn?.addEventListener('click', () => {
    closeFilterPopup();
});

const xBtn = document.querySelector('.clear');

xBtn?.addEventListener('click', () => {
    closeFilterPopup();
});




  holders.forEach(holder => {
    const checkbox = holder.querySelector(".checkbox-input");
    const tick = holder.querySelector(".tick");
    const ticked = holder.querySelector(".ticked");

    updateTickImage(checkbox, tick, ticked);

    holder.addEventListener("click", () => {
      checkbox.checked = !checkbox.checked;
      updateTickImage(checkbox, tick, ticked);
      updateClearButton();
      updateTickVisibility();
    });
  });


  document.querySelectorAll('.priceOpt').forEach(opt => {
    const checkbox = opt.querySelector('.checkbox-input');
    const ticked = opt.querySelector('.clearTicked');
    const empty = opt.querySelector('.clearEmpty');

    const updateTick = () => {
        if (checkbox.checked) {
            ticked.style.display = 'none';
            empty.style.display = 'block';
        } else {
            ticked.style.display = 'block';
            empty.style.display = 'none';
        }
    };
    updateTick();
    opt.addEventListener('click', () => {
        checkbox.checked = !checkbox.checked;
        updateTick();
    });
});

  function applyFilters() {
  const selectedPrices = Array.from(document.querySelectorAll('.priceTag .holder .checkbox-input:checked'))
    .map(cb => cb.closest('.holder').getAttribute('data-price'));

  const selectedBrands = Array.from(document.querySelectorAll('.brandName .holder .checkbox-input:checked'))
    .map(cb => cb.closest('.holder').getAttribute('data-brand')?.toUpperCase());

  let filtered = products;
  if (selectedPrices.length > 0) {
    filtered = filtered.filter(product => {
      return selectedPrices.some(price => {
        const [min, max] = price.split('-').map(Number);
        return product.discountedPrice >= min && product.discountedPrice <= max;
      });
    });
  }

  if (selectedBrands.length > 0) {
    filtered = filtered.filter(product => {
      const brand = product.name.split(' ')[0].toUpperCase();
      return selectedBrands.includes(brand);
    });
  }
  renderProducts(filtered);
  document.getElementById('filter-overlay').style.display = 'none';
}

  applyBtn?.addEventListener("click", applyFilters);

clearBtn?.addEventListener("click", () => {
    const popup = document.querySelector(".filterPopup");
    if (popup) {
        popup.style.display = "flex";
    }
});

document.querySelector('.filterPopup')?.addEventListener('click', function(e) {
    if (e.target === this) {
        closeFilterPopup();
    }
});
});

function updateTickImage(checkbox, tick, ticked) {
  const isChecked = checkbox.checked;
  tick.style.display = isChecked ? "none" : "block";
  ticked.style.display = isChecked ? "block" : "none";
}

function updateClearButton() {
  const anyChecked = document.querySelector(".holder .checkbox-input:checked");
  const clearBtn = document.querySelector(".clearMain");
  if (clearBtn) clearBtn.style.display = anyChecked ? "block" : "none";
}

const filterPopup = document.querySelector('.filterPopup');
const totalBar = document.querySelector('.total');

function openFilterPopup(){
    filterPopup.classList.add('active');
    totalBar.classList.remove('hide');
    totalBar.classList.add('show');
    filterPopup.style.display = "flex";
}

function closeFilterPopup() {
    totalBar.classList.remove('show');
    totalBar.classList.add('hide');

    setTimeout(() => {
        filterPopup.classList.remove('active');
        filterPopup.style.display="none";
        totalBar.classList.remove('hide');
    }, 400);
}

clearBtn?.addEventListener("click", () => {
    openFilterPopup();    
});

document.querySelector('.cross')?.addEventListener('click', (e) => {
    e.preventDefault();
    closeFilterPopup();
});

document.querySelector('.cancel')?.addEventListener('click', () => {
    closeFilterPopup();
});

function applyFilters() {
  const selectedPrices = Array.from(document.querySelectorAll('.priceTag .holder .checkbox-input:checked'))
    .map(cb => cb.closest('.holder').getAttribute('data-price'));

  const selectedBrands = Array.from(document.querySelectorAll('.brandName .holder .checkbox-input:checked'))
    .map(cb => {
      const productName = cb.closest('.holder').nextElementSibling?.textContent || '';
      return productName.split(' ')[0].toUpperCase();
    });

  let filtered = products;
  if (selectedPrices.length > 0) {
    filtered = filtered.filter(product => {
      return selectedPrices.some(priceRange => {
        const [min, max] = priceRange.split('-').map(Number);
        return product.discountedPrice >= min && product.discountedPrice <= max;
      });
    });
  }

  if (selectedBrands.length > 0) {
    filtered = filtered.filter(product => {
      const brand = product.name.split(' ')[0].toUpperCase();
      return selectedBrands.includes(brand);
    });
  }

  renderProducts(filtered);
}

