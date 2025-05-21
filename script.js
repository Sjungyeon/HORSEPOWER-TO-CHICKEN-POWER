function calcCP() {
  const bench = parseFloat(document.getElementById('bench').value) || 0;
  const gain = parseFloat(document.getElementById('gain').value) || 0;

  // 1. CP 계산
  const chickenStrength = 5; // 닭 한 조각이 들 수 있는 힘 (kg)
  const chickenPower = (bench / chickenStrength).toFixed(1);

  // 2. 닭가슴살 섭취량 계산
  const proteinPerKg = 250; // 1kg 근육 생성에 필요한 단백질 (g)
  const proteinPerChicken = 25; // 닭가슴살 100g당 단백질 (g)
  const totalProtein = gain * proteinPerKg;
  const totalChicken = Math.ceil(totalProtein / proteinPerChicken);

  // 3. 출력
  document.getElementById('result').innerHTML = `
    🐔 당신의 가슴은 <strong>${chickenPower} CP</strong>입니다.<br>
    닭가슴살 한 조각이 낼 수 있는 힘(5kg)을 기준으로,<br>
    당신의 벤치프레스는 닭가슴살 <strong>${chickenPower}</strong>쪽이 동시에 들고 있는 셈입니다.<br><br>
    🍗 또한, 총 <strong>${totalChicken}</strong>개의 닭가슴살이<br>
    당신의 근육을 만드는 데 사용되었을 것으로 추정됩니다.
  `;

  drawChickens(Math.min(totalChicken, 20)); // 최대 20개만 표시
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
