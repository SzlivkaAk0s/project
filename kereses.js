// Autó adatok
const cars = [
  { name: "Wagen A1", description: "Elegáns, kényelmes, megbízható.", image: "lakasok/lakas1.jpg" },
  { name: "Wagen A2", description: "Luxus terepjáró, prémium élmény.", image: "lakasok/lakas2.jpg" },
  { name: "Wagen A3", description: "Teljesen elektromos, modern technológia.", image: "lakasok/lakas3.jpg" },
  { name: "Wagen A4", description: "Elegáns, kényelmes, megbízható.", image: "lakasok/lakas4.jpg" },
  { name: "Wagen A5", description: "Luxus terepjáró, prémium élmény.", image: "lakasok/lakas5.jpg" },
  { name: "Wagen A6", description: "Teljesen elektromos, modern technológia.", image: "lakasok/lakas6.jpg" },
  { name: "Wagen A7", description: "Elegáns, kényelmes, megbízható.", image: "lakasok/lakas7.jpg" },
  { name: "Wagen A8", description: "Luxus terepjáró, prémium élmény.", image: "lakasok/lakas1.jpg" },
  { name: "Wagen A9", description: "Teljesen elektromos, modern technológia.", image: "lakasok/lakas2.jpg" },
  { name: "Wagen A10", description: "Elegáns, kényelmes, megbízható.", image: "lakasok/lakas3.jpg" },
  { name: "Wagen A11", description: "Luxus terepjáró, prémium élmény.", image: "lakasok/lakas4.jpg" },
  { name: "Wagen A12", description: "Teljesen elektromos, modern technológia.", image: "lakasok/lakas5.jpg" },
  { name: "Wagen A13", description: "Elegáns, kényelmes, megbízható.", image: "lakasok/lakas6.jpg" },
  { name: "Wagen A14", description: "Luxus terepjáró, prémium élmény.", image: "lakasok/lakas7.jpg" },
  { name: "Wagen A15", description: "Teljesen elektromos, modern technológia.", image: "lakasok/lakas1.jpg" },
  { name: "Wagen A16", description: "Elegáns, kényelmes, megbízható.", image: "lakasok/lakas2.jpg" },
  { name: "Wagen A17", description: "Luxus terepjáró, prémium élmény.", image: "lakasok/lakas3.jpg" },
  { name: "Wagen A18", description: "Teljesen elektromos, modern technológia.", image: "lakasok/lakas4.jpg" }
];

// Véletlenszerű ár és ajtószám generálása
function generateRandomPrice() {
  const prices = [5999, 6999, 7999, 8999, 9999, 10999, 11999, 12999, 13999, 14999];
  return prices[Math.floor(Math.random() * prices.length)];
}

function generateRandomDoors() {
  const doors = [2, 4, 5];
  return doors[Math.floor(Math.random() * doors.length)];
}

function generateRandomFuel() {
  const fuels = ["Benzin", "Dízel", "Hibrid", "Elektromos"];
  return fuels[Math.floor(Math.random() * fuels.length)];
}

function generateRandomYear() {
  return 2018 + Math.floor(Math.random() * 6); // 2018-2023 között
}

function generateRandomPower() {
  const powers = ["90 LE", "120 LE", "150 LE", "180 LE", "220 LE", "280 LE"];
  return powers[Math.floor(Math.random() * powers.length)];
}

function generateRandomSeats() {
  const seats = [2, 4, 5, 7];
  return seats[Math.floor(Math.random() * seats.length)];
}

// Kártyák létrehozása
function createCards() {
  const container = document.querySelector('.cards-container');
  container.innerHTML = '';
  
  cars.forEach((car, index) => {
    const price = generateRandomPrice();
    const doors = generateRandomDoors();
    
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.price = price;
    card.dataset.doors = doors;
    card.dataset.index = index;
    
    card.innerHTML = `
      <div class="image-box">
        <img src="${car.image}" alt="${car.name}">
      </div>
      <div class="info">
        <div class="adat">
          <h2>${car.name}</h2>
          <p>${car.description}</p>
          <p class="car-details">Ár: ${price} Ft/nap | Ajtók: ${doors}</p>
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
  const price = generateRandomPrice();
  const doors = generateRandomDoors();
  const fuel = generateRandomFuel();
  const year = generateRandomYear();
  const power = generateRandomPower();
  const seats = generateRandomSeats();
  
  document.getElementById('popup-title').textContent = car.name;
  document.getElementById('popup-img').src = car.image;
  document.getElementById('popup-price').textContent = price + ' Ft/nap';
  document.getElementById('popup-doors').textContent = doors + ' ajtós';
  document.getElementById('popup-fuel').textContent = fuel;
  document.getElementById('popup-year').textContent = year;
  document.getElementById('popup-power').textContent = power;
  document.getElementById('popup-seats').textContent = seats + ' személyes';
  document.getElementById('popup-description').textContent = car.description;
  
  document.getElementById('popup').style.display = 'flex';
}

// Szűrők alkalmazása
function applyFilters() {
  const priceFilters = Array.from(document.querySelectorAll('.price-filter:checked')).map(cb => cb.value);
  const doorFilters = Array.from(document.querySelectorAll('.door-filter:checked')).map(cb => cb.value);
  
  const cards = document.querySelectorAll('.card');
  
  cards.forEach(card => {
    const price = parseInt(card.dataset.price);
    const doors = parseInt(card.dataset.doors);
    
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
      let doorMatch = false;
      doorFilters.forEach(filter => {
        const doorValue = parseInt(filter);
        if (doors === doorValue) {
          doorMatch = true;
        }
      });
      if (!doorMatch) showCard = false;
    }
    
    // Kártya megjelenítése/elrejtése
    card.style.display = showCard ? 'flex' : 'none';
  });
}

// Eseménykezelők beállítása
function setupEventListeners() {
  // Ár szűrők
  document.querySelectorAll('.price-filter').forEach(checkbox => {
    checkbox.addEventListener('change', applyFilters);
  });
  
  // Ajtószám szűrők
  document.querySelectorAll('.door-filter').forEach(checkbox => {
    checkbox.addEventListener('change', applyFilters);
  });
  
  // Szűrők törlése
  document.getElementById('reset-filters').addEventListener('click', () => {
    document.querySelectorAll('.price-filter, .door-filter').forEach(checkbox => {
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
}

// Oldal betöltésekor
document.addEventListener('DOMContentLoaded', () => {
  createCards();
  setupEventListeners();
});