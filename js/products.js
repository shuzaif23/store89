
const PRODUCTS_DATA = [
  // ===== T-SHIRTS =====
  {
    id: 1,
    name: "ACID WAVE",
    category: "tee",
    price: 799,
    sizes: ["XS","S","M","L","XL","XXL"],
    badge: "New",
    isNew: true,
    isBW: false,
    dateAdded: "2024-11-01",
    desc: "Melting acid wave graphic on premium cotton. Oversized fit, dropped shoulders. 180 GSM.",
    viewBox: "0 0 200 200",
    svg: `<rect width="200" height="200" fill="#111"/>
<path d="M20 140 Q50 80 80 140 Q110 200 140 140 Q170 80 200 140" stroke="#e8ff00" stroke-width="3" fill="none" opacity="0.9"/>
<path d="M0 160 Q40 100 80 160 Q120 220 160 160 Q200 100 240 160" stroke="#e8ff00" stroke-width="2" fill="none" opacity="0.5"/>
<text x="100" y="60" font-family="Bebas Neue,sans-serif" font-size="18" fill="#e8ff00" text-anchor="middle" letter-spacing="3">ACID WAVE</text>
<circle cx="100" cy="100" r="4" fill="#e8ff00" opacity="0.8"/>`,
  },
  {
    id: 2,
    name: "NEGATIVE SPACE",
    category: "tee",
    price: 849,
    sizes: ["XS","S","M","L","XL","XXL"],
    badge: null,
    isNew: false,
    isBW: false,
    dateAdded: "2024-10-15",
    desc: "Bold geometric cut-out design. Minimal, intentional, loud. 200 GSM heavyweight cotton.",
    viewBox: "0 0 200 200",
    svg: `<rect width="200" height="200" fill="#111"/>
<rect x="40" y="40" width="120" height="120" fill="none" stroke="#fff" stroke-width="2"/>
<rect x="70" y="70" width="60" height="60" fill="#e8ff00"/>
<rect x="85" y="85" width="30" height="30" fill="#111"/>
<line x1="40" y1="40" x2="160" y2="160" stroke="#333" stroke-width="1"/>
<line x1="160" y1="40" x2="40" y2="160" stroke="#333" stroke-width="1"/>`,
  },
  {
    id: 3,
    name: "GHOST CITY",
    category: "tee",
    price: 899,
    sizes: ["S","M","L","XL","XXL"],
    badge: "Hot",
    isNew: false,
    isBW: false,
    dateAdded: "2024-10-01",
    desc: "Urban skyline faded into obscurity. Screen printed distressed finish. Premium boxy cut.",
    viewBox: "0 0 200 200",
    svg: `<rect width="200" height="200" fill="#0d0d0d"/>
<rect x="20" y="120" width="20" height="60" fill="#222"/>
<rect x="50" y="90" width="30" height="90" fill="#1e1e1e"/>
<rect x="90" y="105" width="25" height="75" fill="#2a2a2a"/>
<rect x="125" y="80" width="35" height="100" fill="#1a1a1a"/>
<rect x="170" y="100" width="20" height="80" fill="#222"/>
<rect x="55" y="95" width="4" height="4" fill="#e8ff00" opacity="0.6"/>
<rect x="63" y="105" width="4" height="4" fill="#e8ff00" opacity="0.4"/>
<rect x="131" y="88" width="4" height="4" fill="#e8ff00" opacity="0.7"/>
<text x="100" y="70" font-family="Bebas Neue,sans-serif" font-size="14" fill="#444" text-anchor="middle" letter-spacing="4">GHOST CITY</text>`,
  },
  {
    id: 4,
    name: "RAW 89",
    category: "tee",
    price: 749,
    sizes: ["XS","S","M","L","XL"],
    badge: null,
    isNew: false,
    isBW: false,
    dateAdded: "2024-09-20",
    desc: "The signature piece. Bold 89 emblem on chest. Simple, raw, essential.",
    viewBox: "0 0 200 200",
    svg: `<rect width="200" height="200" fill="#111"/>
<text x="100" y="130" font-family="Bebas Neue,sans-serif" font-size="90" fill="#e8ff00" text-anchor="middle" opacity="0.9" letter-spacing="-2">89</text>
<text x="100" y="160" font-family="Bebas Neue,sans-serif" font-size="14" fill="#333" text-anchor="middle" letter-spacing="8">STORE</text>`,
  },
  {
    id: 5,
    name: "VOID MONO",
    category: "tee",
    price: 829,
    sizes: ["S","M","L","XL","XXL"],
    badge: "New",
    isNew: true,
    isBW: true,
    dateAdded: "2024-11-05",
    desc: "Pure black tee. White VOID print. Heavyweight cotton. The definitive B&W piece.",
    viewBox: "0 0 200 200",
    svg: `<rect width="200" height="200" fill="#0a0a0a"/>
<text x="100" y="110" font-family="Bebas Neue,sans-serif" font-size="42" fill="#fff" text-anchor="middle" letter-spacing="6">VOID</text>
<text x="100" y="135" font-family="Bebas Neue,sans-serif" font-size="16" fill="#333" text-anchor="middle" letter-spacing="12">MONO</text>
<line x1="30" y1="148" x2="170" y2="148" stroke="#222" stroke-width="1"/>`,
  },
  {
    id: 6,
    name: "STATIC NOISE",
    category: "tee",
    price: 879,
    sizes: ["XS","S","M","L","XL","XXL"],
    badge: null,
    isNew: false,
    isBW: true,
    dateAdded: "2024-10-10",
    desc: "All-over static texture sublimation print. White tee base. Chaotic energy.",
    viewBox: "0 0 200 200",
    svg: `<rect width="200" height="200" fill="#f0f0f0"/>
<rect x="10" y="20" width="3" height="3" fill="#000" opacity="0.4"/>
<rect x="27" y="43" width="4" height="2" fill="#333" opacity="0.5"/>
<rect x="44" y="28" width="2" height="4" fill="#000" opacity="0.3"/>
<rect x="61" y="66" width="3" height="3" fill="#333" opacity="0.6"/>
<rect x="78" y="34" width="4" height="3" fill="#000" opacity="0.4"/>
<rect x="95" y="57" width="2" height="4" fill="#333" opacity="0.5"/>
<rect x="112" y="23" width="3" height="3" fill="#000" opacity="0.3"/>
<rect x="129" y="48" width="4" height="2" fill="#333" opacity="0.6"/>
<rect x="146" y="71" width="2" height="3" fill="#000" opacity="0.4"/>
<rect x="163" y="36" width="3" height="4" fill="#333" opacity="0.5"/>
<rect x="180" y="59" width="4" height="3" fill="#000" opacity="0.3"/>
<text x="100" y="110" font-family="Bebas Neue,sans-serif" font-size="30" fill="#000" text-anchor="middle" letter-spacing="4" opacity="0.85">STATIC</text>`,
  },
  {
    id: 7,
    name: "MONO BLOC",
    category: "tee",
    price: 799,
    sizes: ["S","M","L","XL"],
    badge: "B&W",
    isNew: false,
    isBW: true,
    dateAdded: "2024-09-15",
    desc: "Blocky typography meets brutalist layout. Black on white. Minimal and loud.",
    viewBox: "0 0 200 200",
    svg: `<rect width="200" height="200" fill="#fff"/>
<rect x="20" y="60" width="160" height="80" fill="#000"/>
<text x="100" y="115" font-family="Bebas Neue,sans-serif" font-size="36" fill="#fff" text-anchor="middle" letter-spacing="2">MONO BLOC</text>
<rect x="20" y="148" width="80" height="12" fill="#000"/>`,
  },

  // ===== POSTERS =====
  {
    id: 8,
    name: "SIGNAL LOST",
    category: "poster",
    price: 399,
    sizes: ["A4","A3","A2"],
    badge: "New",
    isNew: true,
    isBW: false,
    dateAdded: "2024-11-03",
    desc: "Glitch-inspired signal interference graphic. Print on 170 GSM matte art paper.",
    viewBox: "0 0 140 200",
    svg: `<rect width="140" height="200" fill="#0d0d0d"/>
<text x="70" y="80" font-family="Bebas Neue,sans-serif" font-size="26" fill="#e8ff00" text-anchor="middle" letter-spacing="2">SIGNAL</text>
<text x="70" y="110" font-family="Bebas Neue,sans-serif" font-size="26" fill="#fff" text-anchor="middle" letter-spacing="2">LOST</text>
<rect x="10" y="120" width="120" height="2" fill="#e8ff00" opacity="0.6"/>
<rect x="10" y="128" width="80" height="2" fill="#333"/>
<rect x="10" y="136" width="100" height="2" fill="#222"/>
<rect x="10" y="144" width="60" height="2" fill="#e8ff00" opacity="0.3"/>
<text x="70" y="185" font-family="Space Mono,monospace" font-size="7" fill="#333" text-anchor="middle" letter-spacing="2">STORE89.COM</text>`,
  },
  {
    id: 9,
    name: "URBAN GRID",
    category: "poster",
    price: 449,
    sizes: ["A4","A3","A2"],
    badge: null,
    isNew: false,
    isBW: false,
    dateAdded: "2024-10-20",
    desc: "Architectural city grid overhead view. High contrast yellow on black. Premium matte.",
    viewBox: "0 0 140 200",
    svg: `<rect width="140" height="200" fill="#111"/>
<line x1="0" y1="50" x2="140" y2="50" stroke="#222" stroke-width="1"/>
<line x1="0" y1="100" x2="140" y2="100" stroke="#222" stroke-width="1"/>
<line x1="0" y1="150" x2="140" y2="150" stroke="#222" stroke-width="1"/>
<line x1="35" y1="0" x2="35" y2="200" stroke="#222" stroke-width="1"/>
<line x1="70" y1="0" x2="70" y2="200" stroke="#222" stroke-width="1"/>
<line x1="105" y1="0" x2="105" y2="200" stroke="#222" stroke-width="1"/>
<rect x="40" y="55" width="25" height="40" fill="#e8ff00" opacity="0.8"/>
<rect x="75" y="30" width="25" height="65" fill="#e8ff00" opacity="0.5"/>
<rect x="10" y="70" width="20" height="25" fill="#e8ff00" opacity="0.3"/>
<text x="70" y="185" font-family="Bebas Neue,sans-serif" font-size="12" fill="#333" text-anchor="middle" letter-spacing="4">URBAN GRID</text>`,
  },
  {
    id: 10,
    name: "ENTROPY",
    category: "poster",
    price: 499,
    sizes: ["A4","A3","A2"],
    badge: "Hot",
    isNew: false,
    isBW: false,
    dateAdded: "2024-09-25",
    desc: "Controlled chaos. Scattered elements forming order at distance. Limited run.",
    viewBox: "0 0 140 200",
    svg: `<rect width="140" height="200" fill="#0a0a0a"/>
<circle cx="15" cy="30" r="2" fill="#e8ff00" opacity="0.5"/>
<circle cx="29" cy="83" r="3" fill="#fff" opacity="0.4"/>
<circle cx="43" cy="53" r="1" fill="#ff3c3c" opacity="0.6"/>
<circle cx="57" cy="136" r="4" fill="#e8ff00" opacity="0.3"/>
<circle cx="71" cy="76" r="2" fill="#fff" opacity="0.5"/>
<circle cx="85" cy="109" r="3" fill="#e8ff00" opacity="0.4"/>
<circle cx="99" cy="42" r="2" fill="#ff3c3c" opacity="0.5"/>
<circle cx="113" cy="166" r="3" fill="#fff" opacity="0.3"/>
<circle cx="127" cy="89" r="1" fill="#e8ff00" opacity="0.6"/>
<text x="70" y="100" font-family="Bebas Neue,sans-serif" font-size="32" fill="#fff" text-anchor="middle" letter-spacing="-1" opacity="0.9">ENTROPY</text>
<line x1="20" y1="110" x2="120" y2="110" stroke="#e8ff00" stroke-width="0.5" opacity="0.4"/>
<text x="70" y="185" font-family="Space Mono,monospace" font-size="6" fill="#333" text-anchor="middle" letter-spacing="3">STORE 89 — LIMITED</text>`,
  },
  {
    id: 11,
    name: "TYPE RIOT",
    category: "poster",
    price: 379,
    sizes: ["A4","A3","A2"],
    badge: null,
    isNew: false,
    isBW: true,
    dateAdded: "2024-10-05",
    desc: "Typographic explosion. All caps, all chaos. B&W print on thick matte stock.",
    viewBox: "0 0 140 200",
    svg: `<rect width="140" height="200" fill="#fff"/>
<text x="70" y="50" font-family="Bebas Neue,sans-serif" font-size="38" fill="#000" text-anchor="middle" letter-spacing="-1">TYPE</text>
<text x="70" y="100" font-family="Bebas Neue,sans-serif" font-size="52" fill="#000" text-anchor="middle" letter-spacing="-2" opacity="0.15">RIOT</text>
<text x="70" y="98" font-family="Bebas Neue,sans-serif" font-size="52" fill="none" stroke="#000" stroke-width="1" text-anchor="middle" letter-spacing="-2">RIOT</text>
<rect x="0" y="115" width="140" height="3" fill="#000"/>
<text x="5" y="140" font-family="Space Mono,monospace" font-size="6" fill="#000" letter-spacing="1">STORE 89 · NEW DELHI</text>
<text x="5" y="155" font-family="Space Mono,monospace" font-size="6" fill="#aaa" letter-spacing="1">PRINTED ON 170GSM MATTE</text>`,
  },
  {
    id: 12,
    name: "SILENCE",
    category: "poster",
    price: 429,
    sizes: ["A4","A3","A2"],
    badge: "B&W",
    isNew: false,
    isBW: true,
    dateAdded: "2024-09-10",
    desc: "Nothing but white space and one word. Minimal art print. Statement piece.",
    viewBox: "0 0 140 200",
    svg: `<rect width="140" height="200" fill="#fafafa"/>
<rect x="1" y="1" width="138" height="198" fill="none" stroke="#000" stroke-width="1"/>
<text x="70" y="110" font-family="Bebas Neue,sans-serif" font-size="28" fill="#000" text-anchor="middle" letter-spacing="12">SILENCE</text>
<line x1="40" y1="120" x2="100" y2="120" stroke="#000" stroke-width="0.5"/>
<text x="70" y="190" font-family="Space Mono,monospace" font-size="6" fill="#ccc" text-anchor="middle">STORE 89</text>`,
  },
];

function getProducts() {
  try {
    const saved = localStorage.getItem('s89_products');
    if (saved) {
      const adminProducts = JSON.parse(saved);
      const defaultIds = PRODUCTS_DATA.map(p => p.id);
      const newProducts = adminProducts.filter(p => !defaultIds.includes(p.id));
      const merged = PRODUCTS_DATA.map(def => {
        const override = adminProducts.find(p => p.id === def.id);
        return override ? { ...def, ...override } : def;
      });
      return [...merged, ...newProducts];
    }
  } catch(e) {}
  return PRODUCTS_DATA;
}

