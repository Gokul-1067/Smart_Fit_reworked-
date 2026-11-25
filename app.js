/**
 * Smart Fit Udumalpet - Boutique Editorial Application
 * Reference-Elevated & Mobile-Optimized:
 * - Grand Cinematic Hero Slider (inspired by Kalyan Silks layout)
 * - Safe LocalStorage (Private Browsing Safe)
 * - Instant Catalog Search Modal (Mobile Fullscreen)
 * - Interactive Wishlist Drawer & Saved Selections
 * - Category Tabs & On-Card Size Selector Pills
 * - Dynamic WhatsApp Pre-filled Deep-Linking
 * - Slide-Over Quick-View Drawer / Mobile Bottom Sheet
 * - Mobile Touch-Friendly Card Targets
 */

(function () {
  'use strict';

  // Safe LocalStorage Helpers
  function getStoredWishlist() {
    try {
      return JSON.parse(localStorage.getItem('smartfit_wishlist') || '[]');
    } catch (e) {
      return [];
    }
  }

  function saveStoredWishlist(list) {
    try {
      localStorage.setItem('smartfit_wishlist', JSON.stringify(list));
    } catch (e) {
      // Fallback in case of restricted sandbox
    }
  }

  // State Management
  const state = {
    selectedCategory: 'all',
    cardSelectedSizes: {}, // maps productId -> currently selected size
    activeDrawerProduct: null,
    drawerSelectedSize: null,
    currentHeroSlide: 0,
    heroAutoTimer: null,
    wishlist: getStoredWishlist()
  };

  const WA_PHONE = '919360660051';
  const WA_ICON_SVG = '<svg class="wa-logo-svg" viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.98 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.48 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z" fill="currentColor"/></svg>';

  /**
   * Helper: Build WhatsApp URL with encoded message
   */
  function buildWhatsAppUrl(message) {
    return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(message.trim())}`;
  }

  /**
   * Helper: Generate product inquiry text
   */
  function generateProductEnquiryText(product, size) {
    const s = size || product.defaultSize || 'Regular';
    return `Hi Smart Fit Udumalpet! I'm interested in the "${product.name}" (${product.brand}) priced at ₹${product.surplusPrice} in Size [${s}]. Is this still available in stock? Please confirm delivery to my pincode.`;
  }

  /**
   * Helper: Generate Live Tag Video request text
   */
  function generateLiveTagVideoText(product, size) {
    const s = size || product.defaultSize || 'Regular';
    return `Hi Smart Fit Udumalpet! Can you please send a 1-on-1 Live Tag Video / Video Call verification for "${product.name}" (Size: ${s}) before I order? Thank you!`;
  }

  /**
   * Initialize on DOM Ready
   */
  document.addEventListener('DOMContentLoaded', () => {
    initHeroSlider();
    initStories();
    initHighlightFilters();
    renderHighlights();
    renderDepartments();
    renderWeeklyDrops();
    renderReels();
    initDrawer();
    initWishlist();
    initSearchModal();
    initFloatingBadges();
    initCarouselControls();
    initCopyCode();
    initMobileNav();
    initScrollHeader();
    initFloatingTooltip();
    initAnimations();

    if (window.lucide) {
      window.lucide.createIcons();
    }
  });

  /**
   * Grand Cinematic Hero Slider
   */
  function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');
    const prevBtn = document.getElementById('hero-prev');
    const nextBtn = document.getElementById('hero-next');
    const sliderWrap = document.getElementById('hero-slider');

    if (!slides.length) return;

    function goToSlide(index) {
      slides.forEach((s, idx) => {
        s.classList.toggle('active', idx === index);
      });
      dots.forEach((d, idx) => {
        d.classList.toggle('active', idx === index);
      });
      state.currentHeroSlide = index;

      if (window.gsap && window.innerWidth >= 768) {
        const activeSlide = slides[index];
        window.gsap.fromTo(
          activeSlide.querySelectorAll('.hero-script-headline, .hero-editorial-sub, .hero-pricing-pill, .hero-slide-ctas'),
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out' }
        );
      }
    }

    function nextSlide() {
      const nextIdx = (state.currentHeroSlide + 1) % slides.length;
      goToSlide(nextIdx);
    }

    function prevSlide() {
      const prevIdx = (state.currentHeroSlide - 1 + slides.length) % slides.length;
      goToSlide(prevIdx);
    }

    function startAutoPlay() {
      stopAutoPlay();
      state.heroAutoTimer = setInterval(nextSlide, 5500);
    }

    function stopAutoPlay() {
      if (state.heroAutoTimer) {
        clearInterval(state.heroAutoTimer);
        state.heroAutoTimer = null;
      }
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        nextSlide();
        startAutoPlay();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        prevSlide();
        startAutoPlay();
      });
    }

    dots.forEach((dot) => {
      dot.addEventListener('click', () => {
        const idx = parseInt(dot.dataset.index, 10);
        goToSlide(idx);
        startAutoPlay();
      });
    });

    if (sliderWrap) {
      sliderWrap.addEventListener('mouseenter', stopAutoPlay);
      sliderWrap.addEventListener('mouseleave', startAutoPlay);

      // Touch swipe support for Mobile Viewport
      let touchStartX = 0;
      let touchStartY = 0;
      let touchEndX = 0;
      let touchEndY = 0;

      sliderWrap.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
      }, { passive: true });

      sliderWrap.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        touchEndY = e.changedTouches[0].screenY;

        const diffX = touchStartX - touchEndX;
        const diffY = Math.abs(touchStartY - touchEndY);

        // Ensure horizontal swipe intent
        if (Math.abs(diffX) > 40 && Math.abs(diffX) > diffY) {
          if (diffX > 0) {
            nextSlide();
          } else {
            prevSlide();
          }
          startAutoPlay();
        }
      }, { passive: true });
    }

    startAutoPlay();

    // Triptych preview cards click
    document.querySelectorAll('.triptych-card').forEach((card) => {
      card.addEventListener('click', () => {
        const filter = card.dataset.filter;
        if (filter) {
          setActiveFilter(filter);
          const hSection = document.getElementById('highlights') || document.getElementById('departments');
          if (hSection) hSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  /**
   * Render Mobile Story Strip
   */
  function initStories() {
    const container = document.getElementById('story-container');
    if (!container || !SMART_FIT_DATA.stories) return;

    container.innerHTML = SMART_FIT_DATA.stories
      .map(
        (story) => `
        <button class="story-item" data-filter="${story.filter}" aria-label="View ${story.title}">
          <div class="story-ring">
            <img src="${story.image}" alt="${story.title}" class="story-avatar" loading="lazy">
            <span class="story-badge">${story.badge}</span>
          </div>
          <span class="story-title">${story.title}</span>
        </button>
      `
      )
      .join('');

    container.querySelectorAll('.story-item').forEach((btn) => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        if (filter === 'combo') {
          const comboSection = document.getElementById('combo');
          if (comboSection) comboSection.scrollIntoView({ behavior: 'smooth' });
        } else if (filter === 'kids') {
          const deptSection = document.getElementById('departments');
          if (deptSection) deptSection.scrollIntoView({ behavior: 'smooth' });
        } else {
          setActiveFilter(filter);
          const highlightsSection = document.getElementById('highlights') || document.getElementById('departments');
          if (highlightsSection) highlightsSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  /**
   * Category Filter Buttons
   */
  function initHighlightFilters() {
    const tabBtns = document.querySelectorAll('.category-tabs .tab-btn');
    tabBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        setActiveFilter(filter);
      });
    });

    document.querySelectorAll('[data-filter]').forEach((link) => {
      if (link.classList.contains('tab-btn')) return;
      link.addEventListener('click', () => {
        const filter = link.dataset.filter;
        if (filter) {
          setActiveFilter(filter);
          const highlightsSection = document.getElementById('highlights') || document.getElementById('departments');
          if (highlightsSection) highlightsSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  function setActiveFilter(filter) {
    state.selectedCategory = filter;

    document.querySelectorAll('.category-tabs .tab-btn').forEach((b) => {
      const isActive = b.dataset.filter === filter;
      b.classList.toggle('active', isActive);
      b.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    renderHighlights();

    if (window.gsap && window.innerWidth >= 768 && document.querySelector('#highlight-grid .product-card')) {
      window.gsap.fromTo(
        '#highlight-grid .product-card',
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.35, stagger: 0.05, ease: 'power2.out' }
      );
    }
  }

  /**
   * Render Highlight Products Grid
   */
  function renderHighlights() {
    const grid = document.getElementById('highlight-grid');
    if (!grid || !SMART_FIT_DATA.highlights) return;

    const filtered = SMART_FIT_DATA.highlights.filter((item) => {
      if (state.selectedCategory === 'all') return true;
      return item.category === state.selectedCategory;
    });

    grid.innerHTML = filtered
      .map((item) => {
        if (!state.cardSelectedSizes[item.id]) {
          state.cardSelectedSizes[item.id] = item.defaultSize || item.sizes[0];
        }
        const currentSize = state.cardSelectedSizes[item.id];
        const waUrl = buildWhatsAppUrl(generateProductEnquiryText(item, currentSize));
        const savingsAmount = (item.mrp - item.surplusPrice).toLocaleString('en-IN');
        const isWishlisted = state.wishlist.includes(item.id);

        const sizePillsHtml = item.sizes
          .map(
            (sz) => `
            <button type="button" 
                    class="size-pill ${sz === currentSize ? 'active' : ''}" 
                    data-product-id="${item.id}" 
                    data-size="${sz}">
              ${sz}
            </button>
          `
          )
          .join('');

        return `
        <article class="product-card" id="card-${item.id}" data-id="${item.id}">
          <div class="card-media-wrap" data-card-open="${item.id}">
            <img src="${item.image}" alt="${item.name}" class="card-img" loading="lazy">
            <div class="card-badge-row">
              <span class="discount-pill">${item.discount}</span>
              <button class="card-heart-btn ${isWishlisted ? 'active' : ''}" 
                      data-wishlist-id="${item.id}" 
                      aria-label="Save ${item.name} to wishlist">
                <i data-lucide="heart" style="width:16px;height:16px"></i>
              </button>
            </div>
            <button class="quick-view-overlay-btn" data-quickview-id="${item.id}" aria-label="Quick view for ${item.name}">
              <i data-lucide="eye" style="width:14px;height:14px"></i>
              <span>Quick View</span>
            </button>
          </div>

          <div class="card-content">
            <span class="card-brand">${item.brand}</span>
            <h3 class="card-title" data-card-open="${item.id}">${item.name}</h3>
            <p class="card-subtitle">${item.subtitle}</p>

            <div class="card-price-row">
              <span class="card-surplus-price">₹${item.surplusPrice.toLocaleString('en-IN')}</span>
              <del class="card-mrp">₹${item.mrp.toLocaleString('en-IN')}</del>
              <span class="card-savings">Save ₹${savingsAmount}</span>
            </div>

            <!-- Size Selector Pills -->
            <div class="card-size-selector">
              <div class="size-label-row">
                <span class="size-title">Select Size:</span>
                <span class="selected-size-label" id="label-size-${item.id}" style="font-size:0.7rem;font-weight:800;color:var(--color-obsidian)">${currentSize}</span>
              </div>
              <div class="size-pills-row">
                ${sizePillsHtml}
              </div>
            </div>

            <!-- Action Button -->
            <div class="card-action-row">
              <a href="${waUrl}" 
                 id="wa-btn-${item.id}"
                 target="_blank" 
                 rel="noopener noreferrer" 
                 class="btn-card-wa">
                ${WA_ICON_SVG}
                <span class="wa-btn-label">Enquire (<strong id="card-btn-size-${item.id}">${currentSize}</strong>)</span>
              </a>
            </div>
          </div>
        </article>
      `;
      })
      .join('');

    if (window.lucide) {
      window.lucide.createIcons();
    }

    // Attach card size pill click events
    grid.querySelectorAll('.size-pill').forEach((pill) => {
      pill.addEventListener('click', (e) => {
        e.stopPropagation();
        const pId = pill.dataset.productId;
        const newSize = pill.dataset.size;
        updateCardSize(pId, newSize);
      });
    });

    // Touch-friendly: clicking card photo or title opens Quick View
    grid.querySelectorAll('[data-card-open], [data-quickview-id]').forEach((elem) => {
      elem.addEventListener('click', (e) => {
        // Prevent click if clicking heart button or size pill
        if (e.target.closest('.card-heart-btn') || e.target.closest('.size-pill') || e.target.closest('.btn-card-wa')) {
          return;
        }
        e.preventDefault();
        const pId = elem.dataset.cardOpen || elem.dataset.quickviewId;
        const product = SMART_FIT_DATA.highlights.find((p) => p.id === pId);
        if (product) {
          openDrawer(product);
        }
      });
    });

    // Attach Wishlist heart click events
    grid.querySelectorAll('[data-wishlist-id]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const pId = btn.dataset.wishlistId;
        toggleWishlist(pId);
      });
    });
  }

  /**
   * Find product from Highlights or Weekly Drops and normalize schema for Quick View / WhatsApp
   */
  function findProductById(productId) {
    const highlight = SMART_FIT_DATA.highlights && SMART_FIT_DATA.highlights.find((p) => p.id === productId);
    if (highlight) return highlight;

    const drop = SMART_FIT_DATA.weeklyDrops && SMART_FIT_DATA.weeklyDrops.find((d) => d.id === productId);
    if (!drop) return null;

    return {
      id: drop.id,
      brand: drop.brand,
      name: drop.title,
      subtitle: drop.category,
      surplusPrice: drop.price,
      mrp: drop.mrp,
      discount: drop.discount,
      sizes: drop.sizes,
      defaultSize: drop.defaultSize,
      fabric: drop.tag,
      fit: 'Branded Factory Surplus Cut',
      stockStatus: drop.countdownText,
      image: drop.image,
      description: `Limited Fresh Weekly Drop (${drop.tag}) from our ${drop.category} rack in Udumalpet. Original brand tags intact at ${drop.discount}.`
    };
  }

  /**
   * Update active size for a specific product card (Highlights or Weekly Drops) and recalculate WhatsApp URL
   */
  function updateCardSize(productId, size) {
    state.cardSelectedSizes[productId] = size;

    const card = document.getElementById(`card-${productId}`);
    if (!card) return;

    card.querySelectorAll('.size-pill').forEach((p) => {
      p.classList.toggle('active', p.dataset.size === size);
    });

    const label = document.getElementById(`label-size-${productId}`);
    if (label) label.textContent = size;

    const btnSizeSpan = document.getElementById(`card-btn-size-${productId}`);
    if (btnSizeSpan) btnSizeSpan.textContent = size;

    const waBtn = document.getElementById(`wa-btn-${productId}`);
    const product = findProductById(productId);
    if (waBtn && product) {
      waBtn.href = buildWhatsAppUrl(generateProductEnquiryText(product, size));
    }
  }

  /**
   * Wishlist Management
   */
  function initWishlist() {
    updateWishlistBadge();

    const trigger = document.getElementById('wishlist-trigger');
    const drawer = document.getElementById('wishlist-drawer');
    const backdrop = document.getElementById('wishlist-backdrop');
    const closeBtn = document.getElementById('wishlist-close-btn');

    if (drawer && backdrop) {
      if (trigger) trigger.addEventListener('click', openWishlist);
      if (closeBtn) closeBtn.addEventListener('click', closeWishlist);
      backdrop.addEventListener('click', closeWishlist);
    }
  }

  function toggleWishlist(productId) {
    const idx = state.wishlist.indexOf(productId);
    if (idx > -1) {
      state.wishlist.splice(idx, 1);
    } else {
      state.wishlist.push(productId);
    }
    saveStoredWishlist(state.wishlist);
    updateWishlistBadge();

    document.querySelectorAll(`[data-wishlist-id="${productId}"]`).forEach((btn) => {
      const active = state.wishlist.includes(productId);
      btn.classList.toggle('active', active);
    });

    renderWishlistItems();
  }

  function updateWishlistBadge() {
    const badge = document.getElementById('wishlist-count');
    if (badge) {
      badge.textContent = state.wishlist.length;
      badge.style.display = state.wishlist.length > 0 ? 'flex' : 'none';
    }
  }

  function openWishlist() {
    renderWishlistItems();
    const drawer = document.getElementById('wishlist-drawer');
    const backdrop = document.getElementById('wishlist-backdrop');
    if (drawer && backdrop) {
      drawer.classList.add('open');
      backdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
      if (window.lucide) window.lucide.createIcons();
    }
  }

  function closeWishlist() {
    const drawer = document.getElementById('wishlist-drawer');
    const backdrop = document.getElementById('wishlist-backdrop');
    if (drawer && backdrop) {
      drawer.classList.remove('open');
      backdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  function renderWishlistItems() {
    const container = document.getElementById('wishlist-items-container');
    const countEl = document.getElementById('wishlist-drawer-count');
    const waAllBtn = document.getElementById('wishlist-wa-all-btn');
    if (!container) return;

    if (countEl) countEl.textContent = state.wishlist.length;

    const wishlistedProducts = SMART_FIT_DATA.highlights.filter((p) => state.wishlist.includes(p.id));

    if (wishlistedProducts.length === 0) {
      container.innerHTML = `
        <div class="wishlist-empty-msg">
          <i data-lucide="heart" style="width:40px;height:40px;color:var(--color-text-muted);margin-bottom:12px"></i>
          <p>Your wishlist is empty.</p>
          <p style="font-size:0.8rem;color:var(--color-text-muted);margin-top:4px">Tap the heart icon on any product card to save your favorite surplus pieces!</p>
        </div>
      `;
      if (waAllBtn) waAllBtn.style.display = 'none';
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    if (waAllBtn) {
      waAllBtn.style.display = 'flex';
      const titles = wishlistedProducts.map((p) => `• ${p.name} (₹${p.surplusPrice})`).join('\n');
      const waMsg = `Hi Smart Fit Udumalpet! I've saved these ${wishlistedProducts.length} surplus items in my wishlist:\n${titles}\nPlease confirm stock availability and courier booking!`;
      waAllBtn.href = buildWhatsAppUrl(waMsg);
    }

    container.innerHTML = wishlistedProducts
      .map(
        (p) => `
        <div class="wishlist-item" id="wishlist-row-${p.id}">
          <img src="${p.image}" alt="${p.name}" class="wishlist-thumb">
          <div class="wishlist-item-info">
            <h4 class="wishlist-item-title">${p.name}</h4>
            <p class="wishlist-item-price">₹${p.surplusPrice.toLocaleString('en-IN')} <del style="color:#94a3b8;font-weight:normal;font-size:0.76rem">₹${p.mrp}</del></p>
          </div>
          <button class="wishlist-item-remove" data-remove-id="${p.id}" aria-label="Remove item">
            <i data-lucide="trash-2" style="width:16px;height:16px"></i>
          </button>
        </div>
      `
      )
      .join('');

    container.querySelectorAll('[data-remove-id]').forEach((btn) => {
      btn.addEventListener('click', () => {
        toggleWishlist(btn.dataset.removeId);
      });
    });

    if (window.lucide) window.lucide.createIcons();
  }

  /**
   * Live Instant Catalog Search Modal
   */
  function initSearchModal() {
    const trigger = document.getElementById('search-trigger');
    const modal = document.getElementById('search-modal');
    const closeBtn = document.getElementById('search-modal-close');
    const input = document.getElementById('catalog-search-input');
    const resultsContainer = document.getElementById('search-results-container');

    if (!trigger || !modal || !input) return;

    function openSearch() {
      modal.classList.add('open');
      input.value = '';
      resultsContainer.innerHTML = '<p style="text-align:center;color:var(--color-text-muted);padding:24px">Type a brand (Avaasa, US Polo, Louis Philippe) or category (Kurtis, Shirts, Tees)...</p>';
      setTimeout(() => input.focus(), 150);
      document.body.style.overflow = 'hidden';
    }

    function closeSearch() {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }

    trigger.addEventListener('click', openSearch);
    if (closeBtn) closeBtn.addEventListener('click', closeSearch);

    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeSearch();
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('open')) {
        closeSearch();
      }
    });

    input.addEventListener('input', () => {
      const q = input.value.trim().toLowerCase();
      if (!q) {
        resultsContainer.innerHTML = '<p style="text-align:center;color:var(--color-text-muted);padding:24px">Type a brand or garment type...</p>';
        return;
      }

      const matches = SMART_FIT_DATA.highlights.filter((p) => {
        return (
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q) ||
          p.sizes.some((sz) => sz.toLowerCase() === q)
        );
      });

      if (matches.length === 0) {
        resultsContainer.innerHTML = `<p style="text-align:center;color:var(--color-text-muted);padding:24px">No surplus items found matching "${q}". Try "Avaasa", "Shirts", "Polo" or "Kurtis".</p>`;
        return;
      }

      resultsContainer.innerHTML = matches
        .map((p) => {
          const waUrl = buildWhatsAppUrl(generateProductEnquiryText(p, p.defaultSize));
          return `
          <div class="search-result-row" data-product-id="${p.id}">
            <img src="${p.image}" alt="${p.name}" class="search-result-thumb">
            <div class="search-result-info">
              <h4 class="search-result-name">${p.name}</h4>
              <p class="search-result-meta">${p.brand} • Sizes: ${p.sizes.join(', ')}</p>
            </div>
            <div style="text-align:right">
              <div class="search-result-price">₹${p.surplusPrice}</div>
              <a href="${waUrl}" target="_blank" rel="noopener noreferrer" style="font-size:0.72rem;color:var(--color-emerald);font-weight:700">Enquire WA ➔</a>
            </div>
          </div>
        `;
        })
        .join('');

      resultsContainer.querySelectorAll('.search-result-row').forEach((row) => {
        row.addEventListener('click', (e) => {
          if (e.target.tagName === 'A') return;
          const p = SMART_FIT_DATA.highlights.find((x) => x.id === row.dataset.productId);
          if (p) {
            closeSearch();
            openDrawer(p);
          }
        });
      });
    });
  }

  /**
   * Floating Corner Badges
   */
  function initFloatingBadges() {
    const storeBtn = document.getElementById('floating-store-btn');
    if (storeBtn) {
      storeBtn.addEventListener('click', () => {
        const storeSection = document.getElementById('store-locator');
        if (storeSection) {
          storeSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  }

  /**
   * Render Department Bento Cards
   */
  function renderDepartments() {
    const container = document.getElementById('departments-bento');
    if (!container || !SMART_FIT_DATA.departments) return;

    container.innerHTML = SMART_FIT_DATA.departments
      .map((dept) => {
        const isMen = dept.id === 'men';
        const tagsHtml = dept.subcategories
          .map((sub) => `<span class="bento-tag-item">${sub}</span>`)
          .join('');

        const waUrl = buildWhatsAppUrl(dept.whatsappMsg);

        return `
        <div class="bento-card ${isMen ? 'bento-men' : ''}">
          <img src="${dept.image}" alt="${dept.title}" class="bento-bg-img" loading="lazy">
          <div class="bento-overlay"></div>
          <div class="bento-content">
            <span class="bento-badge">${dept.badge}</span>
            <h3 class="bento-title">${dept.title}</h3>
            <p class="bento-tagline">${dept.tagline}</p>
            <div class="bento-tags">
              ${tagsHtml}
            </div>
            <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn-bento-wa">
              ${WA_ICON_SVG}
              <span>Explore ${dept.title.split(' ')[0]} on WhatsApp</span>
            </a>
          </div>
        </div>
      `;
      })
      .join('');
  }

  /**
   * Render Fresh Weekly Drops Carousel
   */
  function renderWeeklyDrops() {
    const track = document.getElementById('drops-track');
    if (!track || !SMART_FIT_DATA.weeklyDrops) return;

    track.innerHTML = SMART_FIT_DATA.weeklyDrops
      .map((drop) => {
        if (!state.cardSelectedSizes[drop.id]) {
          state.cardSelectedSizes[drop.id] = drop.defaultSize || drop.sizes[0];
        }
        const currentSize = state.cardSelectedSizes[drop.id];
        const product = findProductById(drop.id);
        const waUrl = buildWhatsAppUrl(generateProductEnquiryText(product, currentSize));
        const savingsAmount = (drop.mrp - drop.price).toLocaleString('en-IN');

        const sizePillsHtml = drop.sizes
          .map(
            (sz) => `
            <button type="button"
                    class="size-pill ${sz === currentSize ? 'active' : ''}"
                    data-product-id="${drop.id}"
                    data-size="${sz}">
              ${sz}
            </button>
          `
          )
          .join('');

        return `
        <article class="drop-card" id="card-${drop.id}" data-id="${drop.id}">
          <div class="drop-media-wrap" data-drop-open="${drop.id}">
            <img src="${drop.image}" alt="${drop.title}" class="drop-img" loading="lazy">
            <span class="discount-pill" style="position:absolute;top:10px;left:10px">${drop.discount}</span>
            <span class="drop-countdown">
              <i data-lucide="clock" style="width:12px;height:12px"></i>
              <span>${drop.countdownText}</span>
            </span>
          </div>

          <div class="drop-content">
            <span class="drop-brand">${drop.brand}</span>
            <h3 class="drop-title" data-drop-open="${drop.id}">${drop.title}</h3>
            <span class="drop-tag-pill">${drop.tag}</span>

            <div class="drop-price-row">
              <span class="drop-price">₹${drop.price.toLocaleString('en-IN')}</span>
              <del class="drop-mrp">₹${drop.mrp.toLocaleString('en-IN')}</del>
              <span class="drop-discount">Save ₹${savingsAmount}</span>
            </div>

            <div class="card-size-selector">
              <div class="size-pills-row">
                ${sizePillsHtml}
              </div>
            </div>

            <div class="card-action-row" style="margin-top:auto">
              <a href="${waUrl}" id="wa-btn-${drop.id}" target="_blank" rel="noopener noreferrer" class="btn-card-wa">
                ${WA_ICON_SVG}
                <span>Reserve on WhatsApp (<strong id="card-btn-size-${drop.id}">${currentSize}</strong>)</span>
              </a>
            </div>
          </div>
        </article>
      `;
      })
      .join('');

    track.querySelectorAll('.size-pill').forEach((pill) => {
      pill.addEventListener('click', (e) => {
        e.stopPropagation();
        updateCardSize(pill.dataset.productId, pill.dataset.size);
      });
    });

    track.querySelectorAll('[data-drop-open]').forEach((elem) => {
      elem.addEventListener('click', () => {
        const product = findProductById(elem.dataset.dropOpen);
        if (product) openDrawer(product);
      });
    });
  }

  /**
   * Carousel Prev/Next Buttons
   */
  function initCarouselControls() {
    const track = document.getElementById('drops-track');
    const prevBtn = document.getElementById('drop-prev');
    const nextBtn = document.getElementById('drop-next');

    if (!track || !prevBtn || !nextBtn) return;

    prevBtn.addEventListener('click', () => {
      track.scrollBy({ left: -280, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
      track.scrollBy({ left: 280, behavior: 'smooth' });
    });
  }

  /**
   * Render @smartfitudumalpet Unboxing Reels
   */
  function renderReels() {
    const grid = document.getElementById('reels-grid');
    if (!grid || !SMART_FIT_DATA.socialReels) return;

    grid.innerHTML = SMART_FIT_DATA.socialReels
      .map(
        (reel) => `
        <div class="reel-card" data-caption="${encodeURIComponent(reel.caption)}">
          <img src="${reel.image}" alt="${reel.caption}" class="reel-img" loading="lazy">
          <div class="reel-overlay">
            <span class="reel-tag">${reel.tag}</span>
            <div class="reel-play-btn" title="Watch Reel">
              <i data-lucide="play" style="width:18px;height:18px;margin-left:2px"></i>
            </div>
            <div>
              <p class="reel-caption">${reel.caption}</p>
              <div class="reel-meta">
                <span>${reel.handle}</span>
                <span>${reel.views}</span>
              </div>
            </div>
          </div>
        </div>
      `
      )
      .join('');

    grid.querySelectorAll('.reel-card').forEach((card) => {
      card.addEventListener('click', () => {
        const text = `Hi Smart Fit Udumalpet! I saw your reel video about recent carton drops: "${decodeURIComponent(
          card.dataset.caption
        )}". Can you share latest available pieces?`;
        window.open(buildWhatsAppUrl(text), '_blank');
      });
    });
  }

  /**
   * Quick-View Slide-Over Drawer
   */
  function initDrawer() {
    const backdrop = document.getElementById('drawer-backdrop');
    const drawer = document.getElementById('quick-view-drawer');
    const closeBtn = document.getElementById('drawer-close-btn');

    if (!backdrop || !drawer) return;

    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    backdrop.addEventListener('click', closeDrawer);

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('open')) {
        closeDrawer();
      }
    });
  }

  function openDrawer(product) {
    state.activeDrawerProduct = product;
    const initialSize = state.cardSelectedSizes[product.id] || product.defaultSize || product.sizes[0];
    state.drawerSelectedSize = initialSize;

    const drawer = document.getElementById('quick-view-drawer');
    const backdrop = document.getElementById('drawer-backdrop');

    document.getElementById('drawer-brand').textContent = product.brand;
    document.getElementById('drawer-title').textContent = product.name;
    document.getElementById('drawer-subtitle').textContent = product.subtitle;
    document.getElementById('drawer-image').src = product.image;
    document.getElementById('drawer-image').alt = product.name;
    document.getElementById('drawer-discount').textContent = product.discount;
    document.getElementById('drawer-stock').textContent = product.stockStatus;
    document.getElementById('drawer-price').textContent = `₹${product.surplusPrice.toLocaleString('en-IN')}`;
    document.getElementById('drawer-mrp').textContent = `₹${product.mrp.toLocaleString('en-IN')}`;
    document.getElementById('drawer-savings').textContent = `You Save ₹${(
      product.mrp - product.surplusPrice
    ).toLocaleString('en-IN')}`;
    document.getElementById('drawer-fabric').textContent = product.fabric;
    document.getElementById('drawer-fit').textContent = product.fit;
    document.getElementById('drawer-desc').textContent = product.description;

    const sizeContainer = document.getElementById('drawer-sizes');
    sizeContainer.innerHTML = product.sizes
      .map(
        (sz) => `
        <button type="button" class="drawer-size-btn ${sz === initialSize ? 'active' : ''}" data-size="${sz}">
          ${sz}
        </button>
      `
      )
      .join('');

    sizeContainer.querySelectorAll('.drawer-size-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const sz = btn.dataset.size;
        setDrawerSize(sz);
      });
    });

    updateDrawerCTAs();

    drawer.classList.add('open');
    backdrop.classList.add('active');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  function setDrawerSize(size) {
    state.drawerSelectedSize = size;
    const p = state.activeDrawerProduct;

    document.querySelectorAll('#drawer-sizes .drawer-size-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.size === size);
    });

    if (p) {
      updateCardSize(p.id, size);
    }

    updateDrawerCTAs();
  }

  function updateDrawerCTAs() {
    const product = state.activeDrawerProduct;
    const size = state.drawerSelectedSize;
    if (!product) return;

    const sizeTextSpan = document.getElementById('drawer-selected-size-text');
    if (sizeTextSpan) sizeTextSpan.textContent = size;

    const waBtn = document.getElementById('drawer-wa-btn');
    if (waBtn) {
      waBtn.href = buildWhatsAppUrl(generateProductEnquiryText(product, size));
    }

    const videoBtn = document.getElementById('drawer-video-btn');
    if (videoBtn) {
      videoBtn.href = buildWhatsAppUrl(generateLiveTagVideoText(product, size));
    }
  }

  function closeDrawer() {
    const drawer = document.getElementById('quick-view-drawer');
    const backdrop = document.getElementById('drawer-backdrop');
    if (!drawer || !backdrop) return;

    drawer.classList.remove('open');
    backdrop.classList.remove('active');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  /**
   * Voucher Copy Button
   */
  function initCopyCode() {
    const copyBtn = document.getElementById('copy-code-btn');
    if (!copyBtn) return;

    copyBtn.addEventListener('click', () => {
      const code = 'SMART3X';
      navigator.clipboard.writeText(code).then(() => {
        const originalHtml = copyBtn.innerHTML;
        copyBtn.innerHTML = `<i data-lucide="check" style="width:14px;height:14px"></i> Copied!`;
        if (window.lucide) window.lucide.createIcons();
        setTimeout(() => {
          copyBtn.innerHTML = originalHtml;
          if (window.lucide) window.lucide.createIcons();
        }, 2000);
      });
    });
  }

  /**
   * Mobile Hamburger Menu & App Drawer
   */
  function initMobileNav() {
    const toggle = document.getElementById('menu-toggle');
    const panel = document.getElementById('mobile-nav');
    const closeBtn = document.getElementById('mobile-nav-close');
    if (!toggle || !panel) return;

    function openMobileMenu() {
      panel.classList.add('open');
      toggle.classList.add('active');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
      if (window.lucide) window.lucide.createIcons();
    }

    function closeMobileMenu() {
      panel.classList.remove('open');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      if (panel.classList.contains('open')) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', closeMobileMenu);
    }

    panel.querySelectorAll('.mobile-link').forEach((link) => {
      link.addEventListener('click', () => {
        closeMobileMenu();
        const filter = link.dataset.filter;
        if (filter) {
          setActiveFilter(filter);
        }
      });
    });
  }

  /**
   * Sticky Nav Scroll Styling with Glassy Effect & Active Nav Link Spy
   */
  function initScrollHeader() {
    const header = document.getElementById('header');
    if (!header) return;

    const navLinks = document.querySelectorAll('.desktop-nav .nav-link');
    const sections = [
      { id: 'hero', link: document.querySelector('.desktop-nav a[href="#hero"]') },
      { id: document.getElementById('highlights') ? 'highlights' : 'departments', link: document.querySelector('.desktop-nav a[href="#highlights"]') || document.querySelector('.desktop-nav a[href="#departments"]') },
      { id: 'drops', link: document.querySelector('.desktop-nav a[href="#drops"]') },
      { id: 'combo', link: document.querySelector('.desktop-nav a[href="#combo"]') },
      { id: 'why-us', link: document.querySelector('.desktop-nav a[href="#why-us"]') },
      { id: 'store-locator', link: document.querySelector('.desktop-nav a[href="#store-locator"]') }
    ];

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.forEach((l) => l.classList.remove('active'));
        link.classList.add('active');
      });
    });

    function handleScroll() {
      const scrollY = window.pageYOffset || window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      if (scrollY > 15) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }

      // Scroll spy for active link
      const scrollPos = scrollY + 120;
      let currentSection = 'hero';
      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el && el.offsetTop <= scrollPos) {
          currentSection = sec.id;
        }
      }
      sections.forEach((sec) => {
        if (sec.link) {
          sec.link.classList.toggle('active', sec.id === currentSection);
        }
      });
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('touchmove', handleScroll, { passive: true });
    document.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Trigger once on mount to handle pre-scrolled reloads
  }

  /**
   * Floating WhatsApp Tooltip Dismiss
   */
  function initFloatingTooltip() {
    const tooltip = document.getElementById('wa-tooltip');
    const closeBtn = document.getElementById('close-tooltip');
    if (!tooltip || !closeBtn) return;

    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      tooltip.style.display = 'none';
    });
  }

  /**
   * GSAP Smooth Animations & ScrollTriggers
   */
  function initAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    if (window.innerWidth >= 768) {
      // Desktop GSAP Animations
      gsap.from('.hero-slide.active .hero-script-headline', {
        opacity: 0,
        y: 25,
        duration: 0.8,
        ease: 'power3.out'
      });

      gsap.utils.toArray('.section-header').forEach((hdr) => {
        gsap.from(hdr, {
          scrollTrigger: {
            trigger: hdr,
            start: 'top 88%',
            toggleActions: 'play none none none'
          },
          opacity: 0,
          y: 24,
          duration: 0.6,
          ease: 'power2.out'
        });
      });

      gsap.from('.bento-card', {
        scrollTrigger: {
          trigger: '#departments-bento',
          start: 'top 82%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 35,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out'
      });
    }
  }
})();
