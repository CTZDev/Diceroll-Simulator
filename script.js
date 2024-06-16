const rollSimulator = (btnRoll, arrowUp, listRolls) => {
  const $btnRoll = document.getElementById(btnRoll);
  const $arrowUp = document.getElementById(arrowUp);
  const $listRolls = document.getElementById(listRolls);
  const getPointers = [0, 150, 300, 450, 600, 750];
  const sizePointers = getPointers.length;
  const LIMITLOOP = 12;
  let accLoop = 0;
  let timer = null;

  document.addEventListener('click', (e) => {
    if (e.target === $btnRoll) {
      timer = setInterval(translatePointers, 300);
    }
  });

  const translatePointers = () => {
    const indexRandom = Math.floor(Math.random() * sizePointers); // 0 a 4
    const selectedPointer = getPointers[indexRandom];
    $arrowUp.style.transform = `translateX(${selectedPointer}px)`;
    accLoop++;

    if (accLoop === LIMITLOOP) {
      accLoop = 0;
      clearInterval(timer);
      const $li = document.createElement('li');
      $li.textContent = 'Dado seleccionado: ' + (indexRandom + 1);
      $listRolls.append($li);
      return;
    }
  };
};

document.addEventListener('DOMContentLoaded', (e) => {
  rollSimulator('btnRoll', 'arrowUp', 'diceroll-list');
});
