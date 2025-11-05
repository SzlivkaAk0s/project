document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('auto-feltoltes-form');
  const kartyaContainer = document.getElementById('generalt-kartyak');
  
  // Betöltjük a korábban hozzáadott autókat a localStorage-ból
  betoltAutok();
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Űrlap adatainak összegyűjtése
    const autoAdatok = {
      nev: document.getElementById('auto-nev').value,
      leiras: document.getElementById('auto-leiras').value,
      kep: document.getElementById('auto-kep').value,
      ar: parseInt(document.getElementById('auto-ar').value),
      ajtok: parseInt(document.getElementById('auto-ajtok').value),
      uzemanyag: document.getElementById('auto-uzemanyag').value,
      evjarat: parseInt(document.getElementById('auto-evjarat').value),
      teljesitmeny: parseInt(document.getElementById('auto-teljesitmeny').value),
      ferohely: parseInt(document.getElementById('auto-ferohely').value),
      id: Date.now() // Egyedi azonosító
    };
    
    // Autó hozzáadása
    hozzaadAuto(autoAdatok);
    
    // Űrlap alaphelyzetbe állítása
    form.reset();
    
    // Sikeres üzenet
    alert('Autó sikeresen hozzáadva!');
  });
  
  function hozzaadAuto(auto) {
    // Kártya létrehozása
    const kartya = document.createElement('div');
    kartya.className = 'card';
    kartya.dataset.id = auto.id;
    
    kartya.innerHTML = `
      <div class="image-box">
        <img src="${auto.kep}" alt="${auto.nev}" onerror="this.src='autok/default.jpg'">
      </div>
      <div class="info">
        <div class="adat">
          <h2>${auto.nev}</h2>
          <p>${auto.leiras}</p>
          <br>
          <p>${auto.ar} Ft/nap</p>
          <br>
          <button class="tobb details-btn">Részletek</button>
          <button class="tobb torles-btn" style="margin-top: 5px; background: #e74c3c;">Törlés</button>
        </div>
      </div>
    `;
    
    // Kártya hozzáadása a konténerhez
    kartyaContainer.prepend(kartya);
    
    // Eseménykezelők hozzáadása
    kartya.querySelector('.details-btn').addEventListener('click', function() {
      mutatReszletek(auto);
    });
    
    kartya.querySelector('.torles-btn').addEventListener('click', function() {
      torolAuto(auto.id, kartya);
    });
    
    // Autó mentése localStorage-ba
    mentAuto(auto);
  }
  
  function mutatReszletek(auto) {
    // Popup létrehozása a részletek megjelenítéséhez
    const popupOverlay = document.createElement('div');
    popupOverlay.className = 'popup-overlay';
    popupOverlay.style.display = 'flex';
    
    popupOverlay.innerHTML = `
      <div class="popup-content">
        <span class="popup-close">&times;</span>
        <div class="popup-header">
          <h2>${auto.nev}</h2>
        </div>
        <div class="popup-image">
          <img src="${auto.kep}" alt="${auto.nev}" onerror="this.src='autok/default.jpg'">
        </div>
        <div class="popup-details">
          <div class="popup-detail">
            <h4>Napi bérleti díj</h4>
            <p>${auto.ar} Ft</p>
          </div>
          <div class="popup-detail">
            <h4>Ajtók száma</h4>
            <p>${auto.ajtok} ajtós</p>
          </div>
          <div class="popup-detail">
            <h4>Üzemanyag</h4>
            <p>${auto.uzemanyag}</p>
          </div>
          <div class="popup-detail">
            <h4>Évjárat</h4>
            <p>${auto.evjarat}</p>
          </div>
          <div class="popup-detail">
            <h4>Teljesítmény</h4>
            <p>${auto.teljesitmeny} LE</p>
          </div>
          <div class="popup-detail">
            <h4>Férőhely</h4>
            <p>${auto.ferohely} személyes</p>
          </div>
        </div>
        <div class="popup-description">
          <p>${auto.leiras}</p>
        </div>
        <div class="popup-actions">
          <button class="foglalas">Foglalás</button>
          <button class="tobb">Bezárás</button>
        </div>
      </div>
    `;
    
    document.body.appendChild(popupOverlay);
    
    // Eseménykezelők a popup-hoz
    popupOverlay.querySelector('.popup-close').addEventListener('click', function() {
      document.body.removeChild(popupOverlay);
    });
    
    popupOverlay.querySelector('.tobb').addEventListener('click', function() {
      document.body.removeChild(popupOverlay);
    });
    
    popupOverlay.querySelector('.foglalas').addEventListener('click', function() {
      alert('+36 30 852 5256 telefonszámon foglalhat!');
      document.body.removeChild(popupOverlay);
    });
    
    // Kattintás a háttérre bezárja a popup-ot
    popupOverlay.addEventListener('click', function(e) {
      if (e.target === popupOverlay) {
        document.body.removeChild(popupOverlay);
      }
    });
  }
  
  function torolAuto(id, kartyaElem) {
    if (confirm('Biztosan törölni szeretnéd ezt az autót?')) {
      // Kártya eltávolítása a DOM-ból
      kartyaElem.remove();
      
      // Autó eltávolítása a localStorage-ból
      const mentettAutok = JSON.parse(localStorage.getItem('feltoltottAutok')) || [];
      const frissitettAutok = mentettAutok.filter(auto => auto.id !== id);
      localStorage.setItem('feltoltottAutok', JSON.stringify(frissitettAutok));
      
      alert('Autó sikeresen törölve!');
    }
  }
  
  function mentAuto(auto) {
    const mentettAutok = JSON.parse(localStorage.getItem('feltoltottAutok')) || [];
    mentettAutok.push(auto);
    localStorage.setItem('feltoltottAutok', JSON.stringify(mentettAutok));
  }
  
  function betoltAutok() {
    const mentettAutok = JSON.parse(localStorage.getItem('feltoltottAutok')) || [];
    
    // Kártyák létrehozása a mentett autókhoz
    mentettAutok.forEach(auto => {
      hozzaadAuto(auto);
    });
  }
});