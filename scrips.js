function calcCP() {
  const s = parseFloat(document.getElementById('squat').value) || 0;
  const b = parseFloat(document.getElementById('bench').value) || 0;
  const d = parseFloat(document.getElementById('dead').value) || 0;
  const gain = parseFloat(document.getElementById('gain').value) || 0;

  const total = s + b + d;
  const cp = (total / 100).toFixed(1);
  const totalProtein = gain * 250;
  const chickenPerGramProtein = 5.5;
  const totalChicken = Math.ceil((totalProtein * chickenPerGramProtein) / 200);

  document.getElementById('result').innerHTML = `
    🐔 당신의 가슴은 <strong>${cp} CP</strong>입니다.<br>
    🍗 총 <strong>${totalChicken}개</strong>의 닭가슴살이 소모되었습니다.
  `;

  drawChickens(totalChicken);
}

function drawChickens(count) {
  const container = document.getElementById('chickenVisuals');
  container.innerHTML = ''; // reset
  const max = Math.min(count, 20); // 화면에 너무 많으면 과하니까 제한

  for (let i = 0; i < max; i++) {
    const img = document.createElement('img');
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Chicken_breast.png/480px-Chicken_breast.png';
    img.className = 'chicken-img';
    container.appendChild(img);

    setTimeout(() => {
      img.classList.add('visible');
    }, i * 150);
  }
}
