const colorCanvas = document.getElementById('colorCanvas');
const hueCanvas = document.getElementById('hueCanvas');
const selectedColor = document.getElementById('selectedColor');
const hexValue = document.getElementById('hexValue');
const rgbValue = document.getElementById('rgbValue');

const colorCtx = colorCanvas.getContext('2d');
const hueCtx = hueCanvas.getContext('2d');

let hue = 0;

// Función para dibujar la barra de tonalidades (Hue)
function drawHueCanvas() {
  const gradient = hueCtx.createLinearGradient(0, 0, 0, hueCanvas.height);
  gradient.addColorStop(0, 'red');
  gradient.addColorStop(0.17, 'yellow');
  gradient.addColorStop(0.33, 'lime');
  gradient.addColorStop(0.5, 'cyan');
  gradient.addColorStop(0.67, 'blue');
  gradient.addColorStop(0.83, 'magenta');
  gradient.addColorStop(1, 'red');
  hueCtx.fillStyle = gradient;
  hueCtx.fillRect(0, 0, hueCanvas.width, hueCanvas.height);
}

// Función para dibujar el lienzo de saturación y luminosidad
function drawColorCanvas(hue) {
  const saturationGradient = colorCtx.createLinearGradient(0, 0, colorCanvas.width, 0);
  saturationGradient.addColorStop(0, 'white');
  saturationGradient.addColorStop(1, `hsl(${hue}, 100%, 50%)`);

  colorCtx.fillStyle = saturationGradient;
  colorCtx.fillRect(0, 0, colorCanvas.width, colorCanvas.height);

  const brightnessGradient = colorCtx.createLinearGradient(0, 0, 0, colorCanvas.height);
  brightnessGradient.addColorStop(0, 'rgba(0,0,0,0)');
  brightnessGradient.addColorStop(1, 'black');

  colorCtx.fillStyle = brightnessGradient;
  colorCtx.fillRect(0, 0, colorCanvas.width, colorCanvas.height);
}

// Función para manejar clics en el lienzo de colores
colorCanvas.addEventListener('click', (e) => {
  const rect = colorCanvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const imageData = colorCtx.getImageData(x, y, 1, 1).data;
  const [r, g, b] = imageData;

  const hex = rgbToHex(r, g, b);
  updateColorInfo(hex, `rgb(${r}, ${g}, ${b})`);
});

// Función para manejar clics en la barra de tonos (Hue)
hueCanvas.addEventListener('click', (e) => {
  const rect = hueCanvas.getBoundingClientRect();
  const y = e.clientY - rect.top;
  const huePercentage = y / hueCanvas.height;
  hue = Math.round(huePercentage * 360);

  drawColorCanvas(hue);
});

// Actualizar la información del color seleccionado
function updateColorInfo(hex, rgb) {
  selectedColor.style.backgroundColor = hex;
  hexValue.textContent = `HEX: ${hex}`;
  rgbValue.textContent = `RGB: ${rgb}`;
}

// Convertir RGB a HEX
function rgbToHex(r, g, b) {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
}

// Eventos para el lienzo de colores
colorCanvas.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    handleColorCanvasInteraction(e);
  });
  colorCanvas.addEventListener('mousemove', (e) => {
    if (isMouseDown) handleColorCanvasInteraction(e);
  });
  colorCanvas.addEventListener('mouseup', () => {
    isMouseDown = false;
  });
  colorCanvas.addEventListener('mouseleave', () => {
    isMouseDown = false;
  });
  
  // Eventos para la barra de tonalidades (Hue)
  hueCanvas.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    handleHueCanvasInteraction(e);
  });
  hueCanvas.addEventListener('mousemove', (e) => {
    if (isMouseDown) handleHueCanvasInteraction(e);
  });
  hueCanvas.addEventListener('mouseup', () => {
    isMouseDown = false;
  });
  hueCanvas.addEventListener('mouseleave', () => {
    isMouseDown = false;
  });

// Inicializar
drawHueCanvas();
drawColorCanvas(hue);
