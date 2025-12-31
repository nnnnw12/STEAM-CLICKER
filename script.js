// --- КОНФИГУРАЦИЯ ДАННЫХ ---
const GAMES_DATA = [
    { id: 1, name: "Stardew Valley", price: 50, income: 1, minLevel: 1, img: "https://cdn.akamai.steamstatic.com/steam/apps/413150/header.jpg" },
    { id: 2, name: "Terraria", price: 300, income: 5, minLevel: 1, img: "https://cdn.akamai.steamstatic.com/steam/apps/105600/header.jpg" },
    { id: 3, name: "Vampire Survivors", price: 800, income: 12, minLevel: 2, img: "https://cdn.akamai.steamstatic.com/steam/apps/1794680/header.jpg" },
    { id: 4, name: "Left 4 Dead 2", price: 2000, income: 30, minLevel: 3, img: "https://cdn.akamai.steamstatic.com/steam/apps/550/header.jpg" },
    { id: 5, name: "Portal 2", price: 5000, income: 75, minLevel: 4, img: "https://cdn.akamai.steamstatic.com/steam/apps/620/header.jpg" },
    { id: 6, name: "Hollow Knight", price: 12000, income: 180, minLevel: 5, img: "https://cdn.akamai.steamstatic.com/steam/apps/367520/header.jpg" },
    { id: 7, name: "Valheim", price: 25000, income: 400, minLevel: 6, img: "https://cdn.akamai.steamstatic.com/steam/apps/892970/header.jpg" },
    { id: 8, name: "Rust", price: 50000, income: 850, minLevel: 7, img: "https://cdn.akamai.steamstatic.com/steam/apps/252490/header.jpg" },
    { id: 9, name: "Deep Rock Galactic", price: 90000, income: 1600, minLevel: 8, img: "https://cdn.akamai.steamstatic.com/steam/apps/548430/header.jpg" },
    { id: 10, name: "Hades", price: 150000, income: 2800, minLevel: 9, img: "https://cdn.akamai.steamstatic.com/steam/apps/1145360/header.jpg" },
    { id: 11, name: "Dead Cells", price: 250000, income: 4500, minLevel: 10, img: "https://cdn.akamai.steamstatic.com/steam/apps/588650/header.jpg" },
    { id: 12, name: "Project Zomboid", price: 400000, income: 7000, minLevel: 11, img: "https://cdn.akamai.steamstatic.com/steam/apps/108600/header.jpg" },
    { id: 13, name: "Cyberpunk 2077", price: 700000, income: 12000, minLevel: 12, img: "https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg" },
    { id: 14, name: "The Witcher 3", price: 1200000, income: 22000, minLevel: 13, img: "https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg" },
    { id: 15, name: "Elden Ring", price: 2000000, income: 40000, minLevel: 14, img: "https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg" },
    { id: 16, name: "RDR 2", price: 3500000, income: 75000, minLevel: 15, img: "https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg" },
    { id: 17, name: "Baldur's Gate 3", price: 6000000, income: 130000, minLevel: 16, img: "https://cdn.akamai.steamstatic.com/steam/apps/1086940/header.jpg" },
    { id: 18, name: "Sea of Thieves", price: 10000000, income: 250000, minLevel: 17, img: "https://cdn.akamai.steamstatic.com/steam/apps/1172620/header.jpg" },
    { id: 19, name: "Forza Horizon 5", price: 18000000, income: 450000, minLevel: 18, img: "https://cdn.akamai.steamstatic.com/steam/apps/1551360/header.jpg" },
    { id: 20, name: "God of War", price: 30000000, income: 800000, minLevel: 19, img: "https://cdn.akamai.steamstatic.com/steam/apps/1593500/header.jpg" },
    { id: 21, name: "Sekiro", price: 50000000, income: 1500000, minLevel: 20, img: "https://cdn.akamai.steamstatic.com/steam/apps/814380/header.jpg" },
    { id: 22, name: "Dying Light 2", price: 85000000, income: 2800000, minLevel: 21, img: "https://cdn.akamai.steamstatic.com/steam/apps/534380/header.jpg" },
    { id: 23, name: "Arma 3", price: 150000000, income: 5000000, minLevel: 22, img: "https://cdn.akamai.steamstatic.com/steam/apps/107410/header.jpg" },
    { id: 24, name: "DayZ", price: 250000000, income: 9000000, minLevel: 23, img: "https://cdn.akamai.steamstatic.com/steam/apps/221100/header.jpg" },
    { id: 25, name: "Satisfactory", price: 400000000, income: 15000000, minLevel: 24, img: "https://cdn.akamai.steamstatic.com/steam/apps/526870/header.jpg" },
    { id: 26, name: "Factorio", price: 700000000, income: 28000000, minLevel: 25, img: "https://cdn.akamai.steamstatic.com/steam/apps/427520/header.jpg" },
    { id: 27, name: "Black Myth: Wukong", price: 1200000000, income: 50000000, minLevel: 26, img: "https://cdn.akamai.steamstatic.com/steam/apps/2358720/header.jpg" },
    { id: 28, name: "Helldivers 2", price: 2500000000, income: 100000000, minLevel: 27, img: "https://cdn.akamai.steamstatic.com/steam/apps/553850/header.jpg" },
    { id: 29, name: "Starfield", price: 5000000000, income: 220000000, minLevel: 28, img: "https://cdn.akamai.steamstatic.com/steam/apps/1716740/header.jpg" },
    { id: 30, name: "Garry's Mod", price: 10000000000, income: 500000000, minLevel: 29, img: "https://cdn.akamai.steamstatic.com/steam/apps/4000/header.jpg" },
    { id: 31, name: "Dota 2 Arcana", price: 25000000000, income: 1200000000, minLevel: 30, img: "https://cdn.akamai.steamstatic.com/steam/apps/570/header.jpg" },
    { id: 32, name: "CS2 Dragon Lore", price: 60000000000, income: 3000000000, minLevel: 31, img: "https://cdn.akamai.steamstatic.com/steam/apps/730/header.jpg" },
    { id: 33, name: "GTA V", price: 150000000000, income: 8000000000, minLevel: 32, img: "https://cdn.akamai.steamstatic.com/steam/apps/271590/header.jpg" },
    { id: 34, name: "Half-Life: Alyx", price: 400000000000, income: 25000000000, minLevel: 33, img: "https://cdn.akamai.steamstatic.com/steam/apps/546560/header.jpg" },
    { id: 35, name: "Steam Deck Gold", price: 1000000000000, income: 100000000000, minLevel: 35, img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1675200/header.jpg" }
];

const CARDS_DATA = [
  { id: 'c1', name: "Летняя карточка", price: 1000, multiplier: 2, img: "https://community.cloudflare.steamstatic.com/economy/image/IzG_zS6S-p2p1S6Id9Uc8Uq4Fw_A/360fx360f" },
  { id: 'c2', name: "Металлическая карточка", price: 25000, multiplier: 5, img: "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UdcugM_LRH_meYslVn4jJcyvMvQb97A/360fx360f" }
];

let gameState = {
  balance: 0,
  income: 0,
  clickPower: 1,
  ownedGames: [],
  cardPrices: {}, // Храним текущие цены карточек здесь
  gamePrices: {}, // Храним текущие цены игр здесь
  exp: 0,
  level: 1,
  totalClicks: 0,
  totalMoneyEarned: 0,
  username: "Player",
  status: "online"
};

// --- ВИЗУАЛЬНЫЕ ЭФФЕКТЫ ---
function spawnParticle(e) {
  const container = document.getElementById('click-particles');
  if (!container) return;
  const particle = document.createElement('div');
  particle.className = 'click-number';
  particle.innerText = `+$${gameState.clickPower}`;
  const rect = document.getElementById('steam-coin').getBoundingClientRect();
  particle.style.left = (e.clientX - rect.left) + 'px';
  particle.style.top = (e.clientY - rect.top) + 'px';
  container.appendChild(particle);
  setTimeout(() => particle.remove(), 800);
}

// --- ЛОГИКА КЛИКА ---
document.getElementById('steam-coin').onclick = (e) => {
  gameState.balance += gameState.clickPower;
  gameState.totalMoneyEarned += gameState.clickPower;
  gameState.totalClicks++;
  
  const snd = document.getElementById('click-sound');
  if(snd) { snd.currentTime = 0; snd.play().catch(()=>{}); }
  
  spawnParticle(e);
  updateUI();
  updateProfileUI();
  saveGame();
};

// --- ПРОФИЛЬ ---
document.getElementById('username-input').oninput = (e) => {
  gameState.username = e.target.value || "Player";
  saveGame();
};

function updateStatusColor() {
  const status = document.getElementById('status-select').value;
  const dot = document.getElementById('status-dot');
  gameState.status = status;
  
  dot.className = "status-indicator"; 
  if (status === "online") dot.classList.add('status-online');
  if (status === "away") dot.classList.add('status-away');
  if (status === "busy") dot.classList.add('status-busy');
  if (status === "offline") dot.classList.add('status-offline');
  saveGame();
}

function updateProfileUI() {
  const clicks = document.getElementById('stat-clicks');
  const totalMoney = document.getElementById('stat-total-money');
  const statLvl = document.getElementById('stat-lvl');
  const statGames = document.getElementById('stat-games');

  if(clicks) clicks.innerText = gameState.totalClicks.toLocaleString();
  if(totalMoney) totalMoney.innerText = Math.floor(gameState.totalMoneyEarned).toLocaleString();
  if(statLvl) statLvl.innerText = gameState.level;
  if(statGames) statGames.innerText = gameState.ownedGames.length;

  const nextUnlockGame = GAMES_DATA.find(g => g.minLevel > gameState.level);
  let goalEl = document.getElementById('level-goal-text');
  if(!goalEl && statLvl) {
    goalEl = document.createElement('div');
    goalEl.id = 'level-goal-text';
    goalEl.style.fontSize = '11px';
    goalEl.style.color = '#66c0f4';
    goalEl.style.marginTop = '5px';
    statLvl.parentElement.appendChild(goalEl);
  }
  if(goalEl) {
    goalEl.innerText = nextUnlockGame ? `Цель: Lvl ${nextUnlockGame.minLevel} (${nextUnlockGame.name})` : "Все игры открыты!";
  }
}

// --- ЛОГИКА ПОКУПОК ---
function buyGame(id) {
  const game = GAMES_DATA.find(g => g.id === id);
  const currentPrice = gameState.gamePrices[id] || game.price;

  if (gameState.balance >= currentPrice) {
    gameState.balance -= currentPrice;
    gameState.income += game.income;
    gameState.exp += 25; 
    
    const snd = document.getElementById('buy-sound');
    if(snd) { snd.currentTime = 0; snd.play().catch(()=>{}); }

    const existing = gameState.ownedGames.find(og => og.id === id);
    if (existing) existing.count++;
    else gameState.ownedGames.push({ id: game.id, name: game.name, img: game.img, count: 1 });
    
    showAchievement(game);
    offerTrailer(game.id, game.name);
    
    // Сохраняем новую цену в gameState
    gameState.gamePrices[id] = Math.round(currentPrice * 2.2);
    
    checkLevel();
    updateUI();
    renderShop();
    renderLibrary();
    updateProfileUI();
    saveGame();
  }
}

function buyCard(id) {
  const card = CARDS_DATA.find(c => c.id === id);
  const currentPrice = gameState.cardPrices[id] || card.price;

  if (gameState.balance >= currentPrice) {
    gameState.balance -= currentPrice;
    gameState.clickPower *= card.multiplier;
    gameState.exp += 100; 
    
    // Сохраняем новую цену в gameState
    gameState.cardPrices[id] = Math.round(currentPrice * 18);
    
    const snd = document.getElementById('buy-sound');
    if(snd) { snd.currentTime = 0; snd.play().catch(()=>{}); }
    showAchievement({name: "Клик x" + card.multiplier, img: card.img});
    
    checkLevel();
    updateUI();
    renderShop();
    updateProfileUI();
    saveGame();
  }
}

// --- СИСТЕМА ПРОГРЕССА ---
function checkLevel() {
  const nextLevelExp = Math.floor(gameState.level * 100 * Math.pow(1.2, gameState.level - 1));
  
  if (gameState.exp >= nextLevelExp) {
    gameState.exp -= nextLevelExp;
    gameState.level++;
    gameState.balance += gameState.level * 200;
    
    const avatar = document.querySelector('.avatar-big');
    if(avatar) {
        avatar.classList.add('level-up-anim');
        setTimeout(() => avatar.classList.remove('level-up-anim'), 2000);
    }
    renderShop(); 
    saveGame();
  }
  
  const bar = document.getElementById('level-bar');
  const lvlText = document.getElementById('steam-level');
  const expValText = document.getElementById('exp-val');
  
  if(bar) bar.style.width = (gameState.exp / nextLevelExp * 100) + "%";
  if(lvlText) lvlText.innerText = gameState.level;
  if(expValText) expValText.innerText = Math.floor(gameState.exp) + " / " + nextLevelExp;
}

// --- ИНТЕРФЕЙС ---
function updateUI() {
  document.getElementById('balance').innerText = Math.floor(gameState.balance).toLocaleString();
  document.getElementById('income').innerText = gameState.income.toLocaleString();
  document.getElementById('click-power').innerText = gameState.clickPower.toLocaleString();
}

function showTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
  if (window.event) window.event.currentTarget.classList.add('active');
}

function renderShop() {
  const gameGrid = document.getElementById('shop-grid');
  const cardGrid = document.getElementById('cards-grid');

  if (gameGrid) {
    const visibleGames = GAMES_DATA.filter(g => gameState.level >= g.minLevel);
    const nextLocked = GAMES_DATA.find(g => g.minLevel > gameState.level);

    let html = visibleGames.map(game => {
      const currentPrice = gameState.gamePrices[game.id] || game.price;
      return `
      <div class="game-card">
        <img src="${game.img}" onerror="this.src='https://via.placeholder.com/200x100?text=Game'">
        <div class="game-info">
          <h4>${game.name}</h4>
          <p>+$${game.income}/сек</p>
          <span style="font-size: 9px; color: #66c0f4;">Lvl ${game.minLevel} требуется</span>
        </div>
        <div class="price-tag">
          <span>$${currentPrice.toLocaleString()}</span>
          <button class="buy-btn" ${gameState.balance < currentPrice ? 'disabled' : ''} onclick="buyGame(${game.id})">Купить</button>
        </div>
      </div>
    `}).join('');

    if (nextLocked) {
      html += `
        <div class="game-card" style="opacity: 0.5; border: 1px dashed #66c0f4; background: rgba(0,0,0,0.2); display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 180px;">
           <div style="font-size: 30px; margin-bottom: 10px;">🔒</div>
           <h4 style="margin: 0; color: #66c0f4;">Новинки скоро</h4>
           <p style="font-size: 11px; text-align: center; color: #fff; padding: 0 5px;">
             Откроется на <b>${nextLocked.minLevel} уровне</b>
           </p>
        </div>
      `;
    }
    gameGrid.innerHTML = html;
  }

  if (cardGrid) {
    cardGrid.innerHTML = CARDS_DATA.map(card => {
      const currentPrice = gameState.cardPrices[card.id] || card.price;
      return `
      <div class="game-card card-item">
        <img src="${card.img}">
        <div class="game-info">
          <h4>${card.name}</h4>
          <p>Клик x${card.multiplier}</p>
        </div>
        <div class="price-tag">
          <span>$${currentPrice.toLocaleString()}</span>
          <button class="buy-btn" onclick="buyCard('${card.id}')" ${gameState.balance < currentPrice ? 'disabled' : ''}>Улучшить</button>
        </div>
      </div>
    `}).join('');
  }
}

function renderLibrary() {
  const grid = document.getElementById('inventory-grid');
  const countEl = document.getElementById('lib-count');
  let totalOwned = gameState.ownedGames.reduce((sum, g) => sum + g.count, 0);
  if(countEl) countEl.innerText = totalOwned;
  if (gameState.ownedGames.length === 0) {
    grid.innerHTML = '<p class="empty-msg">В библиотеке пусто...</p>';
    return;
  }
  grid.innerHTML = gameState.ownedGames.map(game => `
    <div class="owned-game">
      ${game.count > 1 ? `<div class="game-count-badge" style="position:absolute; background:#66c0f4; color:#fff; padding:2px 5px; border-radius:3px; font-size:10px;">x${game.count}</div>` : ''}
      <img src="${game.img}">
      <span>${game.name}</span>
    </div>
  `).join('');
}

function showAchievement(item) {
  const toast = document.getElementById('achievement-toast');
  if(!toast) return;
  document.getElementById('toast-name').innerText = item.name;
  document.getElementById('toast-img').src = item.img;
  toast.style.right = '20px';
  setTimeout(() => { toast.style.right = '-450px'; }, 3000);
}

// --- ТАЙМЕРЫ ---
setInterval(() => {
  gameState.balance += gameState.income;
  gameState.totalMoneyEarned += gameState.income;
  updateUI();
  updateProfileUI();
  
  // Обновляем доступность кнопок динамически
  document.querySelectorAll('#shop-grid .buy-btn').forEach((btn, i) => {
    const visibleGames = GAMES_DATA.filter(g => gameState.level >= g.minLevel);
    if(visibleGames[i]) {
        const currentPrice = gameState.gamePrices[visibleGames[i].id] || visibleGames[i].price;
        btn.disabled = gameState.balance < currentPrice;
    }
  });
  
  document.querySelectorAll('#cards-grid .buy-btn').forEach((btn, i) => {
      const card = CARDS_DATA[i];
      const currentPrice = gameState.cardPrices[card.id] || card.price;
      btn.disabled = gameState.balance < currentPrice;
  });
}, 1000);

// Инициализация
function saveGame() { localStorage.setItem('steam_clicker_save', JSON.stringify(gameState)); }
function loadGame() {
    const saved = localStorage.getItem('steam_clicker_save');
    if (saved) {
        const parsed = JSON.parse(saved);
        // Глубокое слияние, чтобы не потерять структуру объектов
        gameState = { ...gameState, ...parsed };
        if(!gameState.cardPrices) gameState.cardPrices = {};
        if(!gameState.gamePrices) gameState.gamePrices = {};
        
        const nameInput = document.getElementById('username-input');
        if (nameInput) nameInput.value = gameState.username;
        updateStatusColor();
    }
}

const clickSnd = new Audio('https://zvukogram.com/index.php?r=site/download&id=78409');
document.getElementById('steam-coin').addEventListener('click', () => {
    clickSnd.currentTime = 0;
    clickSnd.play().catch(() => {});
    saveGame(); 
});

loadGame();
renderShop();
renderLibrary();
checkLevel();
updateUI();
updateProfileUI();

// --- ТРЕЙЛЕРЫ ---
const TRAILERS = {
    1: "ot7uXNQskBA", 2: "w7uOhFTrMsk", 5: "LembwK716Wc", 6: "XHrskkHf958", 13: "LembwK716Wc", 15: "E3Huy2cdih0"
};
let currentVideoId = "";

function offerTrailer(gameId, gameName) {
    if (!TRAILERS[gameId]) return;
    const notify = document.getElementById('trailer-notification');
    const nameSpan = document.getElementById('trailer-game-name');
    currentVideoId = TRAILERS[gameId];
    if(nameSpan) nameSpan.innerText = gameName;
    if(notify) notify.style.display = 'block';
    setTimeout(() => { if(notify) notify.style.display = 'none'; }, 10000);
}

function openTrailer() {
    const overlay = document.getElementById('video-overlay');
    const iframe = document.getElementById('trailer-iframe');
    if (overlay && iframe) {
        iframe.src = `https://www.youtube.com/embed/${currentVideoId}?autoplay=1&rel=0`;
        overlay.style.display = 'flex';
    }
}

function closeTrailer() {
    const overlay = document.getElementById('video-overlay');
    const iframe = document.getElementById('trailer-iframe');
    if (overlay) overlay.style.display = 'none';
    if (iframe) iframe.src = ""; 
}
