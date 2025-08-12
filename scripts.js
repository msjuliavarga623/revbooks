
async function loadProducts(limit) {
  const grid = document.querySelector('#product-grid');
  if (!grid) return;
  const res = await fetch('products.json');
  const items = await res.json();
  grid.innerHTML = '';
  items.slice(0, limit || items.length).forEach(p => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${p.image}" alt="${p.title}">
      <div class="content">
        <div class="badge">${p.publisher}</div>
        <h3>${p.title}</h3>
        <p>${p.blurb}</p>
        <div class="price">${p.price}</div>
        <div class="btn-row">
          <a class="button-outline" href="product.html?id=${p.id}">Részletek</a>
          <a class="button-primary" href="${p.affiliate_url}" target="_blank" rel="nofollow sponsored">Megvásárolom</a>
        </div>
        <div class="notice">Affiliate link – vásárlásod támogatja a csatornát.</div>
      </div>`;
    grid.appendChild(card);
  });
}

function getParam(name) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

async function loadProductPage() {
  const id = getParam('id');
  if (!id) return;
  const res = await fetch('products.json');
  const items = await res.json();
  const p = items.find(x => x.id === id);
  if (!p) return;
  document.querySelector('#title').textContent = p.title;
  document.querySelector('#publisher').textContent = p.publisher;
  document.querySelector('#price').textContent = p.price;
  document.querySelector('#blurb').textContent = p.blurb;
  document.querySelector('#hero').src = p.image;
  document.querySelector('#buy').href = p.affiliate_url;
}
