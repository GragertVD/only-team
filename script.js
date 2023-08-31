const arrPoint = [
  { id: 0, name: '0 point', x: 580, y: 282, color: 'blue' },
  { id: 1, name: '1 point', x: 1373, y: 225, color: 'blue' },
  { id: 2, name: '2 point', x: 1148, y: 404, color: 'green' },
  { id: 3, name: '3 point', x: 687, y: 482, color: 'green' },
  { id: 4, name: '4 point', x: 1414, y: 475, color: 'blue' },
  { id: 5, name: '5 point', x: 1081, y: 629, color: 'blue' },
  { id: 6, name: '6 point', x: 1306, y: 669, color: 'green' },
  { id: 7, name: '7 point', x: 446, y: 714, color: 'blue' },
  { id: 8, name: '8 point', x: 1593, y: 713, color: 'blue' },
  { id: 9, name: '9 point', x: 1107, y: 790, color: 'green' },
];

const widthBg = 1920, heightBg = 1080;

const arrElPoint = arrPoint.map((el) => {
  const newBut = document.createElement("button");
  newBut.innerHTML = `<span>${el.name}</span>`;

  newBut.className = 'btn';
  el.color === 'green' && newBut.classList.add('btn-green');
  el.color === 'blue' && newBut.classList.add('btn-blue');

  newBut.style.left = `${100 * el.x / widthBg}%`        //По хорошему ещё учитывать ширину кнопок
  newBut.style.top = `${100 * el.y / heightBg + 8}%`    // +8 потому что изображение по высоте не 1080, как в макете

  return newBut;
});

document.addEventListener("DOMContentLoaded", () => {
  const elMain = document.querySelector('.container-btn');

  elMain.addEventListener('click', (e) => {
    e.target.classList.toggle('open');
  });

  for (let i = 0; i < arrElPoint.length; i++) {
    elMain.append(arrElPoint[i]);
  }

});

