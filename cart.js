/**
 * ═══════════════════════════════════════════════════════════════
 *  cart.js  —  MyShop Universal Cart
 *  Drop this file in your repo root and add ONE line to any page:
 *    <script src="cart.js" type="module"></script>
 *
 *  Then mark up your "Add to Cart" buttons like this:
 *    <button
 *      data-add-to-cart
 *      data-id="PRODUCT_ID"
 *      data-name="Product Name"
 *      data-price="999"
 *      data-original-price="1499"
 *      data-image="assets/images/product.jpg"
 *      data-category="Clothing"
 *      data-color="Black"
 *      data-size="M"
 *      data-stock="10"
 *      data-emoji="👕"
 *    >
 *      Add to Cart
 *    </button>
 *
 *  Also add this wherever you want the cart icon/badge:
 *    <a href="cart.html" data-cart-icon>
 *      🛒 <span data-cart-count></span>
 *    </a>
 * ═══════════════════════════════════════════════════════════════
 */

// ─────────────────────────────────────────────────────────────
// 🔧 PASTE YOUR FIREBASE CONFIG HERE (same as in cart.html)
// ─────────────────────────────────────────────────────────────
import { initializeApp, getApps }
  from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc }
  from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyByc62uc1v97pf5ZV26ycLA0SPmfsD5pTU",
  authDomain: "store890007.firebaseapp.com",
  databaseURL: "https://store890007-default-rtdb.firebaseio.com",
  projectId: "store890007",
  storageBucket: "store890007.firebasestorage.app",
  messagingSenderId: "987669883544",
  appId: "1:987669883544:web:dbdff7958f416b6089beed"
};

// ─────────────────────────────────────────────────────────────
// FIREBASE INIT — safe to include on multiple pages
// ─────────────────────────────────────────────────────────────
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
const db  = getFirestore(app);

// ─────────────────────────────────────────────────────────────
// GUEST SESSION — same logic as cart.html so they share a cart
// ─────────────────────────────────────────────────────────────
function getSession() {
  let id = localStorage.getItem("_shop_session");
  if (!id) {
    id = "guest_" + Math.random().toString(36).slice(2, 11);
    localStorage.setItem("_shop_session", id);
  }
  return id;
}
const SESSION  = getSession();
const cartRef  = doc(db, "carts", SESSION);

// ─────────────────────────────────────────────────────────────
// CART READ / WRITE
// ─────────────────────────────────────────────────────────────
async function loadCart() {
  try {
    const snap = await getDoc(cartRef);
    return snap.exists() ? (snap.data().items || []) : [];
  } catch {
    return JSON.parse(localStorage.getItem("_shop_cart_cache") || "[]");
  }
}

async function saveCart(items) {
  localStorage.setItem("_shop_cart_cache", JSON.stringify(items));
  try {
    await setDoc(cartRef, {
      items,
      sessionId: SESSION,
      updatedAt: new Date().toISOString()
    });
  } catch (e) {
    console.warn("cart.js: Firestore write failed, saved locally", e);
  }
}

// ─────────────────────────────────────────────────────────────
// ADD TO CART LOGIC
// ─────────────────────────────────────────────────────────────
async function addToCart(product) {
  const items = await loadCart();
  const existing = items.find(i => i.id === product.id);

  let updated;
  if (existing) {
    // Already in cart — bump quantity (max 10)
    updated = items.map(i =>
      i.id === product.id
        ? { ...i, qty: Math.min(10, i.qty + 1) }
        : i
    );
  } else {
    // New item
    updated = [...items, { ...product, qty: 1 }];
  }

  await saveCart(updated);
  return updated;
}

// ─────────────────────────────────────────────────────────────
// BADGE — updates all [data-cart-count] elements on the page
// ─────────────────────────────────────────────────────────────
function updateBadge(items) {
  const count = items.reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll("[data-cart-count]").forEach(el => {
    el.textContent = count > 0 ? count : "";
    el.style.display = count > 0 ? "inline-flex" : "none";
  });
  // Also style the cart icon wrapper if present
  document.querySelectorAll("[data-cart-icon]").forEach(el => {
    el.setAttribute("aria-label", `Cart — ${count} item${count !== 1 ? "s" : ""}`);
  });
}

// ─────────────────────────────────────────────────────────────
// TOAST NOTIFICATION
// ─────────────────────────────────────────────────────────────
function injectToastStyles() {
  if (document.getElementById("_cart_toast_style")) return;
  const style = document.createElement("style");
  style.id = "_cart_toast_style";
  style.textContent = `
    #_cart_toast {
      position: fixed; bottom: 24px; right: 24px; z-index: 99999;
      background: #111108; color: #fff;
      padding: 12px 18px; border-radius: 10px;
      font-size: 14px; font-family: 'Plus Jakarta Sans', sans-serif;
      display: flex; align-items: center; gap: 10px;
      transform: translateY(80px); opacity: 0;
      transition: all .3s cubic-bezier(.34,1.56,.64,1);
      pointer-events: none; max-width: 300px;
      box-shadow: 0 4px 20px rgba(0,0,0,.2);
    }
    #_cart_toast.show { transform: translateY(0); opacity: 1; pointer-events: all; }
    #_cart_toast a {
      color: #f97c50; font-weight: 700; text-decoration: none;
      font-size: 13px; flex-shrink: 0;
    }
    #_cart_toast a:hover { text-decoration: underline; }
  `;
  document.head.appendChild(style);
}

let _toastTimer;
function showToast(name) {
  injectToastStyles();
  let toast = document.getElementById("_cart_toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "_cart_toast";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span>🛒</span> <span><strong>${name}</strong> added!</span> <a href="cart.html">View Cart →</a>`;
  toast.classList.add("show");
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => toast.classList.remove("show"), 3000);
}

// ─────────────────────────────────────────────────────────────
// BUTTON ANIMATION — visual feedback on click
// ─────────────────────────────────────────────────────────────
function animateButton(btn, success) {
  const original = btn.innerHTML;
  const originalBg = btn.style.backgroundColor;
  btn.disabled = true;

  if (success) {
    btn.innerHTML = "✓ Added!";
    btn.style.backgroundColor = "#16a34a";
    btn.style.color = "#fff";
  } else {
    btn.innerHTML = "Already in cart ✓";
    btn.style.backgroundColor = "#2563eb";
    btn.style.color = "#fff";
  }

  setTimeout(() => {
    btn.innerHTML = original;
    btn.style.backgroundColor = originalBg;
    btn.style.color = "";
    btn.disabled = false;
  }, 1800);
}

// ─────────────────────────────────────────────────────────────
// READ PRODUCT DATA FROM A BUTTON'S data-* ATTRIBUTES
// ─────────────────────────────────────────────────────────────
function productFromButton(btn) {
  const d = btn.dataset;
  if (!d.id || !d.name || !d.price) {
    console.warn("cart.js: button missing required data-id / data-name / data-price", btn);
    return null;
  }
  return {
    id:            d.id,
    name:          d.name,
    price:         parseFloat(d.price),
    originalPrice: d.originalPrice ? parseFloat(d.originalPrice) : null,
    imageUrl:      d.image    || "",
    category:      d.category || "",
    color:         d.color    || "",
    size:          d.size     || "",
    stock:         d.stock    ? parseInt(d.stock) : 99,
    emoji:         d.emoji    || "📦",
  };
}

// ─────────────────────────────────────────────────────────────
// WIRE UP ALL [data-add-to-cart] BUTTONS ON THIS PAGE
// ─────────────────────────────────────────────────────────────
function wireButtons() {
  document.querySelectorAll("[data-add-to-cart]").forEach(btn => {
    if (btn._cartWired) return;       // don't double-bind
    btn._cartWired = true;

    btn.addEventListener("click", async (e) => {
      e.preventDefault();
      const product = productFromButton(btn);
      if (!product) return;

      const wasAlready = (await loadCart()).some(i => i.id === product.id);
      const updated    = await addToCart(product);
      updateBadge(updated);
      animateButton(btn, !wasAlready);
      showToast(product.name);
    });
  });
}

// ─────────────────────────────────────────────────────────────
// ALSO EXPOSE addToCart GLOBALLY for inline onclick= handlers
// e.g. onclick="CartJS.add({id:'p1', name:'...', price:999})"
// ─────────────────────────────────────────────────────────────
window.CartJS = {
  add: async function(product) {
    const updated = await addToCart(product);
    updateBadge(updated);
    showToast(product.name);
    return updated;
  },
  count: async function() {
    const items = await loadCart();
    return items.reduce((s, i) => s + i.qty, 0);
  },
  items: loadCart,
};

// ─────────────────────────────────────────────────────────────
// BOOT — load cart, set badge, wire buttons
// Also watches for dynamically added buttons (e.g. after JS render)
// ─────────────────────────────────────────────────────────────
async function boot() {
  const items = await loadCart();
  updateBadge(items);
  wireButtons();

  // Watch for buttons added later by JS frameworks / dynamic content
  const observer = new MutationObserver(() => wireButtons());
  observer.observe(document.body, { childList: true, subtree: true });
}

// Run after DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
