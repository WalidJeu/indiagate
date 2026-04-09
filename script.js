/* ===== MENU DATA ===== */
const menuData = {

  entrees: [
    { name: 'Oignon Bhaji',           price: 4.00,  desc: "Beignets croustillants d'oignons, enrobés de farine de pois chiche.",                                                  img: 'Images/Oignon-Bhaji.png' },
    { name: 'Baignan Pakora',         price: 4.00,  desc: "Beignets d'aubergines dorés à la farine de pois chiche.",                                                              img: 'Images/baignan-pakora-1.png' },
    { name: 'Mix Pakora',             price: 5.00,  desc: "Mélange de beignets d'oignons, épinards, pommes de terre.",                                                            img: 'Images/mix-pakora-1.png' },
    { name: 'Samossas légumes',       price: 4.00,  desc: "Chaussons croustillants, farcis de légumes épicés.",                                                                   img: 'Images/samosa.png' },
    { name: 'Keema Rolls',            price: 5.50,  desc: "Rouleaux croustillants garnis de boeuf haché et de pommes de terre, subtilement parfumés aux épices douces.",          img: null, emoji: '🥩' },
    { name: 'Chicken Lollipop',       price: 7.00,  desc: "Manchons de poulet frits aux épices douces.",                                                                          img: 'Images/Chicken-Lollipop-.png' },
    { name: 'Raita',                  price: 3.50,  desc: "Yaourt frais aux concombres et carottes.",                                                                             img: 'Images/raita.png' },
    { name: 'Salade India Gate',      price: 8.00,  desc: "Salade verte fraîche avec laitue, carotte, tomate, concombre, maïs, citron et une touche de paneer.",                 img: null, emoji: '🥗' },
    { name: 'Assortiment de beignets',price: 8.00,  desc: "Oignon Bhaji, Mix Pakora, Samossas, Rolls crevettes.",                                                                 img: 'Images/Assortiment-de-beignets.png' },
  ],

  grillades: [
    { name: 'Seekh Kebab',   price: 8.50,  desc: "Brochettes d'agneau haché, parfumées aux épices.",          img: 'Images/Seekh-Kebab-.png' },
    { name: 'Poulet Tandoori',price:8.00,  desc: "Cuisse de poulet marinée aux épices Garam Masala.",         img: 'Images/Poulet-Tandoori.png' },
    { name: 'Poulet Tikka',  price: 9.00,  desc: "Escalope de poulet marinée au yaourt, ail, citron.",        img: 'Images/Poulet-Tikka.png' },
    { name: 'Saumon Tikka',  price: 12.00, desc: "Saumon mariné au yaourt, grillé au tandoor.",               img: 'Images/Saumon-Tikka.png' },
    { name: 'Mix Grill',     price: 18.00, desc: "Assortiment de grillades : Poulet, Agneau, Poisson.",       img: 'Images/mix-grill.jpeg' },
  ],

  plats: [
    { name: 'Poulet Korma',          price: 13.00, desc: "Viande tendre mijotée dans une sauce douce et sucrée aux fruits secs.",                              img: 'Images/poulet-korma.png' },
    { name: 'Bœuf Massala',          price: 13.50, desc: "Viande délicate en sauce curry massala à l'ail, tomates et coriandre.",                              img: 'Images/bouef-massala.png' },
    { name: 'Crevette Massala',      price: 15.00, desc: "Crevettes en sauce curry massala aux arômes d'ail et de gingembre.",                                 img: 'Images/Crevette-Massala-.png' },
    { name: 'Rogan Josh',            price: 15.00, desc: "Gigot d'agneau dans une sauce curry aux oignons, tomates et épices.",                                img: 'Images/rogan-josh.png' },
    { name: 'Agneau Vindaloo 🌶️',   price: 16.00, desc: "Agneau dans une sauce épicée à l'ail, gingembre et épices puissantes.",                             img: 'Images/agneau-vindaloo.png' },
    { name: 'Agneau Bharta',         price: 15.00, desc: "Agneau préparé avec des aubergines hachées et des herbes fraîches.",                                 img: 'Images/Agneau-Bharta.png' },
    { name: 'Butter Chicken',        price: 15.00, desc: "Poulet mariné aux épices, mijoté dans une sauce crémeuse au miel.",                                  img: 'Images/butter-chicken.png', featured: true },
    { name: 'Poulet Tikka Massala',  price: 15.00, desc: "Poulet mariné, mijoté dans une sauce onctueuse de tomates caramélisées.",                            img: 'Images/PTM.png' },
    { name: 'Saumon Tikka Massala',  price: 17.50, desc: "Saumon mariné aux épices, mijoté dans une sauce tomate caramélisée.",                                img: 'Images/Saumon-Tikka-Massala-.png' },
    { name: 'Biryani Poulet',        price: 13.50, desc: "Riz parfumé aux épices douces, cuisiné avec du poulet.",                                             img: 'Images/bryani-poulet.png' },
    { name: 'Gambas Kadhai',         price: 18.00, desc: "Curry de gambas aux poivrons, dans une sauce onctueuse et épicée.",                                  img: 'Images/gambas-kahai.png' },
  ],

  vegetariens: [
    { name: 'Aloo Gobi',     price: 8.00,  desc: "Pommes de terre et chou-fleur aux épices douces.",                                                                   img: 'Images/aloo-gobi.png' },
    { name: 'Légumes Korma', price: 10.00, desc: "Légumes variés dans une sauce korma crémeuse.",                                                                       img: 'Images/Legumes-Korma.png' },
    { name: 'Dahl Tadka',    price: 9.50,  desc: "Lentilles mijotées aux épices, ail et tomates.",                                                                      img: 'Images/Dahl-Tadka.png' },
    { name: 'Kadai Paneer',  price: 11.00, desc: "Fromage maison et poivrons aux épices.",                                                                              img: 'Images/kadhai-paneer.png' },
    { name: 'Palak Paneer',  price: 12.00, desc: "Épinards et fromage dans une sauce parfumée.",                                                                        img: 'Images/palak-paneer.png' },
    { name: 'Butter Paneer', price: 13.00, desc: "Fromage maison dans une sauce onctueuse aux noix de cajou.",                                                          img: 'Images/Butter-Paneer.png' },
    { name: 'Baingan Bharta',price: 11.00, desc: "Aubergines grillées au feu, écrasées et parfumées d'herbes et d'épices, pour une saveur douce et délicatement fumée.",img: 'Images/Baingan-Bharta.png' },
  ],

  accompagnements: [
    { name: 'Riz Basmati',   price: 3.50, desc: "Riz basmati nature pour accompagner vos plats.",      img: 'Images/riz-basmati.png' },
    { name: 'Mix Pulao',     price: 4.50, desc: "Riz basmati aux légumes frais colorés.",               img: 'Images/mix-pullao.png' },
    { name: 'Kashmir Pulao', price: 4.50, desc: "Riz sucré aux fruits secs parfumés.",                  img: 'Images/kashmir-pullao.jpeg' },
    { name: 'Aloo Jeera',    price: 5.00, desc: "Pommes de terre sautées au cumin et herbes fraîches.", img: 'Images/aloo-jeera.png' },
    { name: 'Légumes Sautés',price: 5.50, desc: "Légumes variés sautés aux épices maison.",             img: 'Images/Legumes-Sautes.png' },
  ],

  pains: [
    { name: 'Naan Nature',      price: 3.00, desc: "Pain moelleux à base de farine blanche, idéal pour accompagner vos plats.",       img: 'Images/naan-nature.png' },
    { name: 'Garlic Naan',      price: 3.80, desc: "Pain à l'ail, savoureux et moelleux, à base de farine blanche.",                  img: 'Images/Garlic-Naan.jpeg' },
    { name: 'Oignon Naan',      price: 3.80, desc: "Pain garni d'oignons, tendre et parfumé, à base de farine blanche.",              img: 'Images/Oignon-Naan.jpeg' },
    { name: 'Paratha',          price: 4.00, desc: "Pain feuilleté au beurre, croustillant à l'extérieur, tendre à l'intérieur.",     img: 'Images/Paratha.png' },
    { name: 'Naan Fromage',     price: 4.20, desc: "Pain moelleux fourré au fromage, à base de farine blanche.",                      img: 'Images/naan-fromage.png' },
    { name: 'Naan Ail & Fromage',price:5.00, desc: "Pain garni de fromage et d'ail, une combinaison délicieuse.",                     img: 'Images/Naan-Ail-Fromage.png' },
  ],

  desserts: [
    { name: 'Glace',                price: 4.00, desc: "Deux parfums au choix : vanille, coco, mangue, etc.",                                                                     img: null, emoji: '🍦' },
    { name: 'Salade de fruits',     price: 4.00, desc: "Mélange de fruits frais avec coulis de mangue.",                                                                          img: 'Images/salade-de-fruits.png' },
    { name: 'Naan Nutella',         price: 4.00, desc: "Naan moelleux fourré au Nutella.",                                                                                        img: 'Images/Naan-Nutella.png' },
    { name: 'Payasam',              price: 5.00, desc: "Perles de tapioca et vermicelles fondants dans un lait sucré à la cardamome, parsemés de fruits secs.",                   img: null, emoji: '🍮' },
    { name: 'Kulfi',                price: 5.00, desc: "Crème glacée indienne à la mangue, coco ou pistache.",                                                                    img: 'Images/Kulfi.png' },
    { name: 'Tiramisu à la mangue', price: 5.00, desc: "Crème à la mangue avec spéculoos et chantilly.",                                                                          img: 'Images/Tiramisu-cremeux-a-la-mangue.png' },
  ],

  boissons: [
    { name: 'Lassi nature',           price: 4.00, desc: "Boisson/dessert à base de yaourt nature.",           img: null, emoji: '🥛' },
    { name: 'Lassi à la rose',        price: 5.00, desc: "Boisson au yaourt parfumée à la rose.",              img: 'Images/Lassi-a-la-rose.png' },
    { name: 'Lassi à la mangue',      price: 5.00, desc: "Boisson sucrée au yaourt et à la mangue.",           img: 'Images/Lassi-a-la-mangue.png' },
    { name: 'Expresso',               price: 2.50, desc: "Café serré italien.",                                img: null, emoji: '☕' },
    { name: 'Thé nature ou menthe',   price: 3.00, desc: "Thé classique ou menthe fraîche.",                   img: null, emoji: '🍵' },
    { name: 'Double expresso',        price: 4.00, desc: "Deux doses d'expresso.",                             img: null, emoji: '☕' },
    { name: 'Café long',              price: 4.00, desc: "Café filtre doux.",                                   img: null, emoji: '☕' },
    { name: 'Thé maison au gingembre',price: 4.50, desc: "Thé frais infusé au gingembre.",                     img: null, emoji: '🫚' },
    { name: 'Thé Delhi Massala',      price: 4.80, desc: "Thé au lait épicé indien.",                          img: null, emoji: '🍵' },
  ],

  soft: [
    { name: "Sirop à l'eau",          price: 2.50, desc: "Grenadine, Pêches, Violette ou Menthe",  img: null, emoji: '🥃' },
    { name: 'Diabolo',                price: 3.80, desc: "Grenadine, Pêches, Violette ou Menthe",  img: null, emoji: '🥤' },
    { name: 'Jus de mangue',          price: 3.50, desc: '',                                        img: null, emoji: '🥭' },
    { name: "Jus de ananas",          price: 3.50, desc: '',                                        img: null, emoji: '🍍' },
    { name: 'Ginger beer',            price: 3.50, desc: '',                                        img: null, emoji: '🍶' },
    { name: 'Limonade',               price: 3.50, desc: '',                                        img: null, emoji: '🍋' },
    { name: 'Orangina',               price: 3.50, desc: '',                                        img: null, emoji: '🍊' },
    { name: 'Coca cola / Coca cola zéro', price: 3.50, desc: '',                                   img: null, emoji: '🥤' },
    { name: 'Ice tea',                price: 3.50, desc: '',                                        img: null, emoji: '🧋' },
    { name: 'San Pellegrino 50cl',    price: 4.00, desc: '',                                        img: null, emoji: '💧' },
    { name: 'San Pellegrino 1L',      price: 5.50, desc: '',                                        img: null, emoji: '💧' },
  ],

  alcools: [
    { name: 'Get 27 21°',                   price: 5.00, desc: '',                     img: null, emoji: '🥃' },
    { name: 'Ricard 45°',                   price: 5.00, desc: '',                     img: null, emoji: '🥃' },
    { name: 'Martini 14,4°',               price: 5.00, desc: 'Rouge, rosé et blanc', img: null, emoji: '🍸' },
    { name: 'Poliakov 37.5°',              price: 5.00, desc: '',                     img: null, emoji: '🥃' },
    { name: "Gibson's 37.5°",             price: 5.00, desc: '',                     img: null, emoji: '🥃' },
    { name: 'Malibu coco 18°',             price: 6.00, desc: '',                     img: null, emoji: '🥥' },
    { name: 'Trois rivières blanc 50°',    price: 6.00, desc: '',                     img: null, emoji: '🥃' },
    { name: 'Captain morgan 35°',          price: 6.00, desc: '',                     img: null, emoji: '🏴‍☠️' },
    { name: 'Bombay sapphire 40°',         price: 6.00, desc: '',                     img: null, emoji: '🍸' },
    { name: 'José cuervo gold especial 38°',price:6.00, desc: '',                     img: null, emoji: '🌵' },
    { name: 'Johnnie walker black label 40°',price:7.00,desc: '',                     img: null, emoji: '🥃' },
    { name: 'Jack Daniel 40°',             price: 7.00, desc: '',                     img: null, emoji: '🥃' },
    { name: 'Chivas 40°',                  price: 7.00, desc: '',                     img: null, emoji: '🥃' },
    { name: 'Hennessy 40°',                price: 7.00, desc: '',                     img: null, emoji: '🥃' },
    { name: 'DCSL Extra Special 33,5°',    price: 8.00, desc: '',                     img: null, emoji: '🥃' },
    { name: 'Old Arrack',                  price: 8.00, desc: '',                     img: null, emoji: '🥃' },
  ],

  bieres: [
    { name: 'Heineken',   price: 4.00, desc: '',            img: null, emoji: '🍺' },
    { name: 'Leffe',      price: 4.50, desc: '',            img: null, emoji: '🍺' },
    { name: 'Desperados', price: 4.50, desc: '',            img: null, emoji: '🍺' },
    { name: 'King Fisher',price: 4.50, desc: 'Blonde 4,8%', img: null, emoji: '🐟' },
    { name: 'Cobra',      price: 5.00, desc: 'Blonde 4,5%', img: null, emoji: '🐍' },
    { name: 'Lion Stout', price: 6.50, desc: 'Brune 8,8%',  img: null, emoji: '🦁' },
  ],

  cocktails: [
    { name: 'Cocktail India Gate sans alcool', price: 3.50, desc: "Mélange de jus de fruits exotiques et sirop de rose.",                img: 'Images/mocktail-maisson.png' },
    { name: "L'Indien",                         price: 4.30, desc: "Cocktail sans alcool à base d'orangina et de sirop de rose.",         img: 'Images/lindien.png' },
    { name: 'Mango Beer',                       price: 4.50, desc: "Boisson pétillante à base de ginger beer et de jus de mangue.",       img: 'Images/Mango-Beer.png' },
    { name: 'Cocktail India Gate avec alcool',  price: 6.50, desc: "Alcool de noix de coco, gin, jus de fruits exotiques et sirop de rose.", img: 'Images/cocktail-maison.png' },
    { name: 'Indian gin tonic',                 price: 6.50, desc: "Cocktail alcoolisé à base de gin et d'eau tonique.",                  img: null, emoji: '🍸' },
    { name: 'Goa Breeze',                       price: 6.50, desc: "Cocktail exotique à base de Malibu coco et de jus d'ananas.",         img: 'Images/Goa-Breeze.png' },
  ],

  vins: [
    { name: 'Kir cassis',           price: 4.50,  desc: '',              img: null, emoji: '🍷' },
    { name: 'Verre',                price: 4.00,  desc: 'Rosé, rouge et blanc', img: null, emoji: '🍷' },
    { name: 'Pichet 25cl',          price: 7.50,  desc: 'Rosé, rouge et blanc', img: null, emoji: '🫗' },
    { name: 'Pichet 50cl',          price: 10.00, desc: 'Rosé, rouge et blanc', img: null, emoji: '🫗' },
    { name: 'Montels rouge 37,5cl', price: 12.50, desc: '',              img: null, emoji: '🍷' },
    { name: 'Montels rosé 37,5cl',  price: 12.50, desc: '',              img: null, emoji: '🥂' },
    { name: 'Montels blanc 37,5cl', price: 12.50, desc: 'Doux ou sec',   img: null, emoji: '🍾' },
    { name: 'Montels rouge 75cl',   price: 18.00, desc: '',              img: null, emoji: '🍷' },
    { name: 'Montels rosé 75cl',    price: 18.00, desc: '',              img: null, emoji: '🥂' },
    { name: 'Montels blanc 75cl',   price: 18.00, desc: 'Doux ou sec',   img: null, emoji: '🍾' },
    { name: 'Grover zampa rouge 37,5cl', price: 14.50, desc: '',         img: null, emoji: '🍷' },
    { name: 'Grover zampa rosé 37,5cl',  price: 14.50, desc: '',         img: null, emoji: '🥂' },
    { name: 'Grover zampa blanc 37,5cl', price: 14.50, desc: '',         img: null, emoji: '🍾' },
    { name: 'Grover zampa rouge 75cl',   price: 24.00, desc: '',         img: null, emoji: '🍷' },
    { name: 'Grover zampa rosé 75cl',    price: 24.00, desc: '',         img: null, emoji: '🥂' },
    { name: 'Grover zampa blanc 75cl',   price: 24.00, desc: '',         img: null, emoji: '🍾' },
  ],

  menus: [
    {
      badge: 'Menu Enfant',
      name: '👶 Little Gate',
      price: 10.00,
      note: 'Réservé aux moins de 10 ans',
      body: `<strong>Plat principal :</strong> Poulet Tikka<br>
             <strong>Accompagnement au choix :</strong> Riz basmati ou Aloo Jeera<br>
             <strong>Dessert :</strong> Glace (parfum du moment)`,
    },
    {
      badge: 'Midi uniquement',
      name: '🍛 Formule Express Midi',
      price: 11.90,
      note: 'Disponible du lundi au vendredi – uniquement le midi',
      body: `<strong>Plat :</strong> Poulet Curry<br>
             <strong>Accompagnement :</strong> Riz basmati<br>
             <strong>Boisson chaude :</strong> Café inclus<br>
             <em>Supplément naan nature : 2,00 €</em>`,
    },
    {
      badge: 'Midi uniquement',
      name: '🌿 Gate des Saveurs',
      price: 19.00,
      note: 'Disponible du lundi au vendredi – uniquement le midi',
      body: `<strong>Entrée au choix :</strong> Oignon Bhaji, Baignan Pakora ou Chicken Lollipop<br>
             <strong>Plat au choix :</strong> Aloo Gobi, Bœuf Massala ou Poulet Tikka Massala<br>
             <strong>Servi avec :</strong> Riz basmati<br>
             <strong>Dessert au choix :</strong> Glace ou Salade de fruits`,
    },
    {
      badge: 'Notre Signature',
      name: '✨ Menu India Gate',
      price: 28.00,
      note: '',
      body: `<strong>Entrée :</strong> Assortiment complet (Oignon Bhaji, Mix Pakora, Keema Rolls, Poulet Tikka, Seekh Kebab)<br>
             <strong>Plat au choix :</strong> Palak Paneer, Crevette Massala, Butter Chicken ou Rogan Josh<br>
             <strong>Servi avec :</strong> Riz basmati<br>
             <strong>Dessert au choix :</strong> Tiramisu à la mangue, Naan Nutella ou Kulfi`,
    },
  ],
};

/* ===== HELPERS ===== */
function fmtPrice(price) {
  return price.toFixed(2).replace('.', ',') + ' €';
}

/* ===== RENDER FUNCTIONS ===== */
function renderCard(item, drinkMode) {
  const imgHtml = item.img
    ? `<div class="card-img">
         <img src="${item.img}" alt="${item.name}" loading="lazy">
         <div class="card-img-overlay">
           <button class="btn-quick-add" data-name="${item.name}" data-price="${item.price}">➕ Ajouter</button>
         </div>
         ${item.featured ? '<span class="card-badge">⭐ Spécialité</span>' : ''}
       </div>`
    : `<div class="card-placeholder${drinkMode ? ' card-placeholder--sm' : ''}">${item.emoji || '🍽️'}</div>`;

  return `
    <div class="menu-card fade-in${item.featured ? ' featured' : ''}">
      ${imgHtml}
      <div class="card-body">
        <div class="card-top">
          <h3 class="card-name">${item.name}</h3>
          <span class="card-price">${fmtPrice(item.price)}</span>
        </div>
        ${item.desc ? `<p class="card-desc">${item.desc}</p>` : ''}
        <button class="card-add" data-name="${item.name}" data-price="${item.price}">➕ Ajouter</button>
      </div>
    </div>`;
}

function renderPanel(id, items, gridClass) {
  const panel = document.getElementById('panel-' + id);
  if (!panel) return;
  const isDrink = gridClass === 'menu-grid--drinks';
  panel.innerHTML = `<div class="menu-grid ${gridClass || ''}">${items.map(i => renderCard(i, isDrink)).join('')}</div>`;
}

function renderMenusPanel() {
  const panel = document.getElementById('panel-menus');
  if (!panel) return;
  const note = `<div class="panel-note">🍽️ Menus disponibles uniquement sur place. Certains menus sont proposés uniquement le midi.</div>`;
  const cards = menuData.menus.map(m => `
    <div class="formula-card fade-in">
      <span class="formula-badge">${m.badge}</span>
      <h3 class="formula-name">${m.name}</h3>
      <div class="formula-price">${fmtPrice(m.price)}</div>
      ${m.note ? `<div class="formula-note">${m.note}</div>` : ''}
      <div class="formula-body">${m.body}</div>
      <button class="card-add" data-name="${m.name}" data-price="${m.price}">➕ Ajouter au panier</button>
    </div>`).join('');
  panel.innerHTML = note + `<div class="menu-grid menu-grid--formulas">${cards}</div>`;
}

/* ===== RENDER ALL PANELS ===== */
function initMenu() {
  renderPanel('entrees',        menuData.entrees);
  renderPanel('grillades',      menuData.grillades);
  renderPanel('plats',          menuData.plats);
  renderPanel('vegetariens',    menuData.vegetariens);
  renderPanel('accompagnements',menuData.accompagnements);
  renderPanel('pains',          menuData.pains);
  renderPanel('desserts',       menuData.desserts);
  renderPanel('boissons',       menuData.boissons,   'menu-grid--drinks');
  renderPanel('soft',           menuData.soft,        'menu-grid--drinks');
  renderPanel('alcools',        menuData.alcools,     'menu-grid--drinks');
  renderPanel('bieres',         menuData.bieres,      'menu-grid--drinks');
  renderPanel('cocktails',      menuData.cocktails);
  renderPanel('vins',           menuData.vins,        'menu-grid--drinks');
  renderMenusPanel();
}

/* ===== TABS ===== */
function initTabs() {
  document.getElementById('menuTabs').addEventListener('click', e => {
    const btn = e.target.closest('.tab-btn');
    if (!btn) return;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.menu__panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    const panel = document.getElementById('panel-' + btn.dataset.tab);
    if (panel) {
      panel.classList.add('active');
      btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      // Re-run fade-in observer for newly visible cards
      observeFadeIns(panel);
    }
  });
}

/* ===== ORDER SYSTEM ===== */
let order = [];

function addToOrder(name, price) {
  const existing = order.find(i => i.name === name);
  if (existing) { existing.qty++; }
  else { order.push({ name, price: parseFloat(price), qty: 1 }); }
  updateOrder();
  bumpBadge();
}

function changeQty(idx, delta) {
  order[idx].qty += delta;
  if (order[idx].qty <= 0) order.splice(idx, 1);
  updateOrder();
}

function clearOrder() {
  order = [];
  updateOrder();
}

function getTotal() {
  return order.reduce((s, i) => s + i.price * i.qty, 0);
}

function updateOrder() {
  const total = getTotal();
  const count = order.reduce((s, i) => s + i.qty, 0);

  // Badge
  document.getElementById('cartBadge').textContent = count;

  // Sidebar items
  const body = document.getElementById('orderItems');
  if (order.length === 0) {
    body.innerHTML = '<p class="order-empty">Sélectionnez vos plats pour préparer votre commande.</p>';
  } else {
    body.innerHTML = order.map((item, idx) => `
      <div class="order-item">
        <span class="order-item__name">${item.name}</span>
        <div class="order-item__qty">
          <button class="qty-btn" data-idx="${idx}" data-delta="-1">−</button>
          <span class="qty-count">${item.qty}</span>
          <button class="qty-btn" data-idx="${idx}" data-delta="1">+</button>
        </div>
        <span class="order-item__price">${fmtPrice(item.price * item.qty)}</span>
      </div>`).join('');
  }

  // Totals
  const totalStr = fmtPrice(total);
  document.getElementById('sidebarTotal').textContent = totalStr;
  document.getElementById('orderBarTotal').textContent = totalStr;

  // Order bar
  const bar = document.getElementById('orderBar');
  if (count > 0) {
    bar.classList.add('visible');
    document.getElementById('orderBarInfo').textContent = `${count} article${count > 1 ? 's' : ''}`;
  } else {
    bar.classList.remove('visible');
  }
}

function bumpBadge() {
  const b = document.getElementById('cartBadge');
  b.classList.remove('bump');
  void b.offsetWidth; // reflow
  b.classList.add('bump');
  setTimeout(() => b.classList.remove('bump'), 300);
}

function initOrder() {
  // Add to order via delegation on menu panels + sidebar
  document.getElementById('panel-entrees').parentElement.addEventListener('click', e => {
    const addBtn = e.target.closest('[data-name][data-price]');
    if (!addBtn) return;
    addToOrder(addBtn.dataset.name, addBtn.dataset.price);
    // Visual feedback
    if (addBtn.classList.contains('card-add')) {
      const orig = addBtn.textContent;
      addBtn.textContent = '✓ Ajouté !';
      addBtn.classList.add('added');
      setTimeout(() => {
        addBtn.textContent = orig;
        addBtn.classList.remove('added');
      }, 1600);
    }
  });

  // Qty buttons in sidebar
  document.getElementById('orderItems').addEventListener('click', e => {
    const btn = e.target.closest('[data-idx]');
    if (!btn) return;
    changeQty(parseInt(btn.dataset.idx), parseInt(btn.dataset.delta));
  });

  // Sidebar open/close
  const sidebar  = document.getElementById('orderSidebar');
  const overlay  = document.getElementById('orderOverlay');
  const open  = () => { sidebar.classList.add('open'); overlay.classList.add('show'); document.body.style.overflow = 'hidden'; };
  const close = () => { sidebar.classList.remove('open'); overlay.classList.remove('show'); document.body.style.overflow = ''; };

  document.getElementById('cartBtn').addEventListener('click', open);
  document.getElementById('viewOrderBtn').addEventListener('click', open);
  document.getElementById('closeSidebar').addEventListener('click', close);
  overlay.addEventListener('click', close);
  document.getElementById('clearOrderBtn').addEventListener('click', () => { clearOrder(); close(); });
}

/* ===== HEADER SCROLL ===== */
function initHeader() {
  const header = document.getElementById('header');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', onScroll, { passive: true });

  // Active nav link
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let cur = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 200) cur = s.id; });
    document.querySelectorAll('.nav__link').forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + cur);
    });
  }, { passive: true });
}

/* ===== MOBILE NAV ===== */
function initMobileNav() {
  const ham   = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');
  const toggle = () => {
    ham.classList.toggle('open');
    links.classList.toggle('open');
    document.body.style.overflow = links.classList.contains('open') ? 'hidden' : '';
  };
  ham.addEventListener('click', toggle);
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    ham.classList.remove('open');
    links.classList.remove('open');
    document.body.style.overflow = '';
  }));
}

/* ===== SCROLL FADE-IN ===== */
const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

function observeFadeIns(root) {
  (root || document).querySelectorAll('.fade-in').forEach(el => {
    if (!el.classList.contains('visible')) fadeObserver.observe(el);
  });
}

/* ===== REVIEWS SLIDER ===== */
let slideIdx = 0;
let autoSlide;

function spv() {
  if (window.innerWidth > 1024) return 3;
  if (window.innerWidth > 640)  return 2;
  return 1;
}

function initSlider() {
  const track = document.getElementById('avisTrack');
  const cards = track.querySelectorAll('.avis-card');
  const dots  = document.getElementById('avisDots');

  const max = () => Math.max(0, cards.length - spv());

  // Build dots
  const buildDots = () => {
    dots.innerHTML = '';
    for (let i = 0; i <= max(); i++) {
      const d = document.createElement('button');
      d.className = 'avis-dot' + (i === 0 ? ' active' : '');
      d.setAttribute('aria-label', `Avis ${i+1}`);
      d.addEventListener('click', () => goTo(i));
      dots.appendChild(d);
    }
  };

  const goTo = (idx) => {
    slideIdx = Math.max(0, Math.min(idx, max()));
    const w = cards[0].offsetWidth + 24;
    track.style.transform = `translateX(-${slideIdx * w}px)`;
    document.querySelectorAll('.avis-dot').forEach((d, i) => d.classList.toggle('active', i === slideIdx));
  };

  document.getElementById('avisPrev').addEventListener('click', () => { clearInterval(autoSlide); goTo(slideIdx - 1); startAuto(); });
  document.getElementById('avisNext').addEventListener('click', () => { clearInterval(autoSlide); goTo(slideIdx + 1); startAuto(); });

  const startAuto = () => {
    autoSlide = setInterval(() => goTo((slideIdx + 1) % (max() + 1)), 5000);
  };

  buildDots();
  startAuto();
  window.addEventListener('resize', () => { buildDots(); goTo(0); });
}

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
  initMenu();
  initTabs();
  initOrder();
  initHeader();
  initMobileNav();
  initSlider();
  observeFadeIns();
});
