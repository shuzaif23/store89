// ===== STORE 89 — MAIN.JS =====

// === CUSTOM CURSOR ===
(function() {
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  if (!cursor || !ring) return;
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  function loop() {
    cursor.style.left = mx + 'px'; cursor.style.top = my + 'px';
    rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
    requestAnimationFrame(loop);
  }
  loop();
})();

// === NAVBAR ===
(function() {
  const nav = document.getElementById('mainNav');
  if (!nav) return;
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('mobileMenu');

  function updateNav() {
    if (window.scrollY > 40) nav.classList.add('nav-scrolled');
    else nav.classList.remove('nav-scrolled');
  }
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      toggle.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    menu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        menu.classList.remove('open');
        toggle.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }
})();

// === SCROLL REVEAL ===
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal:not(.visible)');
  if (!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
  }, { threshold: 0.12 });
  els.forEach(el => obs.observe(el));
}
document.addEventListener('DOMContentLoaded', initScrollReveal);

// === CART SYSTEM ===
const Cart = (() => {
  const KEY = 's89_cart';

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch { return []; }
  }

  function save(items) {
    localStorage.setItem(KEY, JSON.stringify(items));
    updateBadge();
  }

  function updateBadge() {
    const items = load();
    const count = items.reduce((s, i) => s + i.qty, 0);
    document.querySelectorAll('#cartBadge').forEach(el => el.textContent = count);
  }

  function add(product, size, qty = 1) {
    const items = load();
    const key = `${product.id}_${size}`;
    const existing = items.find(i => i.key === key);
    if (existing) {
      existing.qty += qty;
    } else {
      items.push({
        key, id: product.id, name: product.name,
        price: product.price, size, qty,
        category: product.category,
        svg: product.svg || '', viewBox: product.viewBox || '0 0 200 200',
        isCustom: product.isCustom || false
      });
    }
    save(items);
    showToast(product.name);
  }

  function remove(key) {
    const items = load().filter(i => i.key !== key);
    save(items);
  }

  function updateQty(key, qty) {
    const items = load();
    const item = items.find(i => i.key === key);
    if (item) { item.qty = Math.max(1, qty); save(items); }
  }

  function clear() { save([]); }

  function total() {
    return load().reduce((s, i) => s + i.price * i.qty, 0);
  }

  function showToast(name) {
    let toast = document.getElementById('cartToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'cartToast';
      toast.className = 'cart-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = `✓ Added: ${name}`;
    toast.classList.add('show');
    clearTimeout(toast._t);
    toast._t = setTimeout(() => toast.classList.remove('show'), 2800);
  }

  document.addEventListener('DOMContentLoaded', updateBadge);

  return { load, add, remove, updateQty, clear, total, showToast, updateBadge };
})();

