// ==========================================================================
// VANGUARD & CO. - CONTROLADOR PRINCIPAL DE LA APLICACIÓN (APP.JS)
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  App.init();
});

const App = (function () {
  // Estado de la aplicación
  const state = {
    currentCategory: "todos",
    currentSort: "destacados",
    maxPrice: 300000,
    selectedSize: "todos",
    searchQuery: "",
    homeActiveTab: "destacados",
    quickViewProduct: null,
    quickViewSelectedSize: null,
    quickViewSelectedColor: null,
    quickViewQuantity: 1,
    shippingMethod: "domicilio"
  };

  // Formateador de moneda (Pesos con separador de miles)
  function formatMoney(amount) {
    if (typeof amount !== "number") amount = Number(amount) || 0;
    return "$" + amount.toLocaleString("es-AR");
  }

  // Notificaciones Toast flotantes
  function showToast(message, type = "info") {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast ${type}`;

    let icon = "fa-info-circle";
    if (type === "success") icon = "fa-check-circle";
    if (type === "error") icon = "fa-exclamation-triangle";

    toast.innerHTML = `
      <i class="fas ${icon}"></i>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(20px)";
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  // ==========================================================================
  // RENDERIZADO DE PRODUCTOS
  // ==========================================================================
  function createProductCardHTML(product) {
    const isWishlist = CartService.isInWishlist(product.id);
    const installmentsAmount = Math.round(product.price / 3);

    // Badges
    let badgeClass = "badge-essential";
    if (product.badgeType) badgeClass = `badge-${product.badgeType}`;

    // Colores
    const colorSwatchesHTML = (product.colors || [])
      .map((c) => `<span class="color-swatch-dot" style="background-color: ${c.hex}" title="${c.name}"></span>`)
      .join("");

    return `
      <div class="product-card" data-id="${product.id}">
        <div class="product-media" onclick="App.openQuickView(${product.id})">
          <span class="product-badge ${badgeClass}">${product.badge || "Colección"}</span>
          <button class="wishlist-toggle-btn ${isWishlist ? "active" : ""}" 
                  onclick="event.stopPropagation(); App.toggleWishlist(${product.id})" 
                  title="${isWishlist ? "Quitar de favoritos" : "Guardar en favoritos"}">
            <i class="${isWishlist ? "fas" : "far"} fa-heart"></i>
          </button>
          <img src="${product.images[0]}" alt="${product.name}" loading="lazy" 
               onerror="this.src='https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80'">
          <button class="quickview-overlay-btn" onclick="event.stopPropagation(); App.openQuickView(${product.id})">
            <i class="far fa-eye"></i> Vista Rápida
          </button>
        </div>
        <div class="product-content">
          <span class="product-category-tag">${product.categoryLabel}</span>
          <h4 class="product-name" onclick="App.openQuickView(${product.id})">${product.name}</h4>
          
          <div class="product-rating">
            <i class="fas fa-star"></i>
            <span>${product.rating.toFixed(1)} (${product.reviewsCount})</span>
          </div>

          <div class="product-color-swatches">
            ${colorSwatchesHTML}
          </div>

          <div class="product-pricing">
            <span class="price-current">${formatMoney(product.price)}</span>
            ${product.originalPrice ? `<span class="price-original">${formatMoney(product.originalPrice)}</span>` : ""}
            <span class="price-installments"><i class="far fa-credit-card"></i> 3 cuotas sin interés de ${formatMoney(installmentsAmount)}</span>
          </div>

          <button class="add-to-cart-quick-btn" onclick="App.quickAddToCart(${product.id})">
            <i class="fas fa-shopping-bag"></i> Agregar al Carrito
          </button>
        </div>
      </div>
    `;
  }

  // Renderizar destacados de la Home
  function renderHomeFeatured() {
    const container = document.getElementById("home-featured-grid");
    if (!container) return;

    let filtered = [...PRODUCTS];

    if (state.homeActiveTab === "destacados") {
      filtered = PRODUCTS.filter((p) => p.isFeatured);
    } else if (state.homeActiveTab === "novedades") {
      filtered = PRODUCTS.filter((p) => p.isNew);
    } else if (state.homeActiveTab === "mas-vendidos") {
      filtered = PRODUCTS.filter((p) => p.badgeType === "bestseller" || p.rating >= 4.9);
    } else if (state.homeActiveTab === "ofertas") {
      filtered = PRODUCTS.filter((p) => p.isSale || p.originalPrice > p.price);
    }

    // Tomar máximo 8 para la grilla de Home
    const displayList = filtered.slice(0, 8);
    container.innerHTML = displayList.map(createProductCardHTML).join("");
  }

  // Renderizar catálogo completo con filtros
  function renderCatalog() {
    const container = document.getElementById("catalog-products-grid");
    const countEl = document.getElementById("catalog-count-display");
    if (!container) return;

    let filtered = [...PRODUCTS];

    // 1. Filtro por Categoría
    if (state.currentCategory !== "todos") {
      filtered = filtered.filter((p) => p.category === state.currentCategory);
    }

    // 2. Filtro por Precio Máximo
    filtered = filtered.filter((p) => p.price <= state.maxPrice);

    // 3. Filtro por Talle
    if (state.selectedSize !== "todos") {
      filtered = filtered.filter((p) => p.sizes && p.sizes.includes(state.selectedSize));
    }

    // 4. Búsqueda por texto
    if (state.searchQuery.trim() !== "") {
      const q = state.searchQuery.toLowerCase().trim();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.categoryLabel.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          (p.fabric && p.fabric.toLowerCase().includes(q))
      );
    }

    // 5. Ordenamiento
    if (state.currentSort === "precio-menor") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (state.currentSort === "precio-mayor") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (state.currentSort === "rating") {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (state.currentSort === "alfabetico") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    // Actualizar contador
    if (countEl) {
      countEl.innerHTML = `Mostrando <strong>${filtered.length}</strong> de <strong>${PRODUCTS.length}</strong> productos`;
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #fff; border-radius: 8px; border: 1px solid var(--color-border);">
          <i class="fas fa-search" style="font-size: 2.5rem; color: #cbd5e1; margin-bottom: 16px; display: block;"></i>
          <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 8px;">No encontramos productos con esos filtros</h3>
          <p style="color: var(--color-text-muted); font-size: 0.9rem; margin-bottom: 20px;">Prueba ajustando el rango de precio o cambiando la categoría seleccionada.</p>
          <button class="btn-primary" onclick="App.resetFilters()">Restablecer Filtros</button>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(createProductCardHTML).join("");
  }

  // ==========================================================================
  // CARRITO DE COMPRAS & DRAWER
  // ==========================================================================
  function updateCartUI() {
    const countBadges = document.querySelectorAll(".cart-count-badge");
    const totalCount = CartService.getTotalCount();

    countBadges.forEach((badge) => {
      badge.textContent = totalCount;
    });

    // Actualizar Drawer del Carrito
    renderCartDrawer();
  }

  function renderCartDrawer() {
    const listContainer = document.getElementById("cart-items-container");
    const subtotalEl = document.getElementById("cart-subtotal-display");
    const discountLineEl = document.getElementById("cart-discount-line");
    const discountEl = document.getElementById("cart-discount-display");
    const shippingEl = document.getElementById("cart-shipping-display");
    const totalEl = document.getElementById("cart-total-display");
    const freeShippingTextEl = document.getElementById("free-shipping-text");
    const freeShippingBarEl = document.getElementById("free-shipping-progress");

    if (!listContainer) return;

    const items = CartService.getItems();
    const subtotal = CartService.getSubtotal();
    const discount = CartService.getDiscountAmount();
    const coupon = CartService.getAppliedCoupon();
    const shipping = CartService.getShippingCost(state.shippingMethod);
    const total = CartService.getTotal(state.shippingMethod);
    const freeShipping = CartService.getFreeShippingProgress();

    // Barra de envío gratis
    if (freeShippingTextEl && freeShippingBarEl) {
      if (freeShipping.reached) {
        freeShippingTextEl.innerHTML = `<i class="fas fa-check-circle" style="color: var(--color-success)"></i> <strong>¡Felicidades! Tienes Envío Gratis a todo el país</strong>`;
        freeShippingBarEl.style.width = "100%";
      } else {
        freeShippingTextEl.innerHTML = `<i class="fas fa-truck"></i> Agrega <strong>${formatMoney(freeShipping.remaining)}</strong> más para obtener <strong>Envío Gratis</strong>`;
        freeShippingBarEl.style.width = `${freeShipping.percentage}%`;
      }
    }

    // Lista de ítems
    if (items.length === 0) {
      listContainer.innerHTML = `
        <div class="cart-empty-message">
          <div class="cart-empty-icon"><i class="fas fa-shopping-bag"></i></div>
          <h4 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 6px;">Tu carrito está vacío</h4>
          <p style="font-size: 0.88rem; margin-bottom: 24px;">Descubre nuestras piezas de sastrería y renueva tu guardarropa.</p>
          <button class="btn-primary" onclick="App.closeCart(); App.scrollToSection('catalogo-section')">
            Explorar Catálogo
          </button>
        </div>
      `;
    } else {
      listContainer.innerHTML = items
        .map(
          (item) => `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}" class="cart-item-thumb">
          <div class="cart-item-details">
            <h5 class="cart-item-title">${item.name}</h5>
            <div class="cart-item-specs">
              <span>Talle: <strong>${item.size}</strong></span> | 
              <span>Color: <strong>${item.color}</strong></span>
            </div>
            <div class="cart-item-bottom">
              <div class="quantity-stepper">
                <button class="stepper-btn" onclick="App.changeCartQuantity('${item.cartItemId}', ${item.quantity - 1})">-</button>
                <span class="stepper-value">${item.quantity}</span>
                <button class="stepper-btn" onclick="App.changeCartQuantity('${item.cartItemId}', ${item.quantity + 1})">+</button>
              </div>
              <div>
                <span class="cart-item-price">${formatMoney(item.price * item.quantity)}</span>
                <span class="cart-item-remove-btn" onclick="App.removeCartItem('${item.cartItemId}')">Eliminar</span>
              </div>
            </div>
          </div>
        </div>
      `
        )
        .join("");
    }

    // Totales
    if (subtotalEl) subtotalEl.textContent = formatMoney(subtotal);

    if (discountLineEl && discountEl) {
      if (coupon && discount > 0) {
        discountLineEl.classList.remove("hidden");
        discountEl.textContent = `-${formatMoney(discount)} (${coupon.code})`;
      } else {
        discountLineEl.classList.add("hidden");
      }
    }

    if (shippingEl) {
      shippingEl.textContent = shipping === 0 ? "Gratis" : formatMoney(shipping);
      if (shipping === 0) shippingEl.style.color = "var(--color-success)";
      else shippingEl.style.color = "inherit";
    }

    if (totalEl) totalEl.textContent = formatMoney(total);
  }

  // ==========================================================================
  // VISTA RÁPIDA (MODAL)
  // ==========================================================================
  function openQuickView(productId) {
    const product = PRODUCTS.find((p) => p.id === Number(productId));
    if (!product) return;

    state.quickViewProduct = product;
    state.quickViewSelectedSize = product.sizes ? product.sizes[0] : "Único";
    state.quickViewSelectedColor = product.colors ? product.colors[0].name : "Estándar";
    state.quickViewQuantity = 1;

    const modalBox = document.getElementById("quickview-modal-content");
    const overlay = document.getElementById("quickview-modal-overlay");

    if (!modalBox || !overlay) return;

    const installments = Math.round(product.price / 3);

    // Thumbnails
    const thumbsHTML = (product.images || [])
      .map(
        (img, idx) => `
        <img src="${img}" alt="${product.name}" class="quickview-thumb ${idx === 0 ? "active" : ""}" 
             onclick="App.changeQuickViewImage('${img}', this)">
      `
      )
      .join("");

    // Sizes
    const sizesHTML = (product.sizes || [])
      .map(
        (size, idx) => `
        <button class="size-chip ${idx === 0 ? "selected" : ""}" onclick="App.selectQuickViewSize('${size}', this)">
          ${size}
        </button>
      `
      )
      .join("");

    // Colors
    const colorsHTML = (product.colors || [])
      .map(
        (c, idx) => `
        <label style="display: flex; align-items: center; gap: 8px; font-size: 0.85rem; cursor: pointer; padding: 4px 8px; border: 1px solid var(--color-border); border-radius: 4px; ${idx === 0 ? "border-color: var(--color-primary); font-weight: bold;" : ""}" 
               onclick="App.selectQuickViewColor('${c.name}', this)">
          <span style="width: 14px; height: 14px; border-radius: 50%; background-color: ${c.hex}; display: inline-block;"></span>
          ${c.name}
        </label>
      `
      )
      .join("");

    // Detalles lista
    const detailsListHTML = (product.details || [])
      .map((d) => `<li style="margin-bottom: 6px;"><i class="fas fa-check" style="color: var(--color-accent); margin-right: 8px; font-size: 0.8rem;"></i>${d}</li>`)
      .join("");

    modalBox.innerHTML = `
      <div class="quickview-grid">
        <div class="quickview-gallery">
          <img src="${product.images[0]}" alt="${product.name}" id="quickview-active-image" class="quickview-main-img">
          <div class="quickview-thumbs">${thumbsHTML}</div>
        </div>

        <div class="quickview-details">
          <span class="product-category-tag">${product.categoryLabel}</span>
          <h2>${product.name}</h2>
          
          <div class="product-rating" style="margin-bottom: 12px;">
            <i class="fas fa-star"></i>
            <span style="font-weight: 700; color: #111;">${product.rating.toFixed(1)}</span>
            <span>(${product.reviewsCount} reseñas verificadas)</span>
          </div>

          <div class="quickview-price-box">
            <span class="quickview-price">${formatMoney(product.price)}</span>
            ${product.originalPrice ? `<span class="quickview-original-price">${formatMoney(product.originalPrice)}</span>` : ""}
          </div>

          <div style="background: var(--color-surface-alt); padding: 10px 14px; border-radius: 6px; font-size: 0.85rem; margin-bottom: 16px;">
            <i class="far fa-credit-card" style="color: var(--color-accent); margin-right: 6px;"></i>
            <strong>3 cuotas fijas sin interés de ${formatMoney(installments)}</strong> con todas las tarjetas.
          </div>

          <p class="quickview-desc">${product.description}</p>

          <div style="font-size: 0.85rem; color: var(--color-text-main); margin-bottom: 16px; border-top: 1px solid var(--color-border); padding-top: 12px;">
            <strong>Composición:</strong> ${product.fabric}<br>
            <strong>Corte / Calce:</strong> ${product.fit}
          </div>

          <div class="quickview-option-group">
            <div class="option-group-label">
              <span>Seleccionar Color</span>
              <span id="quickview-color-indicator" style="color: var(--color-accent); text-transform: none;">${state.quickViewSelectedColor}</span>
            </div>
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
              ${colorsHTML}
            </div>
          </div>

          <div class="quickview-option-group">
            <div class="option-group-label">
              <span>Seleccionar Talle</span>
              <span class="size-guide-link" onclick="App.openSizeGuideModal()"><i class="fas fa-ruler-horizontal"></i> Guía de Talles</span>
            </div>
            <div class="size-chips-grid">
              ${sizesHTML}
            </div>
          </div>

          <div class="quickview-actions">
            <div class="quantity-stepper" style="height: 48px;">
              <button class="stepper-btn" style="width: 40px; font-size: 1.1rem;" onclick="App.changeQuickViewQty(-1)">-</button>
              <span class="stepper-value" id="quickview-qty-val" style="width: 44px; font-size: 1rem;">1</span>
              <button class="stepper-btn" style="width: 40px; font-size: 1.1rem;" onclick="App.changeQuickViewQty(1)">+</button>
            </div>

            <button class="btn-primary" style="flex: 1; height: 48px;" onclick="App.submitQuickViewAddToCart()">
              <i class="fas fa-shopping-bag"></i> Agregar al Carrito
            </button>
          </div>

          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid var(--color-border);">
            <h5 style="font-size: 0.88rem; font-weight: 700; margin-bottom: 8px; text-transform: uppercase;">Especificaciones Destacadas:</h5>
            <ul style="font-size: 0.82rem; color: var(--color-text-muted);">
              ${detailsListHTML}
            </ul>
          </div>
        </div>
      </div>
    `;

    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeQuickView() {
    const overlay = document.getElementById("quickview-modal-overlay");
    if (overlay) overlay.classList.remove("open");
    document.body.style.overflow = "";
    state.quickViewProduct = null;
  }

  function changeQuickViewImage(src, thumbEl) {
    const mainImg = document.getElementById("quickview-active-image");
    if (mainImg) mainImg.src = src;

    document.querySelectorAll(".quickview-thumb").forEach((t) => t.classList.remove("active"));
    if (thumbEl) thumbEl.classList.add("active");
  }

  function selectQuickViewSize(size, el) {
    state.quickViewSelectedSize = size;
    document.querySelectorAll(".quickview-details .size-chip").forEach((btn) => btn.classList.remove("selected"));
    if (el) el.classList.add("selected");
  }

  function selectQuickViewColor(colorName, el) {
    state.quickViewSelectedColor = colorName;
    const indicator = document.getElementById("quickview-color-indicator");
    if (indicator) indicator.textContent = colorName;

    const parent = el.parentElement;
    if (parent) {
      parent.querySelectorAll("label").forEach((lbl) => {
        lbl.style.borderColor = "var(--color-border)";
        lbl.style.fontWeight = "normal";
      });
      el.style.borderColor = "var(--color-primary)";
      el.style.fontWeight = "bold";
    }
  }

  function changeQuickViewQty(delta) {
    let newQty = state.quickViewQuantity + delta;
    if (newQty < 1) newQty = 1;
    if (newQty > 10) newQty = 10;
    state.quickViewQuantity = newQty;

    const valEl = document.getElementById("quickview-qty-val");
    if (valEl) valEl.textContent = newQty;
  }

  function submitQuickViewAddToCart() {
    if (!state.quickViewProduct) return;

    CartService.addItem(
      state.quickViewProduct.id,
      state.quickViewSelectedSize,
      state.quickViewSelectedColor,
      state.quickViewQuantity
    );

    closeQuickView();
    openCart();
    showToast(`"${state.quickViewProduct.name}" agregado al carrito`, "success");
  }

  function quickAddToCart(productId) {
    const product = PRODUCTS.find((p) => p.id === Number(productId));
    if (!product) return;

    const defaultSize = product.sizes ? product.sizes[0] : "Único";
    const defaultColor = product.colors ? product.colors[0].name : "Estándar";

    CartService.addItem(product.id, defaultSize, defaultColor, 1);
    openCart();
    showToast(`Agregaste "${product.name}" al carrito`, "success");
  }

  // ==========================================================================
  // CHECKOUT MODAL & FINALIZACIÓN DE COMPRA
  // ==========================================================================
  function openCheckout() {
    const items = CartService.getItems();
    if (items.length === 0) {
      showToast("Tu carrito está vacío. Agrega prendas para continuar.", "error");
      return;
    }

    closeCart();
    renderCheckoutSummary();

    const overlay = document.getElementById("checkout-modal-overlay");
    if (overlay) {
      overlay.classList.add("open");
      document.body.style.overflow = "hidden";
    }
  }

  function closeCheckout() {
    const overlay = document.getElementById("checkout-modal-overlay");
    if (overlay) overlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  function renderCheckoutSummary() {
    const container = document.getElementById("checkout-order-items");
    const subtotalEl = document.getElementById("checkout-subtotal-val");
    const discountEl = document.getElementById("checkout-discount-val");
    const discountRow = document.getElementById("checkout-discount-row");
    const shippingEl = document.getElementById("checkout-shipping-val");
    const totalEl = document.getElementById("checkout-total-val");

    if (!container) return;

    const items = CartService.getItems();
    const subtotal = CartService.getSubtotal();
    const discount = CartService.getDiscountAmount();
    const coupon = CartService.getAppliedCoupon();
    const shipping = CartService.getShippingCost(state.shippingMethod);
    const total = CartService.getTotal(state.shippingMethod);

    container.innerHTML = items
      .map(
        (i) => `
        <div style="display: flex; gap: 12px; margin-bottom: 12px; font-size: 0.85rem;">
          <img src="${i.image}" style="width: 44px; height: 55px; object-fit: cover; border-radius: 4px;">
          <div style="flex: 1;">
            <div style="font-weight: 700; line-height: 1.2;">${i.name}</div>
            <div style="color: var(--color-text-muted); font-size: 0.78rem;">${i.size} | ${i.color} x${i.quantity}</div>
          </div>
          <div style="font-weight: 700;">${formatMoney(i.price * i.quantity)}</div>
        </div>
      `
      )
      .join("");

    if (subtotalEl) subtotalEl.textContent = formatMoney(subtotal);

    if (discountRow && discountEl) {
      if (coupon && discount > 0) {
        discountRow.classList.remove("hidden");
        discountEl.textContent = `-${formatMoney(discount)}`;
      } else {
        discountRow.classList.add("hidden");
      }
    }

    if (shippingEl) {
      shippingEl.textContent = shipping === 0 ? "Gratis" : formatMoney(shipping);
    }

    if (totalEl) totalEl.textContent = formatMoney(total);
  }

  function submitCheckoutOrder(e) {
    if (e) e.preventDefault();

    const name = document.getElementById("checkout-name")?.value || "";
    const email = document.getElementById("checkout-email")?.value || "";
    const phone = document.getElementById("checkout-phone")?.value || "";
    const address = document.getElementById("checkout-address")?.value || "";
    const paymentMethod = document.querySelector('input[name="checkout-payment"]:checked')?.value || "tarjeta";

    if (!name || !email || !address) {
      showToast("Por favor completa los campos obligatorios del pedido.", "error");
      return;
    }

    // Generar ID de pedido único
    const orderNumber = "VNT-" + Math.floor(100000 + Math.random() * 900000);
    const items = CartService.getItems();
    const total = CartService.getTotal(state.shippingMethod);

    // Pantalla de éxito de compra
    const modalContent = document.getElementById("checkout-modal-content");
    if (modalContent) {
      modalContent.innerHTML = `
        <div style="padding: 48px 32px; text-align: center; max-width: 600px; margin: 0 auto;">
          <div style="width: 72px; height: 72px; border-radius: 50%; background: var(--color-success-bg); color: var(--color-success); display: flex; align-items: center; justify-content: center; font-size: 2.2rem; margin: 0 auto 20px;">
            <i class="fas fa-check"></i>
          </div>
          <h2 style="font-family: var(--font-serif); font-size: 2rem; margin-bottom: 8px;">¡Muchas Gracias por tu Compra!</h2>
          <p style="font-size: 1.05rem; color: var(--color-text-muted); margin-bottom: 24px;">Tu orden ha sido confirmada con éxito y ya está en preparación.</p>
          
          <div style="background: var(--color-surface-alt); border: 1px dashed var(--color-border); border-radius: 8px; padding: 20px; text-align: left; margin-bottom: 28px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
              <span style="font-size: 0.9rem; color: var(--color-text-muted);">Número de Pedido:</span>
              <strong style="font-size: 1rem; color: var(--color-primary);">${orderNumber}</strong>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
              <span style="font-size: 0.9rem; color: var(--color-text-muted);">Comprador:</span>
              <strong>${name}</strong>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
              <span style="font-size: 0.9rem; color: var(--color-text-muted);">Email de confirmación:</span>
              <strong>${email}</strong>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
              <span style="font-size: 0.9rem; color: var(--color-text-muted);">Destino de Envío:</span>
              <strong>${address}</strong>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
              <span style="font-size: 0.9rem; color: var(--color-text-muted);">Método de Pago:</span>
              <strong style="text-transform: capitalize;">${paymentMethod}</strong>
            </div>
            <div style="display: flex; justify-content: space-between; border-top: 1px solid var(--color-border); padding-top: 10px; margin-top: 10px;">
              <span style="font-size: 1rem; font-weight: 700;">Total Abonado:</span>
              <strong style="font-size: 1.25rem; color: var(--color-accent);">${formatMoney(total)}</strong>
            </div>
          </div>

          <p style="font-size: 0.85rem; color: var(--color-text-light); margin-bottom: 28px;">
            Hemos enviado el comprobante electrónico y el código de seguimiento a tu correo electrónico. Ante cualquier duda, nuestro concierge sastorial está a tu disposición vía WhatsApp.
          </p>

          <button class="btn-primary" onclick="App.finalizeOrderAndReset()">
            Volver a la Tienda
          </button>
        </div>
      `;
    }

    CartService.clearCart();
    showToast(`¡Orden ${orderNumber} confirmada con éxito!`, "success");
  }

  function finalizeOrderAndReset() {
    closeCheckout();
    location.reload();
  }

  // ==========================================================================
  // MODAL DE FAVORITOS (WISHLIST)
  // ==========================================================================
  function toggleWishlist(productId) {
    const result = CartService.toggleWishlist(productId);
    updateWishlistUI();

    const product = PRODUCTS.find((p) => p.id === Number(productId));
    const title = product ? product.name : "Producto";

    if (result.added) {
      showToast(`"${title}" guardado en tus favoritos`, "success");
    } else {
      showToast(`"${title}" quitado de favoritos`, "info");
    }

    // Re-renderizar productos para actualizar corazones
    renderHomeFeatured();
    renderCatalog();
  }

  function updateWishlistUI() {
    const badge = document.getElementById("wishlist-count-badge");
    const list = CartService.getWishlist();
    if (badge) badge.textContent = list.length;
  }

  function openWishlistModal() {
    const modalBox = document.getElementById("wishlist-modal-content");
    const overlay = document.getElementById("wishlist-modal-overlay");
    if (!modalBox || !overlay) return;

    const wishlistIds = CartService.getWishlist();
    const items = PRODUCTS.filter((p) => wishlistIds.includes(p.id));

    if (items.length === 0) {
      modalBox.innerHTML = `
        <div style="text-align: center; padding: 48px 24px;">
          <i class="far fa-heart" style="font-size: 3rem; color: #cbd5e1; margin-bottom: 16px;"></i>
          <h3 style="font-size: 1.3rem; margin-bottom: 8px;">Aún no tienes prendas en favoritos</h3>
          <p style="color: var(--color-text-muted); margin-bottom: 24px;">Haz clic en el corazón de cualquier prenda para guardarla aquí.</p>
          <button class="btn-primary" onclick="App.closeWishlistModal(); App.scrollToSection('catalogo-section')">Explorar Colección</button>
        </div>
      `;
    } else {
      modalBox.innerHTML = `
        <div style="padding: 28px;">
          <h3 style="font-family: var(--font-serif); font-size: 1.5rem; margin-bottom: 20px; display: flex; align-items: center; justify-content: space-between;">
            <span><i class="fas fa-heart" style="color: var(--color-danger); margin-right: 8px;"></i> Mis Favoritos (${items.length})</span>
          </h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 20px;">
            ${items
              .map(
                (p) => `
              <div style="border: 1px solid var(--color-border); border-radius: 8px; overflow: hidden; background: #fff;">
                <img src="${p.images[0]}" style="width: 100%; height: 220px; object-fit: cover;">
                <div style="padding: 14px;">
                  <h4 style="font-size: 0.9rem; font-weight: 700; margin-bottom: 6px;">${p.name}</h4>
                  <div style="font-weight: 800; color: var(--color-primary); margin-bottom: 12px;">${formatMoney(p.price)}</div>
                  <div style="display: flex; gap: 8px;">
                    <button class="btn-primary" style="flex: 1; padding: 8px; font-size: 0.8rem;" onclick="App.quickAddToCart(${p.id})">
                      Al Carrito
                    </button>
                    <button style="padding: 8px; border: 1px solid var(--color-border); border-radius: 4px; color: var(--color-danger);" onclick="App.toggleWishlist(${p.id}); App.openWishlistModal();">
                      <i class="fas fa-trash-alt"></i>
                    </button>
                  </div>
                </div>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
      `;
    }

    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeWishlistModal() {
    const overlay = document.getElementById("wishlist-modal-overlay");
    if (overlay) overlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  // ==========================================================================
  // BUSCADOR EN VIVO (LIVE SEARCH PREDICTIVO)
  // ==========================================================================
  function setupSearch() {
    const searchInput = document.getElementById("header-search-input");
    const dropdown = document.getElementById("header-search-dropdown");

    if (!searchInput || !dropdown) return;

    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.trim().toLowerCase();
      if (query.length < 2) {
        dropdown.classList.remove("active");
        dropdown.innerHTML = "";
        return;
      }

      const matches = PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.categoryLabel.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      ).slice(0, 5);

      if (matches.length === 0) {
        dropdown.innerHTML = `<div style="padding: 16px; text-align: center; color: var(--color-text-muted); font-size: 0.88rem;">No se encontraron resultados para "${e.target.value}"</div>`;
      } else {
        dropdown.innerHTML = matches
          .map(
            (p) => `
          <div class="search-result-item" onclick="App.openQuickView(${p.id}); App.closeSearchDropdown();">
            <img src="${p.images[0]}" alt="${p.name}" class="search-result-thumb">
            <div class="search-result-info">
              <div class="search-result-name">${p.name}</div>
              <div class="search-result-price">${formatMoney(p.price)}</div>
            </div>
            <i class="fas fa-chevron-right" style="color: var(--color-text-light); font-size: 0.8rem;"></i>
          </div>
        `
          )
          .join("");
      }

      dropdown.classList.add("active");
    });

    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        state.searchQuery = searchInput.value;
        dropdown.classList.remove("active");
        scrollToSection("catalogo-section");
        renderCatalog();
      }
    });

    document.addEventListener("click", (e) => {
      if (!searchInput.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove("active");
      }
    });
  }

  function closeSearchDropdown() {
    const dropdown = document.getElementById("header-search-dropdown");
    if (dropdown) dropdown.classList.remove("active");
  }

  // ==========================================================================
  // MODAL DE GUÍA DE TALLES
  // ==========================================================================
  function openSizeGuideModal() {
    const overlay = document.getElementById("sizeguide-modal-overlay");
    if (overlay) {
      overlay.classList.add("open");
      document.body.style.overflow = "hidden";
    }
  }

  function closeSizeGuideModal() {
    const overlay = document.getElementById("sizeguide-modal-overlay");
    if (overlay) overlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  function switchSizeTab(category, btn) {
    document.querySelectorAll(".size-tab-btn").forEach((b) => b.classList.remove("active"));
    if (btn) btn.classList.add("active");

    document.querySelectorAll(".size-table-view").forEach((tbl) => tbl.classList.add("hidden"));
    const activeTable = document.getElementById(`size-table-${category}`);
    if (activeTable) activeTable.classList.remove("hidden");
  }

  // ==========================================================================
  // SCROLL Y NAVEGACIÓN
  // ==========================================================================
  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 90;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    closeMobileNav();
  }

  function openCart() {
    const overlay = document.getElementById("cart-drawer-overlay");
    const drawer = document.getElementById("cart-drawer");
    if (overlay && drawer) {
      overlay.classList.add("open");
      drawer.classList.add("open");
      document.body.style.overflow = "hidden";
    }
    renderCartDrawer();
  }

  function closeCart() {
    const overlay = document.getElementById("cart-drawer-overlay");
    const drawer = document.getElementById("cart-drawer");
    if (overlay && drawer) {
      overlay.classList.remove("open");
      drawer.classList.remove("open");
      document.body.style.overflow = "";
    }
  }

  function toggleMobileNav() {
    const drawer = document.getElementById("mobile-nav-drawer");
    if (drawer) drawer.classList.toggle("open");
  }

  function closeMobileNav() {
    const drawer = document.getElementById("mobile-nav-drawer");
    if (drawer) drawer.classList.remove("open");
  }

  // ==========================================================================
  // FILTROS Y CATEGORÍAS
  // ==========================================================================
  function selectCategory(catId) {
    state.currentCategory = catId;
    state.searchQuery = "";

    // Actualizar radio buttons o navegación activa
    document.querySelectorAll(".category-radio-input").forEach((input) => {
      input.checked = input.value === catId;
    });

    document.querySelectorAll(".nav-link-item a").forEach((a) => {
      a.classList.remove("active");
      if (a.getAttribute("data-category") === catId) a.classList.add("active");
    });

    scrollToSection("catalogo-section");
    renderCatalog();
  }

  function setHomeTab(tabName, btn) {
    state.homeActiveTab = tabName;
    document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
    if (btn) btn.classList.add("active");
    renderHomeFeatured();
  }

  function setSort(sortValue) {
    state.currentSort = sortValue;
    renderCatalog();
  }

  function setMaxPrice(price) {
    state.maxPrice = Number(price);
    const display = document.getElementById("price-slider-display");
    if (display) display.textContent = formatMoney(state.maxPrice);
    renderCatalog();
  }

  function setSizeFilter(size, chipEl) {
    if (state.selectedSize === size) {
      state.selectedSize = "todos";
      chipEl.classList.remove("selected");
    } else {
      state.selectedSize = size;
      document.querySelectorAll(".catalog-sidebar .size-chip").forEach((c) => c.classList.remove("selected"));
      chipEl.classList.add("selected");
    }
    renderCatalog();
  }

  function resetFilters() {
    state.currentCategory = "todos";
    state.maxPrice = 300000;
    state.selectedSize = "todos";
    state.searchQuery = "";
    state.currentSort = "destacados";

    const priceSlider = document.getElementById("price-slider-range");
    if (priceSlider) priceSlider.value = 300000;
    const priceDisplay = document.getElementById("price-slider-display");
    if (priceDisplay) priceDisplay.textContent = formatMoney(300000);

    const sortSelect = document.getElementById("catalog-sort-select");
    if (sortSelect) sortSelect.value = "destacados";

    document.querySelectorAll(".category-radio-input").forEach((r) => (r.checked = r.value === "todos"));
    document.querySelectorAll(".catalog-sidebar .size-chip").forEach((c) => c.classList.remove("selected"));

    renderCatalog();
  }

  // ==========================================================================
  // CUPONES Y CAMBIO DE CANTIDADES
  // ==========================================================================
  function applyCouponCode() {
    const input = document.getElementById("cart-coupon-input");
    if (!input) return;

    const res = CartService.applyCoupon(input.value);
    if (res.success) {
      showToast(`¡Cupón "${res.coupon.code}" aplicado con éxito! Descuento: ${res.coupon.discountPercent}%`, "success");
      input.value = "";
    } else {
      showToast(res.message, "error");
    }
  }

  function changeCartQuantity(cartItemId, qty) {
    CartService.updateQuantity(cartItemId, qty);
  }

  function removeCartItem(cartItemId) {
    CartService.removeItem(cartItemId);
    showToast("Prenda retirada del carrito", "info");
  }

  // ==========================================================================
  // INICIALIZACIÓN GENERAL
  // ==========================================================================
  function init() {
    // Escuchar eventos globales de cambio de carrito
    window.addEventListener("vanguard:cart-updated", () => {
      updateCartUI();
      if (document.getElementById("checkout-modal-overlay")?.classList.contains("open")) {
        renderCheckoutSummary();
      }
    });

    // Renderizar grillas
    renderHomeFeatured();
    renderCatalog();
    updateCartUI();
    updateWishlistUI();
    setupSearch();

    // FAQ Accordion click handler
    document.querySelectorAll(".faq-question").forEach((btn) => {
      btn.addEventListener("click", () => {
        const item = btn.parentElement;
        const isOpen = item.classList.contains("open");
        document.querySelectorAll(".faq-item").forEach((f) => f.classList.remove("open"));
        if (!isOpen) item.classList.add("open");
      });
    });

    // Newsletter submit
    const newsletterForm = document.getElementById("newsletter-form");
    if (newsletterForm) {
      newsletterForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const input = document.getElementById("newsletter-email");
        if (input && input.value) {
          showToast(`¡Te has suscrito con éxito! Usa el cupón "VALENTI10" para tu 10% OFF.`, "success");
          input.value = "";
        }
      });
    }

    // Contact form submit
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        showToast("Mensaje enviado con éxito. Un asesor sastorial te contactará a la brevedad.", "success");
        contactForm.reset();
      });
    }

    // Sincronizar métodos de envío en checkout
    document.querySelectorAll('input[name="checkout-shipping"]').forEach((radio) => {
      radio.addEventListener("change", (e) => {
        state.shippingMethod = e.target.value;
        renderCheckoutSummary();
      });
    });
  }

  return {
    init,
    openCart,
    closeCart,
    toggleMobileNav,
    closeMobileNav,
    scrollToSection,
    selectCategory,
    setHomeTab,
    setSort,
    setMaxPrice,
    setSizeFilter,
    resetFilters,
    quickAddToCart,
    openQuickView,
    closeQuickView,
    changeQuickViewImage,
    selectQuickViewSize,
    selectQuickViewColor,
    changeQuickViewQty,
    submitQuickViewAddToCart,
    toggleWishlist,
    openWishlistModal,
    closeWishlistModal,
    openSizeGuideModal,
    closeSizeGuideModal,
    switchSizeTab,
    applyCouponCode,
    changeCartQuantity,
    removeCartItem,
    openCheckout,
    closeCheckout,
    submitCheckoutOrder,
    finalizeOrderAndReset,
    closeSearchDropdown
  };
})();
