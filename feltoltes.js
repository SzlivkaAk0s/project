document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    initAutoFeltoltes();
  }, 100);
});

function initAutoFeltoltes() {
  const form = document.getElementById('auto-feltoltes-form');
  const kartyaContainer = document.getElementById('generalt-kartyak');
  
  if (!form || !kartyaContainer) {
    console.log('Auto feltöltés: Űrlap vagy konténer nem található');
    return;
  }

  console.log('Auto feltöltés inicializálva');
  betoltAutok();

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    ujAutoHozzaadasa();
  });

  function betoltAutok() {
    try {
      const mentettAutok = JSON.parse(localStorage.getItem('feltoltottAutok')) || [];
      console.log('Auto feltöltés: ' + mentettAutok.length + ' autó betöltve');

      kartyaContainer.innerHTML = '';

      mentettAutok.forEach(auto => {
        hozzaadAuto(auto);
      });
    } catch (error) {
      console.error('Auto feltöltés hiba:', error);
    }
  }

  function hozzaadAuto(auto) {

    if (document.querySelector(`.card[data-id="${auto.id}"]`)) {
      return;
    }

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
          <button type="button" class="tobb details-btn">Részletek</button>
          <button type="button" class="tobb torles-btn" style="margin-top: 5px; background: #e74c3c;">Törlés</button>
        </div>
      </div>
    `;
    
    kartyaContainer.appendChild(kartya);
    
    const detailsBtn = kartya.querySelector('.details-btn');
    const torlesBtn = kartya.querySelector('.torles-btn');
    
    detailsBtn.addEventListener('click', function() {
      mutatReszletek(auto);
    });
    
    torlesBtn.addEventListener('click', function() {
      torolAuto(auto.id, kartya);
    });
  }

  function ujAutoHozzaadasa() {
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
      id: Date.now()
    };
    
    hozzaadAuto(autoAdatok);
    mentAuto(autoAdatok);
    form.reset();
    
    const uploadPopup = document.getElementById("upload-success-popup");
    if (uploadPopup) {
      uploadPopup.classList.add("show");

      setTimeout(() => {
        uploadPopup.classList.remove("show");
      }, 2000);
    }
  }

  function mutatReszletek(auto) {
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
          <button type="button" class="foglalas">Foglalás</button>
          <button type="button" class="tobb">Bezárás</button>
        </div>
      </div>
    `;
    
    document.body.appendChild(popupOverlay);

    const bezaras = function() {
      document.body.removeChild(popupOverlay);
    };
    
    popupOverlay.querySelector('.popup-close').addEventListener('click', bezaras);
    popupOverlay.querySelector('.tobb').addEventListener('click', bezaras);
    
    popupOverlay.querySelector('.foglalas').addEventListener('click', function() {

      const successPopup = document.getElementById("success-popup");
      if (successPopup) {
        successPopup.classList.add("show");

        setTimeout(() => {
          successPopup.classList.remove("show");
          window.location.href = "autok.html";
        }, 2000);
      }
      bezaras();
    });
    
    popupOverlay.addEventListener('click', function(e) {
      if (e.target === popupOverlay) {
        bezaras();
      }
    });
  }

  function torolAuto(id, kartyaElem) {

    const confirmPopup = document.getElementById("confirm-delete-popup");
    if (confirmPopup) {
      confirmPopup.classList.add("show");


      document.getElementById("confirm-delete-yes").onclick = () => {
        confirmPopup.classList.remove("show");

        kartyaElem.remove();

        const mentettAutok = JSON.parse(localStorage.getItem('feltoltottAutok')) || [];
        const frissitettAutok = mentettAutok.filter(auto => auto.id !== id);
        localStorage.setItem('feltoltottAutok', JSON.stringify(frissitettAutok));

        const successPopup = document.getElementById("delete-success-popup");
        if (successPopup) {
          successPopup.classList.add("show");

          setTimeout(() => {
            successPopup.classList.remove("show");
          }, 2000);
        }
      };

      document.getElementById("confirm-delete-no").onclick = () => {
        confirmPopup.classList.remove("show");
      };
    }
  }

  function mentAuto(auto) {
    const mentettAutok = JSON.parse(localStorage.getItem('feltoltottAutok')) || [];
    const letezoIndex = mentettAutok.findIndex(a => a.id === auto.id);
    
    if (letezoIndex === -1) {
      mentettAutok.push(auto);
      localStorage.setItem('feltoltottAutok', JSON.stringify(mentettAutok));
    }
  }
}