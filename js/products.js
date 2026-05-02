// ============================================================
//  STORE89 — Products Data
//  Firebase Firestore is the source of truth.
//  Falls back to PRODUCTS_DATA if Firebase is unavailable.
// ============================================================

import { initializeApp }    from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey:            "AIzaSyByc62uc1v97pf5ZV26ycLA0SPmfsD5pTU",
  authDomain:        "store890007.firebaseapp.com",
  projectId:         "store890007",
  storageBucket:     "store890007.firebasestorage.app",
  messagingSenderId: "987669883544",
  appId:             "1:987669883544:web:dbdff7958f416b6089beed"
};

const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);

// ---- DEFAULT / FALLBACK PRODUCTS ----
const PRODUCTS_DATA = [
  { id:1,  name:"ACID WAVE",      category:"tee",    price:799, sizes:["XS","S","M","L","XL","XXL"], badge:"New", isNew:true,  isBW:false, dateAdded:"2024-11-01", desc:"Melting acid wave graphic on premium cotton. Oversized fit, dropped shoulders. 180 GSM.", viewBox:"0 0 200 200", svg:`<rect width="200" height="200" fill="#111"/><path d="M20 140 Q50 80 80 140 Q110 200 140 140 Q170 80 200 140" stroke="#e8ff00" stroke-width="3" fill="none" opacity="0.9"/><text x="100" y="60" font-family="Bebas Neue,sans-serif" font-size="18" fill="#e8ff00" text-anchor="middle" letter-spacing="3">ACID WAVE</text><circle cx="100" cy="100" r="4" fill="#e8ff00" opacity="0.8"/>` },
  { id:2,  name:"NEGATIVE SPACE", category:"tee",    price:849, sizes:["XS","S","M","L","XL","XXL"], badge:null,   isNew:false, isBW:false, dateAdded:"2024-10-15", desc:"Bold geometric cut-out design. Minimal, intentional, loud. 200 GSM heavyweight cotton.",   viewBox:"0 0 200 200", svg:`<rect width="200" height="200" fill="#111"/><rect x="40" y="40" width="120" height="120" fill="none" stroke="#fff" stroke-width="2"/><rect x="70" y="70" width="60" height="60" fill="#e8ff00"/><rect x="85" y="85" width="30" height="30" fill="#111"/>` },
  { id:3,  name:"GHOST CITY",     category:"tee",    price:899, sizes:["S","M","L","XL","XXL"],       badge:"Hot",  isNew:false, isBW:false, dateAdded:"2024-10-01", desc:"Urban skyline faded into obscurity. Screen printed distressed finish. Premium boxy cut.",   viewBox:"0 0 200 200", svg:`<rect width="200" height="200" fill="#0d0d0d"/><rect x="50" y="90" width="30" height="90" fill="#1e1e1e"/><rect x="125" y="80" width="35" height="100" fill="#1a1a1a"/><text x="100" y="70" font-family="Bebas Neue,sans-serif" font-size="14" fill="#444" text-anchor="middle" letter-spacing="4">GHOST CITY</text>` },
  { id:4,  name:"RAW 89",         category:"tee",    price:749, sizes:["XS","S","M","L","XL"],        badge:null,   isNew:false, isBW:false, dateAdded:"2024-09-20", desc:"The signature piece. Bold 89 emblem on chest. Simple, raw, essential.",                    viewBox:"0 0 200 200", svg:`<rect width="200" height="200" fill="#111"/><text x="100" y="130" font-family="Bebas Neue,sans-serif" font-size="90" fill="#e8ff00" text-anchor="middle" opacity="0.9" letter-spacing="-2">89</text><text x="100" y="160" font-family="Bebas Neue,sans-serif" font-size="14" fill="#333" text-anchor="middle" letter-spacing="8">STORE</text>` },
  { id:5,  name:"VOID MONO",      category:"tee",    price:829, sizes:["S","M","L","XL","XXL"],       badge:"New",  isNew:true,  isBW:true,  dateAdded:"2024-11-05", desc:"Pure black tee. White VOID print. Heavyweight cotton. The definitive B&W piece.",          viewBox:"0 0 200 200", svg:`<rect width="200" height="200" fill="#0a0a0a"/><text x="100" y="110" font-family="Bebas Neue,sans-serif" font-size="42" fill="#fff" text-anchor="middle" letter-spacing="6">VOID</text><text x="100" y="135" font-family="Bebas Neue,sans-serif" font-size="16" fill="#333" text-anchor="middle" letter-spacing="12">MONO</text>` },
  { id:6,  name:"STATIC NOISE",   category:"tee",    price:879, sizes:["XS","S","M","L","XL","XXL"], badge:null,   isNew:false, isBW:true,  dateAdded:"2024-10-10", desc:"All-over static texture sublimation print. White tee base. Chaotic energy.",              viewBox:"0 0 200 200", svg:`<rect width="200" height="200" fill="#f0f0f0"/><text x="100" y="110" font-family="Bebas Neue,sans-serif" font-size="30" fill="#000" text-anchor="middle" letter-spacing="4" opacity="0.85">STATIC</text>` },
  { id:7,  name:"MONO BLOC",      category:"tee",    price:799, sizes:["S","M","L","XL"],             badge:"B&W",  isNew:false, isBW:true,  dateAdded:"2024-09-15", desc:"Blocky typography meets brutalist layout. Black on white. Minimal and loud.",              viewBox:"0 0 200 200", svg:`<rect width="200" height="200" fill="#fff"/><rect x="20" y="60" width="160" height="80" fill="#000"/><text x="100" y="115" font-family="Bebas Neue,sans-serif" font-size="36" fill="#fff" text-anchor="middle" letter-spacing="2">MONO BLOC</text>` },
  { id:8,  name:"SIGNAL LOST",    category:"poster", price:399, sizes:["A4","A3","A2"],               badge:"New",  isNew:true,  isBW:false, dateAdded:"2024-11-03", desc:"Glitch-inspired signal interference graphic. Print on 170 GSM matte art paper.",          viewBox:"0 0 140 200", svg:`<rect width="140" height="200" fill="#0d0d0d"/><text x="70" y="80" font-family="Bebas Neue,sans-serif" font-size="26" fill="#e8ff00" text-anchor="middle" letter-spacing="2">SIGNAL</text><text x="70" y="110" font-family="Bebas Neue,sans-serif" font-size="26" fill="#fff" text-anchor="middle" letter-spacing="2">LOST</text>` },
  { id:9,  name:"URBAN GRID",     category:"poster", price:449, sizes:["A4","A3","A2"],               badge:null,   isNew:false, isBW:false, dateAdded:"2024-10-20", desc:"Architectural city grid overhead view. High contrast yellow on black. Premium matte.",     viewBox:"0 0 140 200", svg:`<rect width="140" height="200" fill="#111"/><rect x="40" y="55" width="25" height="40" fill="#e8ff00" opacity="0.8"/><text x="70" y="185" font-family="Bebas Neue,sans-serif" font-size="12" fill="#333" text-anchor="middle" letter-spacing="4">URBAN GRID</text>` },
  { id:10, name:"ENTROPY",        category:"poster", price:499, sizes:["A4","A3","A2"],               badge:"Hot",  isNew:false, isBW:false, dateAdded:"2024-09-25", desc:"Controlled chaos. Scattered elements forming order at distance. Limited run.",            viewBox:"0 0 140 200", svg:`<rect width="140" height="200" fill="#0a0a0a"/><text x="70" y="100" font-family="Bebas Neue,sans-serif" font-size="32" fill="#fff" text-anchor="middle" letter-spacing="-1" opacity="0.9">ENTROPY</text>` },
  { id:11, name:"TYPE RIOT",      category:"poster", price:379, sizes:["A4","A3","A2"],               badge:null,   isNew:false, isBW:true,  dateAdded:"2024-10-05", desc:"Typographic explosion. All caps, all chaos. B&W print on thick matte stock.",            viewBox:"0 0 140 200", svg:`<rect width="140" height="200" fill="#fff"/><text x="70" y="50" font-family="Bebas Neue,sans-serif" font-size="38" fill="#000" text-anchor="middle" letter-spacing="-1">TYPE</text><text x="70" y="98" font-family="Bebas Neue,sans-serif" font-size="52" fill="none" stroke="#000" stroke-width="1" text-anchor="middle" letter-spacing="-2">RIOT</text>` },
  { id:12, name:"SILENCE",        category:"poster", price:429, sizes:["A4","A3","A2"],               badge:"B&W",  isNew:false, isBW:true,  dateAdded:"2024-09-10", desc:"Nothing but white space and one word. Minimal art print. Statement piece.",              viewBox:"0 0 140 200", svg:`<rect width="140" height="200" fill="#fafafa"/><rect x="1" y="1" width="138" height="198" fill="none" stroke="#000" stroke-width="1"/><text x="70" y="110" font-family="Bebas Neue,sans-serif" font-size="28" fill="#000" text-anchor="middle" letter-spacing="12">SILENCE</text>` },
];

// ---- LIVE PRODUCTS from Firebase ----
let _liveProducts = null;

async function fetchFromFirebase() {
  try {
    const snap = await getDocs(collection(db, 'products'));
    if (snap.empty) return null;
    return snap.docs
      .map(d => {
        const data = d.data();
        return {
          id:        d.id,
          name:      data.name      || '',
          category:  data.cat       || 'tee',
          price:     data.price     || 0,
          mrp:       data.mrp       || 0,
          stock:     data.stock     || 0,
          sizes:     data.sizes     || ['S','M','L','XL'],
          badge:     data.badge     || (data.isNew ? 'New' : null),
          isNew:     data.isNew     || false,
          isBW:      data.isBW      || false,
          status:    data.status    || 'Active',
          sku:       data.sku       || '',
          desc:      data.desc      || data.description || '',
          dateAdded: data.dateAdded || new Date().toISOString().split('T')[0],
          imageUrl:  data.imageUrl  || '',
          svg:       data.svg       || `<rect width="200" height="200" fill="#111"/><text x="100" y="110" font-family="sans-serif" font-size="18" fill="#e8ff00" text-anchor="middle">${data.name||''}</text>`,
          viewBox:   data.viewBox   || '0 0 200 200',
          emoji:     data.emoji     || '👕',
        };
      })
      .filter(p => !p.status || p.status === 'Active');
  } catch (e) {
    console.warn('[Store89] Firebase unavailable, using defaults.', e);
    return null;
  }
}

async function initProducts() {
  _liveProducts = await fetchFromFirebase();
  document.dispatchEvent(new CustomEvent('productsLoaded', {
    detail: { products: _liveProducts || PRODUCTS_DATA }
  }));
}

// Main function — used by all pages
function getProducts() {
  return _liveProducts !== null ? _liveProducts : PRODUCTS_DATA;
}

// Make getProducts available globally (needed by non-module scripts)
window.getProducts = getProducts;

// Start fetching on load
initProducts();
