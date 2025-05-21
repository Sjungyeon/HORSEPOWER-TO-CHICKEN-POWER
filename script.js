function calcCP() {
  const bench = parseFloat(document.getElementById('bench').value) || 0;
  const gain = parseFloat(document.getElementById('gain').value) || 0;

  // 1. 닭가슴살력 계산
  const chickenPower = (bench / 2).toFixed(1); // 닭 한 조각이 2kg 들 수 있다고 가정

  // 2. 닭가슴살 섭취량 계산
  const proteinPerKg = 250; // 1kg 근육당 250g 단백질
  const chickenPerGramProtein = 0.25; // 닭가슴살 1g당 단백질 0.25g
  const totalProtein = gain * proteinPerKg;
  const totalChicken = Math.ceil(totalProtein / (chickenPerGramProtein * 100)); // 100g당 단백질 환산

  // 3. 출력
  document.getElementById('result').innerHTML = `
    🐔 당신의 가슴은 <strong>${chickenPower} CP</strong>입니다.<br>
    닭가슴살 한 조각이 낼 수 있는 물리적 힘(2kg)을 기준으로,<br>
    당신의 벤치프레스는 닭가슴살 <strong>${chickenPower}</strong>조각이 동시에 작동해야 가능한 무게입니다.<br><br>
    🍗 총 <strong>${totalChicken}</strong>개의 닭가슴살이 섭취되었습니다.<br>
    증량된 <strong>${gain}kg</strong>의 근육을 만들기 위해 평균적인 단백질 요구량에 따라 계산된 수치입니다.
  `;

  drawChickens(Math.min(totalChicken, 20)); // 너무 많으면 최대 20개만 표시
}
