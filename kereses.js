// Autó adatok - minden autóhoz egyedi adatok
const cars = [
  { 
    name: "Wagen A1", 
    description: "Elegáns, kényelmes, megbízható.", 
    image: "lakasok/lakas1.jpg",
    price: 5999,
    doors: 4,
    fuel: "Benzin",
    year: 2020,
    power: 120,
    seats: 5
  },
  { 
    name: "Wagen A2", 
    description: "Luxus terepjáró, prémium élmény.", 
    image: "lakasok/lakas2.jpg",
    price: 12999,
    doors: 5,
    fuel: "Dízel",
    year: 2022,
    power: 220,
    seats: 5
  },
  { 
    name: "Wagen A3", 
    description: "Teljesen elektromos, modern technológia.", 
    image: "lakasok/lakas3.jpg",
    price: 10999,
    doors: 4,
    fuel: "Elektromos",
    year: 2023,
    power: 180,
    seats: 5
  },
  { 
    name: "Wagen A4", 
    description: "Elegáns, kényelmes, megbízható.", 
    image: "lakasok/lakas4.jpg",
    price: 6999,
    doors: 4,
    fuel: "Benzin",
    year: 2019,
    power: 110,
    seats: 5
  },
  { 
    name: "Wagen A5", 
    description: "Luxus terepjáró, prémium élmény.", 
    image: "lakasok/lakas5.jpg",
    price: 14999,
    doors: 5,
    fuel: "Dízel",
    year: 2023,
    power: 280,
    seats: 7
  },
  { 
    name: "Wagen A6", 
    description: "Teljesen elektromos, modern technológia.", 
    image: "lakasok/lakas6.jpg",
    price: 11999,
    doors: 4,
    fuel: "Elektromos",
    year: 2022,
    power: 200,
    seats: 5
  },
  { 
    name: "Wagen A7", 
    description: "Elegáns, kényelmes, megbízható.", 
    image: "lakasok/lakas7.jpg",
    price: 7999,
    doors: 4,
    fuel: "Hibrid",
    year: 2021,
    power: 150,
    seats: 5
  },
  { 
    name: "Wagen A8", 
    description: "Luxus terepjáró, prémium élmény.", 
    image: "lakasok/lakas1.jpg",
    price: 13999,
    doors: 5,
    fuel: "Dízel",
    year: 2022,
    power: 240,
    seats: 7
  },
  { 
    name: "Wagen A9", 
    description: "Teljesen elektromos, modern technológia.", 
    image: "lakasok/lakas2.jpg",
    price: 9999,
    doors: 4,
    fuel: "Elektromos",
    year: 2021,
    power: 160,
    seats: 4
  },
  { 
    name: "Wagen A10", 
    description: "Elegáns, kényelmes, megbízható.", 
    image: "lakasok/lakas3.jpg",
    price: 8999,
    doors: 2,
    fuel: "Benzin",
    year: 2020,
    power: 90,
    seats: 4
  },
  { 
    name: "Wagen A11", 
    description: "Luxus terepjáró, prémium élmény.", 
    image: "lakasok/lakas4.jpg",
    price: 11999,
    doors: 5,
    fuel: "Hibrid",
    year: 2022,
    power: 190,
    seats: 5
  },
  { 
    name: "Wagen A12", 
    description: "Teljesen elektromos, modern technológia.", 
    image: "lakasok/lakas5.jpg",
    price: 10999,
    doors: 4,
    fuel: "Elektromos",
    year: 2023,
    power: 170,
    seats: 5
  },
  { 
    name: "Wagen A13", 
    description: "Elegáns, kényelmes, megbízható.", 
    image: "lakasok/lakas6.jpg",
    price: 6999,
    doors: 4,
    fuel: "Benzin",
    year: 2018,
    power: 100,
    seats: 5
  },
  { 
    name: "Wagen A14", 
    description: "Luxus terepjáró, prémium élmény.", 
    image: "lakasok/lakas7.jpg",
    price: 12999,
    doors: 5,
    fuel: "Dízel",
    year: 2023,
    power: 250,
    seats: 7
  },
  { 
    name: "Wagen A15", 
    description: "Teljesen elektromos, modern technológia.", 
    image: "lakasok/lakas1.jpg",
    price: 8999,
    doors: 4,
    fuel: "Elektromos",
    year: 2020,
    power: 140,
    seats: 4
  },
  { 
    name: "Wagen A16", 
    description: "Elegáns, kényelmes, megbízható.", 
    image: "lakasok/lakas2.jpg",
    price: 7999,
    doors: 2,
    fuel: "Benzin",
    year: 2019,
    power: 95,
    seats: 2
  },
  { 
    name: "Wagen A17", 
    description: "Luxus terepjáró, prémium élmény.", 
    image: "lakasok/lakas3.jpg",
    price: 14999,
    doors: 5,
    fuel: "Hibrid",
    year: 2023,
    power: 300,
    seats: 7
  },
  { 
    name: "Wagen A18", 
    description: "Teljesen elektromos, modern technológia.", 
    image: "lakasok/lakas4.jpg",
    price: 11999,
    doors: 4,
    fuel: "Elektromos",
    year: 2022,
    power: 210,
    seats: 5
  }
];

// Kártyák létrehozása
function createCards() {
  const container = document.querySelector('.cards-container');
  container.innerHTML = '';
  
  cars.forEach((car, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.price = car.price;
    card.dataset.doors = car.doors;
    card.dataset.fuel = car.fuel;
    card.dataset.year = car.year;
    card.dataset.power = car.power;
    card.dataset.seats = car.seats;
    card.dataset.index = index;
    
    card.innerHTML = `
      <div class="image-box">
        <img src="${car.image}" alt="${car.name}">
      </div>
      <div class="info">
        <div class="adat">
          <h2>${car.name}</h2>
          <p>${car.description}</p>
          <br>
          <p>${car.price} Ft/nap</p>
          <br>
          <button class="tobb details-btn">Részletek</button> 
        </div>
      </div>
    `;
    
    container.appendChild(card);
  });
  
  // Részletek gomb eseménykezelők
  document.querySelectorAll('.details-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const card = this.closest('.card');
      const index = parseInt(card.dataset.index);
      showPopup(index);
    });
  });
}

// Popup megjelenítése
function showPopup(index) {
  const car = cars[index];
  document.getElementById('popup-title').textContent = car.name;
  document.getElementById('popup-img').src = car.image;
  document.getElementById('popup-price').textContent = car.price + ' Ft/nap';
  document.getElementById('popup-doors').textContent = car.doors + ' ajtós';
  document.getElementById('popup-fuel').textContent = car.fuel;
  document.getElementById('popup-year').textContent = car.year;
  document.getElementById('popup-power').textContent = car.power + ' LE';
  document.getElementById('popup-seats').textContent = car.seats + ' személyes';
  document.getElementById('popup-description').textContent = car.description;
  
  document.getElementById('popup').style.display = 'flex';
}

// Aktív szűrők megjelenítése
function updateActiveFilters() {
  const activeFiltersContainer = document.getElementById('active-filters');
  activeFiltersContainer.innerHTML = '';
  
  const allCheckboxes = document.querySelectorAll('.szuro-panel input[type="checkbox"]:checked');
  
  allCheckboxes.forEach(checkbox => {
    const filterType = checkbox.classList[0].replace('-filter', '');
    const filterValue = getFilterDisplayName(filterType, checkbox.value);
    
    const badge = document.createElement('div');
    badge.className = 'filter-badge';
    badge.innerHTML = `
      ${filterValue}
      <button class="remove" data-type="${filterType}" data-value="${checkbox.value}">×</button>
    `;
    
    activeFiltersContainer.appendChild(badge);
  });
  
  // Remove gombok eseménykezelői
  document.querySelectorAll('.filter-badge .remove').forEach(btn => {
    btn.addEventListener('click', function() {
      const type = this.dataset.type;
      const value = this.dataset.value;
      const checkbox = document.querySelector(`.${type}-filter[value="${value}"]`);
      if (checkbox) {
        checkbox.checked = false;
        applyFilters();
      }
    });
  });
}

// Szűrő értékek megjelenítési neve
function getFilterDisplayName(type, value) {
  const names = {
    price: {
      '0-7999': '≤ 7999 Ft',
      '8000-11999': '8000-11999 Ft',
      '12000-999999': '≥ 12000 Ft'
    },
    door: {
      '2': '2 ajtós',
      '4': '4 ajtós',
      '5': '5+ ajtós'
    },
    fuel: {
      'Benzin': 'Benzin',
      'Dízel': 'Dízel',
      'Hibrid': 'Hibrid',
      'Elektromos': 'Elektromos'
    },
    year: {
      '2018-2019': '2018-2019',
      '2020-2021': '2020-2021',
      '2022-2023': '2022-2023'
    },
    power: {
      '0-120': '≤ 120 LE',
      '121-200': '121-200 LE',
      '201-999': '≥ 200 LE'
    },
    seats: {
      '2': '2 személyes',
      '4': '4 személyes',
      '5': '5 személyes',
      '7': '7 személyes'
    }
  };
  
  return names[type]?.[value] || value;
}

// Szűrők alkalmazása
function applyFilters() {
  const priceFilters = Array.from(document.querySelectorAll('.price-filter:checked')).map(cb => cb.value);
  const doorFilters = Array.from(document.querySelectorAll('.door-filter:checked')).map(cb => parseInt(cb.value));
  const fuelFilters = Array.from(document.querySelectorAll('.fuel-filter:checked')).map(cb => cb.value);
  const yearFilters = Array.from(document.querySelectorAll('.year-filter:checked')).map(cb => cb.value);
  const powerFilters = Array.from(document.querySelectorAll('.power-filter:checked')).map(cb => cb.value);
  const seatsFilters = Array.from(document.querySelectorAll('.seats-filter:checked')).map(cb => parseInt(cb.value));
  
  const cards = document.querySelectorAll('.card');
  let visibleCount = 0;
  
  cards.forEach(card => {
    const price = parseInt(card.dataset.price);
    const doors = parseInt(card.dataset.doors);
    const fuel = card.dataset.fuel;
    const year = parseInt(card.dataset.year);
    const power = parseInt(card.dataset.power);
    const seats = parseInt(card.dataset.seats);
    
    let showCard = true;
    
    // Ár szűrés
    if (priceFilters.length > 0) {
      let priceMatch = false;
      priceFilters.forEach(filter => {
        const [min, max] = filter.split('-').map(Number);
        if (price >= min && price <= max) {
          priceMatch = true;
        }
      });
      if (!priceMatch) showCard = false;
    }
    
    // Ajtószám szűrés
    if (doorFilters.length > 0) {
      if (!doorFilters.includes(doors)) showCard = false;
    }
    
    // Üzemanyag szűrés
    if (fuelFilters.length > 0) {
      if (!fuelFilters.includes(fuel)) showCard = false;
    }
    
    // Évjárat szűrés
    if (yearFilters.length > 0) {
      let yearMatch = false;
      yearFilters.forEach(filter => {
        const [min, max] = filter.split('-').map(Number);
        if (year >= min && year <= max) {
          yearMatch = true;
        }
      });
      if (!yearMatch) showCard = false;
    }
    
    // Teljesítmény szűrés
    if (powerFilters.length > 0) {
      let powerMatch = false;
      powerFilters.forEach(filter => {
        const [min, max] = filter.split('-').map(Number);
        if (power >= min && power <= max) {
          powerMatch = true;
        }
      });
      if (!powerMatch) showCard = false;
    }
    
    // Férőhely szűrés
    if (seatsFilters.length > 0) {
      if (!seatsFilters.includes(seats)) showCard = false;
    }
    
    // Kártya megjelenítése/elrejtése
    card.style.display = showCard ? 'flex' : 'none';
    if (showCard) visibleCount++;
  });
  
  // Aktív szűrők frissítése
  updateActiveFilters();
  
  // Ha nincs találat, üzenet megjelenítése
  const noResults = document.querySelector('.no-results');
  if (visibleCount === 0) {
    if (!noResults) {
      const container = document.querySelector('.cards-container');
      const message = document.createElement('div');
      message.className = 'no-results';
      message.textContent = 'Nincs találat a megadott szűrési feltételek alapján.';
      container.appendChild(message);
    }
  } else if (noResults) {
    noResults.remove();
  }
}

// Eseménykezelők beállítása
function setupEventListeners() {
  const szuroPanel = document.getElementById('szuro-panel');
  const toggleButton = document.getElementById('toggle-szuro');
  
  // Szűrő panel megnyitása/bezárása
  toggleButton.addEventListener('click', () => {
    szuroPanel.classList.toggle('open');
    toggleButton.classList.toggle('active');
  });
  
  // Automatikus szűrés kikapcsolása és Alkalmaz gomb
  document.querySelectorAll('.szuro-panel input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      // Itt nem hívjuk meg az applyFilters()-t, csak az Alkalmaz gomb fogja
    });
  });
  
  // Alkalmaz gomb
  document.getElementById('apply-filters').addEventListener('click', () => {
    applyFilters();
    // Opcionálisan bezárhatjuk a szűrő panelt alkalmazás után
    if (window.innerWidth <= 768) {
      szuroPanel.classList.remove('open');
      toggleButton.classList.remove('active');
    }
  });
  
  // Szűrők törlése
  document.getElementById('reset-filters').addEventListener('click', () => {
    document.querySelectorAll('.szuro-panel input[type="checkbox"]').forEach(checkbox => {
      checkbox.checked = false;
    });
    applyFilters();
  });
  
  // Popup bezárása
  document.getElementById('close-popup').addEventListener('click', () => {
    document.getElementById('popup').style.display = 'none';
  });
  
  document.getElementById('popup-close-btn').addEventListener('click', () => {
    document.getElementById('popup').style.display = 'none';
  });
  
  // Popup bezárása kattintásra a háttérre
  document.getElementById('popup').addEventListener('click', (e) => {
    if (e.target === document.getElementById('popup')) {
      document.getElementById('popup').style.display = 'none';
    }
  });
  
  // Foglalás gomb
  document.getElementById('popup-reserve').addEventListener('click', () => {
    alert('+36 30 852 5256 telefonszámon foglalhat!');
    document.getElementById('popup').style.display = 'none';
  });
  
  // Kattintás a szűrőn kívülre bezárja a panelt
  document.addEventListener('click', (e) => {
    if (!szuroPanel.contains(e.target) && !toggleButton.contains(e.target) && 
        szuroPanel.classList.contains('open')) {
      szuroPanel.classList.remove('open');
      toggleButton.classList.remove('active');
    }
  });
}

// Oldal betöltésekor
document.addEventListener('DOMContentLoaded', () => {
  createCards();
  setupEventListeners();
});