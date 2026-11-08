// ==========================================================================
// VANGUARD & CO. - SISTEMA DE CARRITO Y FAVORITOS (LOCALSTORAGE PERSISTENTE)
// ==========================================================================

const CartService = (function () {
  const CART_KEY = "vanguard_cart_v1";
  const WISHLIST_KEY = "vanguard_wishlist_v1";
  const COUPON_KEY = "vanguard_applied_coupon_v1";
  const FREE_SHIPPING_THRESHOLD = 50000;
  const STANDARD_SHIPPING_COST = 4500;

  // Cargar estado inicial
  function loadCart() {
    try {
      const data = localStorage.getItem(CART_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error("Error al leer el carrito:", e);
      return [];
    }
  }

  function saveCart(cart) {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
      emitChange();
    } catch (e) {
      console.error("Error al guardar el carrito:", e);
    }
  }

  function loadWishlist() {
    try {
      const data = localStorage.getItem(WISHLIST_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  function saveWishlist(list) {
    try {
      localStorage.setItem(WISHLIST_KEY, JSON.stringify(list));
      emitChange();
    } catch (e) {
      console.error("Error al guardar favoritos:", e);
    }
  }

  function loadCoupon() {
    try {
      const code = localStorage.getItem(COUPON_KEY);
      if (code && typeof COUPONS !== "undefined" && COUPONS[code]) {
        return { code, ...COUPONS[code] };
      }
      return null;
    } catch (e) {
      return null;
    }
  }

  function saveCoupon(coupon) {
    if (coupon && coupon.code) {
      localStorage.setItem(COUPON_KEY, coupon.code);
    } else {
      localStorage.removeItem(COUPON_KEY);
    }
    emitChange();
  }

  function emitChange() {
    window.dispatchEvent(new CustomEvent("vanguard:cart-updated"));
  }

  return {
    FREE_SHIPPING_THRESHOLD,
    STANDARD_SHIPPING_COST,

    getItems() {
      return loadCart();
    },

    addItem(productId, size, color, quantity = 1) {
      const product = PRODUCTS.find((p) => p.id === Number(productId));
      if (!product) return { success: false, message: "Producto no encontrado" };

      const cart = loadCart();
      const chosenSize = size || (product.sizes && product.sizes[0]) || "Único";
      const chosenColor = color || (product.colors && product.colors[0]?.name) || "Estándar";

      const cartItemId = `${productId}-${chosenSize}-${chosenColor}`;
      const existingIndex = cart.findIndex((item) => item.cartItemId === cartItemId);

      if (existingIndex > -1) {
        cart[existingIndex].quantity += quantity;
      } else {
        cart.push({
          cartItemId,
          productId: product.id,
          name: product.name,
          categoryLabel: product.categoryLabel,
          price: product.price,
          originalPrice: product.originalPrice,
          image: product.images[0],
          size: chosenSize,
          color: chosenColor,
          quantity: quantity
        });
      }

      saveCart(cart);
      return { success: true, item: cart.find((i) => i.cartItemId === cartItemId) };
    },

    updateQuantity(cartItemId, newQuantity) {
      let cart = loadCart();
      const index = cart.findIndex((item) => item.cartItemId === cartItemId);
      if (index === -1) return;

      if (newQuantity <= 0) {
        cart.splice(index, 1);
      } else {
        cart[index].quantity = newQuantity;
      }
      saveCart(cart);
    },

    removeItem(cartItemId) {
      let cart = loadCart();
      cart = cart.filter((item) => item.cartItemId !== cartItemId);
      saveCart(cart);
    },

    clearCart() {
      saveCart([]);
      this.removeCoupon();
    },

    getSubtotal() {
      const cart = loadCart();
      return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    },

    getTotalCount() {
      const cart = loadCart();
      return cart.reduce((acc, item) => acc + item.quantity, 0);
    },

    applyCoupon(code) {
      const cleanCode = (code || "").trim().toUpperCase();
      if (typeof COUPONS !== "undefined" && COUPONS[cleanCode]) {
        const coupon = { code: cleanCode, ...COUPONS[cleanCode] };
        saveCoupon(coupon);
        return { success: true, coupon };
      }
      return { success: false, message: "El cupón ingresado no es válido o ya caducó." };
    },

    removeCoupon() {
      saveCoupon(null);
    },

    getAppliedCoupon() {
      return loadCoupon();
    },

    getDiscountAmount() {
      const subtotal = this.getSubtotal();
      const coupon = this.getAppliedCoupon();
      if (!coupon || !coupon.discountPercent) return 0;
      return Math.round((subtotal * coupon.discountPercent) / 100);
    },

    getShippingCost(shippingMethod = "domicilio") {
      const subtotal = this.getSubtotal();
      if (subtotal === 0) return 0;
      if (shippingMethod === "sucursal") return 0;
      if (shippingMethod === "express") return STANDARD_SHIPPING_COST + 3500;
      if (subtotal >= FREE_SHIPPING_THRESHOLD) return 0;
      return STANDARD_SHIPPING_COST;
    },

    getTotal(shippingMethod = "domicilio") {
      const subtotal = this.getSubtotal();
      if (subtotal === 0) return 0;
      const discount = this.getDiscountAmount();
      const shipping = this.getShippingCost(shippingMethod);
      return Math.max(0, subtotal - discount + shipping);
    },

    getFreeShippingProgress() {
      const subtotal = this.getSubtotal();
      const percentage = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));
      const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
      return {
        reached: subtotal >= FREE_SHIPPING_THRESHOLD,
        percentage,
        remaining
      };
    },

    // --- WISHLIST (FAVORITOS) ---
    getWishlist() {
      return loadWishlist();
    },

    isInWishlist(productId) {
      const list = loadWishlist();
      return list.includes(Number(productId));
    },

    toggleWishlist(productId) {
      const id = Number(productId);
      let list = loadWishlist();
      let added = false;
      if (list.includes(id)) {
        list = list.filter((item) => item !== id);
      } else {
        list.push(id);
        added = true;
      }
      saveWishlist(list);
      return { added, total: list.length };
    }
  };
})();
