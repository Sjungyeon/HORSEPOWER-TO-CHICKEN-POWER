// script.js

function calcCP() {
  const bench = parseFloat(document.getElementById('bench').value) || 0;
  const gain = parseFloat(document.getElementById('gain').value) || 0;

  const chickenStrength = 5; // 닭 한 조각이 들 수 있는 힘 (kg)
  const chickenPower = (bench / chickenStrength).toFixed(1);

  const proteinPerKg = 250;
  const proteinPerChicken = 25;
  const totalProtein = gain * proteinPerKg;
  const totalChicken = Math.ceil(totalProtein / proteinPerChicken);

  document.getElementById('result').innerHTML = `
    <div class="cp-box">
      <h2>🔥 Your Chest is <strong>${chickenPower} CP</strong></h2>
      <p>💪 That's equivalent to <strong>${chickenPower}</strong> chicken breasts lifting in unison.</p>
      <p>🍗 Estimated <strong>${totalChicken}</strong> chicken breasts consumed during your transformation.</p>
    </div>
    <div class="pack-container">
      <img src="img/muscle-chicken-pack.png" alt="CP Pack" class="chicken-pack" />
      <div class="label label-top-left">100% NATURAL BULK</div>
      <div class="label label-top-right">NO ROIDS</div>
      <div class="label label-bottom">STEROID-FREE PROTEIN</div>
    </div>
  `;

  drawChickens(Math.min(totalChicken, 20));
}

function drawChickens(count) {
  const container = document.getElementById('chickenVisuals');
  container.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const img = document.createElement('img');
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Fried_chicken_drumstick.png/240px-Fried_chicken_drumstick.png';
    img.className = 'chicken-img';
    container.appendChild(img);

    setTimeout(() => {
      img.classList.add('visible');
    }, i * 150);
  }
}
