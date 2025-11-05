// Legkedvezőbb ajánlatok
const bestOffers = [
  {
    name: "Mazda MX-5 Roadster",
    desc: "Könnyű, hátsókerekes sportautó, élvezetes vezetéshez.",
    img: "autok/mazda_Mx5.jpg",
    price: "14999 Ft/nap"
  },
  {
    name: "Audi A4 Avant",
    desc: "Kényelmes, tágas kombi erős motorral és prémium felszereltséggel.",
    img: "autok/audi_a4.jpg",
    price: "10999 Ft/nap"
  },
  {
    name: "Peugeot 308",
    desc: "Belső, kényelmes utazás.",
    img: "autok/peugot_308.jpg",
    price: "6099 Ft/nap"
  }
];

// Legnépszerűbb ajánlatok
const popularOffers = [
  {
    name: "BMW I3",
    desc: "Elektromos városi autó prémium belsővel és csendes futással.",
    img: "autok/Bmw_i3.jpg",
    price: "11999 Ft/nap"
  },
  {
    name: "Tesla Model 3",
    desc: "Elektromos autó, modern technológia, nulla károsanyag-kibocsátás.",
    img: "autok/tesla_model3.jpg",
    price: "17999 Ft/nap"
  },
  {
    name: "Volvo XC60 Recharge",
    desc: "Plug-in hibrid SUV prémium komforttal és biztonsági technológiákkal.",
    img: "autok/volvo.jpg",
    price: "15499 Ft/nap"
  }
];

const saleOffers = [
  {
    name: "BMW I3",
    desc: "Elektromos városi autó prémium belsővel és csendes futással.",
    img: "autok/Bmw_i3.jpg",
    price: "10500 Ft/nap"
  },
  {
    name: "Audi A4 Avant",
    desc: "Kényelmes, tágas kombi erős motorral és prémium felszereltséggel.",
    img: "autok/audi_a4.jpg",
    price: "8000 Ft/nap"
  },
  {
    name: "Volvo XC60 Recharge",
    desc: "Plug-in hibrid SUV prémium komforttal és biztonsági technológiákkal.",
    img: "autok/volvo.jpg",
    price: "9999 Ft/nap"
  }
];

// Véletlenszerű elem kiválasztása
function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// DOM elemek frissítése
window.onload = function() {
  const best = getRandomItem(bestOffers);
  const popular = getRandomItem(popularOffers);
  const sale = getRandomItem(saleOffers);

  document.getElementById("best-name").textContent = best.name;
  document.getElementById("best-desc").textContent = best.desc;
  document.getElementById("best-img").src = best.img;
  document.getElementById("best-price").textContent = best.price;

  document.getElementById("popular-name").textContent = popular.name;
  document.getElementById("popular-desc").textContent = popular.desc;
  document.getElementById("popular-img").src = popular.img;
  document.getElementById("popular-price").textContent = popular.price;

  document.getElementById("sale-name").textContent = sale.name;
  document.getElementById("sale-desc").textContent = sale.desc;
  document.getElementById("sale-img").src = sale.img;
  document.getElementById("sale-price").textContent = sale.price;
};


// --- Részletek gombok eseménykezelői ---
document.querySelectorAll(".ajanlat .tobb").forEach((button, index) => {
  button.addEventListener("click", () => {
    let offer;
    if (index === 0) offer = document.getElementById("best-name").textContent;
    else if (index === 1) offer = document.getElementById("popular-name").textContent;
    else if (index === 2) offer = document.getElementById("sale-name").textContent;

    // URL-be kódolva küldjük tovább a kiválasztott autó nevét
    const encodedName = encodeURIComponent(offer);
    window.location.href = `autok.html?car=${encodedName}`;
  });
});