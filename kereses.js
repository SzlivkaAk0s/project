// Autó adatok - minden autóhoz egyedi adatok
const cars = [
  { 
    name: "Toyota Corolla", 
    description: "Megbízható, takarékos családi kompakt.", 
    image: "autok/toyota_corolla.jpg",
    price: 5999,
    doors: 5,
    fuel: "Benzin",
    year: 2020,
    power: 116,
    seats: 5
  },
  { 
    name: "Volkswagen Golf", 
    description: "Kényelmes, jó úttartás, sok extrával.", 
    image: "autok/golf.jpg",
    price: 6499,
    doors: 5,
    fuel: "Benzin",
    year: 2020,
    power: 130,
    seats: 5
  },
  { 
    name: "Ford Focus", 
    description: "Dinamikus vezetés, tágas belső.", 
    image: "autok/ford_focus.jpg",
    price: 5799,
    doors: 5,
    fuel: "Benzin",
    year: 2020,
    power: 180,
    seats: 5
  },
  { 
    name: "Honda Civic", 
    description: "Sportos karakter, megbízható motor.", 
    image: "autok/honda_civic.jpg",
    price: 6299,
    doors: 5,
    fuel: "Benzin",
    year: 2010,
    power: 158,
    seats: 5
  },
  { 
    name: "Škoda Octavia", 
    description: "Kiemelkedően tágas csomagtér, komfortos utazás.", 
    image: "autok/skoda_octavia.jpg",
    price: 6999,
    doors: 5,
    fuel: "Benzin",
    year: 2020,
    power: 150,
    seats: 5
  },
  { 
    name: "Renault Clio", 
    description: "Kisebb városi autó, gazdaságos használat.", 
    image: "autok/renault_clio.jpg",
    price: 4999,
    doors: 5,
    fuel: "Benzin",
    year: 2020,
    power: 100,
    seats: 5
  },
  { 
    name: "Opel Astra", 
    description: "Kiegyensúlyozott, kényelmes napi használatra.", 
    image: "autok/opel_astra.jpg",
    price: 5699,
    doors: 5,
    fuel: "Benzin",
    year: 2020,
    power: 110,
    seats: 5
  },
  { 
    name: "Kia Ceed", 
    description: "Jó ár-érték arány, modern felszereltség.", 
    image: "autok/kia_ceed.jpg",
    price: 5899,
    doors: 5,
    fuel: "Benzin",
    year: 2020,
    power: 120,
    seats: 5
  },
  { 
    name: "Hyundai i30", 
    description: "Megbízható, kényelmes városi és országúti autó.", 
    image: "autok/Hyundai_i30.jpg",
    price: 5799,
    doors: 5,
    fuel: "Benzin",
    year: 2020,
    power: 120,
    seats: 5
  },
  { 
    name: "Peugeot 308", 
    description: "belső, kényelmes utazás.", 
    image: "autok/peugot_308.jpg",
    price: 6099,
    doors: 5,
    fuel: "Benzin",
    year: 2020,
    power: 130,
    seats: 5
  },
  { 
    name: "BMW i3", 
    description: "Elektromos városi autó prémium belsővel és csendes futással.", 
    image: "autok/bmw_i3.jpg",
    price: 11999,
    doors: 3,
    fuel: "Elektromos",
    year: 2019,
    power: 170,
    seats: 4
  },
  { 
    name: "Volkswagen Passat Variant", 
    description: "Tágas, kényelmes dízel kombi hosszú utakra.", 
    image: "autok/passat_variant.jpg",
    price: 9499,
    doors: 5,
    fuel: "Dízel",
    year: 2021,
    power: 150,
    seats: 5
  },
  { 
    name: "Mazda MX-5 Roadster", 
    description: "Könnyű, hátsókerekes sportautó, élvezetes vezetéshez.", 
    image: "autok/Mazda_MX5.jpg",
    price: 14999,
    doors: 2,
    fuel: "Benzin",
    year: 2018,
    power: 184,
    seats: 2
  },
  { 
    name: "Toyota RAV4 Hybrid", 
    description: "Hibrid SUV takarékos motorral és tágas belsővel.", 
    image: "autok/toyota_rav4.jpg",
    price: 10999,
    doors: 5,
    fuel: "Hibrid",
    year: 2022,
    power: 218,
    seats: 5
  },
  { 
    name: "Fiat 500", 
    description: "Kis városi autó stílusos dizájnnal és alacsony fogyasztással.", 
    image: "autok/fiat_500.jpg",
    price: 5499,
    doors: 3,
    fuel: "Benzin",
    year: 2017,
    power: 85,
    seats: 4
  },
  { 
    name: "Mercedes-Benz E220d", 
    description: "Elegáns, kényelmes dízel szedán prémium belsővel.", 
    image: "autok/mercedes_e220.jpg",
    price: 13999,
    doors: 4,
    fuel: "Dízel",
    year: 2021,
    power: 194,
    seats: 5
  },
  { 
    name: "Nissan Leaf", 
    description: "Elektromos családi autó csendes és takarékos üzemmel.", 
    image: "autok/nissan_leaf.jpg",
    price: 10499,
    doors: 5,
    fuel: "Hibrid",
    year: 2020,
    power: 150,
    seats: 5
  },
  { 
    name: "Suzuki Jimny", 
    description: "Kisméretű terepjáró, igazi kalandautó nehéz terepre.", 
    image: "autok/suzuki_jimny.jpg",
    price: 8999,
    doors: 3,
    fuel: "Benzin",
    year: 2019,
    power: 102,
    seats: 4
  }, 

  { 
    name: "Tesla Model 3", 
    description: "Elektromos szedán gyorsulásra és modern technológiára hangolva.", 
    image: "autok/tesla_model3.jpg",
    price: 17999,
    doors: 4,
    fuel: "Elektromos",
    year: 2022,
    power: 283,
    seats: 5
  },

  { 
    name: "Peugeot 5008", 
    description: "Nagy, hétüléses SUV kényelmes utazásokhoz.", 
    image: "autok/peugot_5008.jpg",
    price: 11499,
    doors: 5,
    fuel: "Dízel",
    year: 2021,
    power: 130,
    seats: 7
  },

  { 
    name: "Audi A4 Avant", 
    description: "Kényelmes, tágas kombi erős motorral és prémium felszereltséggel.", 
    image: "autok/audi_a4.jpg",
    price: 10999,
    doors: 5,
    fuel: "Dízel",
    year: 2020,
    power: 163,
    seats: 5
  },

  { 
    name: "Hyundai Kona Electric", 
    description: "Modern elektromos SUV, hosszú hatótávval és csendes futással.", 
    image: "autok/Hyundai_Electric.jpg",
    price: 12499,
    doors: 5,
    fuel: "Elektromos",
    year: 2022,
    power: 204,
    seats: 5
  },

  { 
    name: "Renault Megane", 
    description: "Megbízható és kényelmes kompakt autó városi és országúti használatra.", 
    image: "autok/renault_megane.jpg",
    price: 7499,
    doors: 5,
    fuel: "Benzin",
    year: 2019,
    power: 115,
    seats: 5
  },

  { 
    name: "Jeep Renegade", 
    description: "Robusztus kis SUV, terepre és városba egyaránt alkalmas.", 
    image: "autok/jeep.jpg",
    price: 9999,
    doors: 5,
    fuel: "Hibrid",
    year: 2021,
    power: 190,
    seats: 5
  },

  { 
    name: "Mini Cooper 3D", 
    description: "Sportos, stílusos városi autó agilis vezethetőséggel.", 
    image: "autok/mini.jpg",
    price: 8499,
    doors: 3,
    fuel: "Benzin",
    year: 2018,
    power: 136,
    seats: 4
  },

  { 
    name: "Volvo XC60 Recharge", 
    description: "Plug-in hibrid SUV prémium komforttal és biztonsági technológiákkal.", 
    image: "autok/volvo.jpg",
    price: 15499,
    doors: 5,
    fuel: "Hibrid",
    year: 2022,
    power: 340,
    seats: 5
  },

  { 
    name: "Dacia Duster", 
    description: "Megbízható és strapabíró SUV kedvező áron.", 
    image: "autok/dachia.jpg",
    price: 7999,
    doors: 5,
    fuel: "Dízel",
    year: 2020,
    power: 115,
    seats: 5
  },

  { 
    name: "Opel Corsa-e", 
    description: "Teljesen elektromos városi autó halk működéssel és modern dizájnnal.", 
    image: "autok/corsae.jpg",
    price: 9499,
    doors: 5,
    fuel: "Elektromos",
    year: 2021,
    power: 136,
    seats: 5
  },

  { 
    name: "Skoda Fabia Combi", 
    description: "Praktikus kis kombi nagy csomagtérrel és alacsony fogyasztással.", 
    image: "autok/fabia.jpg",
    price: 6999,
    doors: 5,
    fuel: "Benzin",
    year: 2018,
    power: 95,
    seats: 5
  },

  { 
    name: "Kia Sportage", 
    description: "Középkategóriás SUV kényelmes utazáshoz és családi használathoz.", 
    image: "autok/sportage.jpg",
    price: 10499,
    doors: 5,
    fuel: "Hibrid",
    year: 2022,
    power: 230,
    seats: 5
  },

  { 
    name: "Toyota Yaris Hybrid", 
    description: "Kompakt hibrid autó városi használatra, alacsony fogyasztással.", 
    image: "autok/yaris.jpg",
    price: 7999,
    doors: 5,
    fuel: "Hibrid",
    year: 2021,
    power: 116,
    seats: 5
  },

  { 
    name: "Ford Fiesta", 
    description: "Könnyen kezelhető, takarékos kisautó mindennapi közlekedéshez.", 
    image: "autok/fiesta.jpg",
    price: 6499,
    doors: 5,
    fuel: "Benzin",
    year: 2019,
    power: 100,
    seats: 5
  },

  { 
    name: "BMW X3", 
    description: "Tágas prémium SUV kényelmes belsővel és erős motorral.", 
    image: "autok/x3.jpg",
    price: 13999,
    doors: 5,
    fuel: "Dízel",
    year: 2020,
    power: 190,
    seats: 5
  },

  { 
    name: "Peugeot 208", 
    description: "Modern, kis méretű autó fiatalos dizájnnal és gazdaságos motorral.", 
    image: "autok/208.jpg",
    price: 6999,
    doors: 5,
    fuel: "Benzin",
    year: 2020,
    power: 110,
    seats: 5
  },

  { 
    name: "Tesla Model Y", 
    description: "Elektromos SUV nagy hatótávval és fejlett vezetéstámogató rendszerekkel.", 
    image: "autok/modely.jpg",
    price: 17999,
    doors: 5,
    fuel: "Elektromos",
    year: 2023,
    power: 351,
    seats: 5
  },

  { 
    name: "Volkswagen Polo", 
    description: "Megbízható, jól felszerelt városi kisautó modern dizájnnal.", 
    image: "autok/polo.jpg",
    price: 6799,
    doors: 5,
    fuel: "Benzin",
    year: 2018,
    power: 95,
    seats: 5
  },

  { 
    name: "Honda CR-V Hybrid", 
    description: "Nagy méretű hibrid SUV tágas belsővel és kényelmes futással.", 
    image: "autok/crv.jpg",
    price: 11999,
    doors: 5,
    fuel: "Hibrid",
    year: 2022,
    power: 184,
    seats: 5
  },

  { 
    name: "Mazda CX-5", 
    description: "Elegáns SUV precíz vezethetőséggel és erős motorral.", 
    image: "autok/cx5.jpg",
    price: 10499,
    doors: 5,
    fuel: "Benzin",
    year: 2021,
    power: 165,
    seats: 5
  },

  { 
    name: "Renault Zoe", 
    description: "Kompakt elektromos autó ideális városi használatra.", 
    image: "autok/zoe.jpg",
    price: 8999,
    doors: 5,
    fuel: "Elektromos",
    year: 2020,
    power: 109,
    seats: 5
  },

  { 
    name: "Mercedes-Benz GLC 300e", 
    description: "Plug-in hibrid prémium SUV csendes, erős és kényelmes.", 
    image: "autok/glc.jpg",
    price: 15999,
    doors: 5,
    fuel: "Hibrid",
    year: 2022,
    power: 320,
    seats: 5
  },

  { 
    name: "Opel Insignia", 
    description: "Nagy szedán elegáns formával és kényelmes utazási élménnyel.", 
    image: "autok/insignia.jpg",
    price: 8999,
    doors: 4,
    fuel: "Dízel",
    year: 2019,
    power: 170,
    seats: 5
  },

  { 
    name: "Skoda Kamiq", 
    description: "Kompakt SUV modern technológiákkal és biztonságos vezethetőséggel.", 
    image: "autok/kamiq.jpg",
    price: 8499,
    doors: 5,
    fuel: "Benzin",
    year: 2021,
    power: 110,
    seats: 5
  },

  { 
    name: "Fiat Panda", 
    description: "Kis méretű, megbízható városi autó olcsó fenntartással.", 
    image: "autok/panda.jpg",
    price: 5499,
    doors: 5,
    fuel: "Benzin",
    year: 2017,
    power: 69,
    seats: 4
  },

  { 
    name: "Subaru Forester", 
    description: "Összkerékhajtású SUV kiváló terepképességgel és biztonsággal.", 
    image: "autok/forester.jpg",
    price: 11499,
    doors: 5,
    fuel: "Benzin",
    year: 2021,
    power: 182,
    seats: 5
  },
  
  { 
    name: "Seat Leon", 
    description: "Sportos kompakt autó modern megjelenéssel és agilis vezethetőséggel.", 
    image: "autok/leon.jpg",
    price: 8499,
    doors: 5,
    fuel: "Benzin",
    year: 2020,
    power: 150,
    seats: 5
  },
  { 
    name: "Nissan Qashqai", 
    description: "Népszerű családi SUV modern biztonsági rendszerekkel.", 
    image: "autok/qashqai.jpg",
    price: 9999,
    doors: 5,
    fuel: "Hibrid",
    year: 2022,
    power: 190,
    seats: 5
  },
  { 
    name: "Toyota Hilux", 
    description: "Masszív pick-up, nagy teherbírással és megbízható motorral.", 
    image: "autok/hilux.jpg",
    price: 12499,
    doors: 4,
    fuel: "Dízel",
    year: 2020,
    power: 204,
    seats: 5
  },
  { 
    name: "Citroen C3 Aircross", 
    description: "Divatos kis SUV kényelmes felfüggesztéssel és praktikus belsővel.", 
    image: "autok/c3aircross.jpg",
    price: 7999,
    doors: 5,
    fuel: "Benzin",
    year: 2019,
    power: 110,
    seats: 5
  },
  { 
    name: "Volvo V90", 
    description: "Nagy prémium kombi magas komfortszinttel és modern biztonsággal.", 
    image: "autok/v90.jpg",
    price: 13999,
    doors: 5,
    fuel: "Dízel",
    year: 2021,
    power: 235,
    seats: 5
  },
  { 
    name: "Peugeot e-2008", 
    description: "Elektromos crossover stílusos dizájnnal és halk működéssel.", 
    image: "autok/e2008.jpg",
    price: 10999,
    doors: 5,
    fuel: "Elektromos",
    year: 2022,
    power: 136,
    seats: 5
  },

  { 
    name: "Ford Mustang GT", 
    description: "Ikonikus sportkupé erőteljes V8-as motorral és hátsókerék-hajtással.", 
    image: "autok/mustang.jpg",
    price: 16999,
    doors: 2,
    fuel: "Benzin",
    year: 2021,
    power: 450,
    seats: 4
  },
  { 
    name: "Honda Jazz", 
    description: "Kompakt, tágas belsejű városi autó hibrid hajtással.", 
    image: "autok/jazz.jpg",
    price: 7499,
    doors: 5,
    fuel: "Hibrid",
    year: 2020,
    power: 109,
    seats: 5
  },
  { 
    name: "Volkswagen ID.4", 
    description: "Teljesen elektromos SUV, nagy hatótávval és modern belsővel.", 
    image: "autok/id4.jpg",
    price: 13499,
    doors: 5,
    fuel: "Elektromos",
    year: 2022,
    power: 204,
    seats: 5
  },
  { 
    name: "Land Rover Defender", 
    description: "Masszív terepjáró kiemelkedő terepképességgel és luxus belsővel.", 
    image: "autok/defender.jpg",
    price: 15999,
    doors: 5,
    fuel: "Dízel",
    year: 2021,
    power: 249,
    seats: 7
  },
  



  
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