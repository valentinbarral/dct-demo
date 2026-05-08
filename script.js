const translations = {
  es: {
    pageTitle: "DCT 2D 8×8 Demo - Teaching Hub",
    title: "Bloque 8×8 y DCT 2D",
    introDesc: "Esta sección permite editar interactivamente los valores de los píxeles de un bloque de 8x8 y calcular su Transformada Discreta del Coseno (DCT) en 2D.",
    dragInstruction: "Puedes arrastrar el cursor sobre las celdas para pintar múltiples cuadrados.",
    currentValue: "Valor actual:",
    fillButton: "Rellenar todo con valor actual",
    invertButton: "Invertir colores",
    dctButton: "Calcular DCT 2D",
    patterns: "Patrones:",
    gradientHButton: "Degradado horizontal",
    gradientVButton: "Degradado vertical",
    chessButton: "Tablero de ajedrez",
    diagonalButton: "Diagonal",
    circleButton: "Círculo",
    coeffTitle: "Coeficientes DCT S<sub>u,v</sub>",
    reconstructionTitle: "Reconstrucción del bloque: Bloque original = Σ S<sub>u,v</sub> · B<sub>u,v</sub>(x,y)",
    reconstructionDesc: "El bloque original (en el dominio espacial) es igual a la suma de las bases DCT multiplicadas por sus coeficientes (solo se muestran los términos con coeficiente ≠ 0).",
    basesTitle: "Bases originales de la DCT: B<sub>u,v</sub>(x,y) (referencia)",
    basesDesc: "Todas las bases de la DCT 2D 8×8. Estas son las funciones base que se combinan para representar cualquier bloque 8×8.",
    allZero: "Todos los coeficientes son cero (o muy cercanos a cero).",
    originalBlock: "Bloque original",
    inFrequency: "(en frecuencia)",
    absValueLabel: "Valor absoluto (amarillo = alto, verde = bajo, negro=0)",
    quantTitle: "Cuantificación y Compresión JPEG",
    quantDesc: "Simulación del proceso de cuantificación JPEG. Los coeficientes DCT se dividen por una matriz de cuantificación (escalada por un factor) y se redondean. Luego se reconstruye la imagen (IDCT) y se compara con la original.",
    quantScaleLabel: "Factor de escala (Calidad):",
    applyQuantButton: "Aplicar Cuantificación",
    qMatrixTitle: "Matriz de Cuantificación (Q)",
    originalDctTitle: "Coeficientes DCT Originales (S)",
    quantCoeffsTitle: "Coeficientes Cuantizados (S<sup>Q</sup>)",
    originalRefTitle: "Bloque Original (Ref)",
    reconstructedTitle: "Bloque Reconstruido (IDCT)",
    hoverOriginal: "Mantén el cursor para ver el original",
    diffTitle: "Diferencia (Error)",
    diffDesc: "Diferencia absoluta x10 para visibilidad",
    showBasesButton: "Ver bases originales de la DCT",
    basesPopupTitle: "Bases originales de la DCT",
    basesPopupDesc: "Todas las bases de la DCT 2D 8×8.",
    "nav.intro": "Introducción",
    "nav.dct": "Coeficientes DCT",
    "nav.reconstruction": "Reconstrucción",
    "nav.quantization": "Cuantificación JPEG",
    "footer.license": "Esta obra está bajo una",
    "footer.licenseName": "Licencia Creative Commons Atribución 4.0 Internacional"
  },
  en: {
    pageTitle: "DCT 2D 8×8 Demo - Teaching Hub",
    title: "8×8 Block and 2D DCT",
    introDesc: "This section allows you to interactively edit pixel values of an 8x8 block and calculate its 2D Discrete Cosine Transform (DCT).",
    dragInstruction: "You can drag the cursor over cells to paint multiple squares.",
    currentValue: "Current value:",
    fillButton: "Fill all with current value",
    invertButton: "Invert colors",
    dctButton: "Calculate 2D DCT",
    patterns: "Patterns:",
    gradientHButton: "Horizontal gradient",
    gradientVButton: "Vertical gradient",
    chessButton: "Chess board",
    diagonalButton: "Diagonal",
    circleButton: "Circle",
    coeffTitle: "DCT Coefficients S<sub>u,v</sub>",
    reconstructionTitle: "Block reconstruction: Original Block = Σ S<sub>u,v</sub> · B<sub>u,v</sub>(x,y)",
    reconstructionDesc: "The original block (in the spatial domain) equals the sum of DCT bases multiplied by their coefficients (only terms with coefficient ≠ 0 are shown).",
    basesTitle: "Original DCT Bases: B<sub>u,v</sub>(x,y) (reference)",
    basesDesc: "All 8×8 2D DCT bases. These are the basis functions that combine to represent any 8×8 block.",
    allZero: "All coefficients are zero (or very close to zero).",
    originalBlock: "Original block",
    inFrequency: "(in frequency)",
    absValueLabel: "Absolute value (yellow = high, green = low, black=0)",
    quantTitle: "JPEG Quantization and Compression",
    quantDesc: "Simulation of the JPEG quantization process. DCT coefficients are divided by a quantization matrix (scaled by a factor) and rounded. Then the image is reconstructed (IDCT) and compared with the original.",
    quantScaleLabel: "Scale Factor (Quality):",
    applyQuantButton: "Apply Quantization",
    qMatrixTitle: "Quantization Matrix (Q)",
    originalDctTitle: "Original DCT Coefficients (S)",
    quantCoeffsTitle: "Quantized Coefficients (S<sup>Q</sup>)",
    originalRefTitle: "Original Block (Ref)",
    reconstructedTitle: "Reconstructed Block (IDCT)",
    hoverOriginal: "Hover to see original",
    diffTitle: "Difference (Error)",
    diffDesc: "Absolute difference x10 for visibility",
    showBasesButton: "Show original DCT bases",
    basesPopupTitle: "Original DCT Bases",
    basesPopupDesc: "All 8×8 2D DCT bases.",
    "nav.intro": "Introduction",
    "nav.dct": "DCT Coefficients",
    "nav.reconstruction": "Reconstruction",
    "nav.quantization": "JPEG Quantization",
    "footer.license": "This work is licensed under a",
    "footer.licenseName": "Creative Commons Attribution 4.0 International License"
  },
  gl: {
    pageTitle: "DCT 2D 8×8 Demo - Teaching Hub",
    title: "Bloque 8×8 e DCT 2D",
    introDesc: "Esta sección permite editar interactivamente os valores dos píxeles dun bloque de 8x8 e calcular a súa Transformada Discreta do Coseno (DCT) en 2D.",
    dragInstruction: "Podes arrastrar o cursor sobre as celas para pintar múltiples cadrados.",
    currentValue: "Valor actual:",
    fillButton: "Encher todo co valor actual",
    invertButton: "Inverter cores",
    dctButton: "Calcular DCT 2D",
    patterns: "Patróns:",
    gradientHButton: "Degradado horizontal",
    gradientVButton: "Degradado vertical",
    chessButton: "Taboleiro de xadrez",
    diagonalButton: "Diagonal",
    circleButton: "Círculo",
    coeffTitle: "Coeficientes DCT S<sub>u,v</sub>",
    reconstructionTitle: "Reconstrución do bloque: Bloque orixinal = Σ S<sub>u,v</sub> · B<sub>u,v</sub>(x,y)",
    reconstructionDesc: "O bloque orixinal (no dominio espacial) é igual á suma das bases DCT multiplicadas polos seus coeficientes (só se mostran os termos con coeficiente ≠ 0).",
    basesTitle: "Bases orixinais da DCT: B<sub>u,v</sub>(x,y) (referencia)",
    basesDesc: "Todas as bases da DCT 2D 8×8. Estas son as funcións base que se combinan para representar calquera bloque 8×8.",
    allZero: "Todos os coeficientes son cero (ou moi próximos a cero).",
    originalBlock: "Bloque orixinal",
    inFrequency: "(en frecuencia)",
    absValueLabel: "Valor absoluto (amarelo = alto, verde = baixo, negro=0)",
    quantTitle: "Cuantificación e Compresión JPEG",
    quantDesc: "Simulación do proceso de cuantificación JPEG. Os coeficientes DCT divídense por unha matriz de cuantificación (escalada por un factor) e redondéanse. Logo reconstrúese a imaxe (IDCT) e compárase coa orixinal.",
    quantScaleLabel: "Factor de escala (Calidade):",
    applyQuantButton: "Aplicar Cuantificación",
    qMatrixTitle: "Matriz de Cuantificación (Q)",
    originalDctTitle: "Coeficientes DCT Orixinais (S)",
    quantCoeffsTitle: "Coeficientes Cuantizados (S<sup>Q</sup>)",
    originalRefTitle: "Bloque Orixinal (Ref)",
    reconstructedTitle: "Bloque Reconstruído (IDCT)",
    hoverOriginal: "Mantén o cursor para ver o orixinal",
    diffTitle: "Diferenza (Erro)",
    diffDesc: "Diferenza absoluta x10 para visibilidade",
    showBasesButton: "Ver bases orixinais da DCT",
    basesPopupTitle: "Bases orixinais da DCT",
    basesPopupDesc: "Todas as bases da DCT 2D 8×8.",
    "nav.intro": "Introdución",
    "nav.dct": "Coeficientes DCT",
    "nav.reconstruction": "Reconstrución",
    "nav.quantization": "Cuantificación JPEG",
    "footer.license": "Esta obra está baixo unha",
    "footer.licenseName": "Licenza Creative Commons Atribución 4.0 Internacional"
  }
};

let currentLang = 'es';

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.title = translations[lang].pageTitle;
  langSelect.value = lang;
  localStorage.setItem('lang', lang);

  const t = translations[lang];

  const byId = {
    title: 'innerHTML',
    introDesc: 'textContent',
    dragInstruction: 'textContent',
    currentValueLabel: 'textContent',
    patternsLabel: 'textContent',
    coeffTitle: 'innerHTML',
    reconstructionTitle: 'innerHTML',
    reconstructionDesc: 'textContent',
    quantTitle: 'textContent',
    quantDesc: 'textContent',
    quantScaleLabel: 'textContent',
    qMatrixTitle: 'textContent',
    originalDctTitle: 'textContent',
    quantCoeffsTitle: 'innerHTML',
    originalRefTitle: 'textContent',
    reconstructedTitle: 'textContent',
    diffTitle: 'textContent'
  };

  for (const [id, prop] of Object.entries(byId)) {
    const el = document.getElementById(id);
    if (el && t[id]) {
      el[prop] = t[id];
    }
  }

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.innerHTML = t[key];
    }
  });

  if (lastS) {
    renderCoeffTable(lastS);
    renderBasisContributions(lastS);
  }
}

function t(key) {
  return translations[currentLang][key] || key;
}


// =================================================================
// THEME
// =================================================================

function setTheme(theme) {
  if (theme === 'dark') {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
  localStorage.setItem('theme', theme);
  if (slider) updateSliderBackground(slider);
  if (quantScaleSlider) updateSliderBackground(quantScaleSlider);
}

function toggleTheme() {
  const isDark = document.body.classList.contains('dark');
  setTheme(isDark ? 'light' : 'dark');
}


// =================================================================
// HAMBURGER MENU
// =================================================================

function toggleMenu() {
  const controls = document.getElementById('headerControls');
  controls.classList.toggle('open');
}

document.addEventListener('click', function(e) {
  const controls = document.getElementById('headerControls');
  const hamburger = document.querySelector('.hamburger');
  if (controls && hamburger && !controls.contains(e.target) && e.target !== hamburger) {
    controls.classList.remove('open');
  }
});


// =================================================================
// INIT
// =================================================================

function init() {
  const savedLang = localStorage.getItem('lang') || 'es';
  setLanguage(savedLang);

  const savedTheme = localStorage.getItem('theme') || 'dark';
  setTheme(savedTheme);
}

document.addEventListener('DOMContentLoaded', init);


// =================================================================
// DCT 2D 8×8 DEMO LOGIC
// =================================================================

const N = 8;
let block = Array.from({ length: N }, () => Array(N).fill(128));
let isPainting = false;
let currentValue = 128;
let lastS = null;
let lastBlock = null;

const inputGrid = document.getElementById('inputGrid');
const slider = document.getElementById('valueSlider');
const valueLabel = document.getElementById('valueLabel');
const coeffContainer = document.getElementById('coeffContainer');
const basisContainer = document.getElementById('basisContainer');
const sumVisualization = document.getElementById('sumVisualization');
const popupBasisContainer = document.getElementById('popupBasisContainer');
const langSelect = document.getElementById('langSelect');
const quantScaleSlider = document.getElementById('quantScaleSlider');
const showBasesButton = document.getElementById('showBasesButton');
const basesPopup = document.getElementById('basesPopup');
const closeBasesPopup = document.getElementById('closeBasesPopup');

// Popup logic
if (showBasesButton) {
  showBasesButton.addEventListener('click', () => {
    renderPopupBases();
    basesPopup.style.display = 'flex';
  });
}

if (closeBasesPopup) {
  closeBasesPopup.addEventListener('click', () => {
    basesPopup.style.display = 'none';
  });
}

if (basesPopup) {
  basesPopup.addEventListener('click', (e) => {
    if (e.target === basesPopup) {
      basesPopup.style.display = 'none';
    }
  });
}

// Slider background
function updateSliderBackground(sliderElement) {
  const min = parseFloat(sliderElement.min);
  const max = parseFloat(sliderElement.max);
  const val = parseFloat(sliderElement.value);
  const range = (max - min) || 1;
  const percent = ((val - min) / range) * 100;
  sliderElement.style.background = `linear-gradient(to right, var(--accent) ${percent}%, var(--control-bg) ${percent}%)`;
}

// Language selector
if (langSelect) {
  langSelect.addEventListener('change', (e) => {
    setLanguage(e.target.value);
  });
}

// Slider label
slider.addEventListener('input', () => {
  valueLabel.textContent = slider.value;
  currentValue = parseInt(slider.value, 10);
  updateSliderBackground(slider);
});

// Init slider background
if (slider) updateSliderBackground(slider);

// Paint a cell
function paintCell(x, y, value) {
  block[x][y] = value;
  const cell = document.querySelector(`.cell[data-x="${x}"][data-y="${y}"]`);
  if (cell) {
    updateCellColor(cell, value);
  }
}

// Create input grid
function createInputGrid() {
  inputGrid.innerHTML = '';
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.dataset.x = x;
      cell.dataset.y = y;
      updateCellColor(cell, block[x][y]);

      cell.addEventListener('click', () => {
        paintCell(x, y, currentValue);
      });

      cell.addEventListener('mousedown', (e) => {
        e.preventDefault();
        isPainting = true;
        paintCell(x, y, currentValue);
      });

      cell.addEventListener('mouseenter', () => {
        if (isPainting) {
          paintCell(x, y, currentValue);
        }
      });

      inputGrid.appendChild(cell);
    }
  }
}

function updateCellColor(cell, value) {
  cell.style.backgroundColor = `rgb(${value}, ${value}, ${value})`;
  cell.title = `(${cell.dataset.x}, ${cell.dataset.y}) = ${value}`;
  cell.textContent = value;
  cell.style.display = 'flex';
  cell.style.alignItems = 'center';
  cell.style.justifyContent = 'center';
  cell.style.fontSize = '0.7rem';
  cell.style.fontWeight = 'bold';
  cell.style.color = value > 127 ? '#000' : '#fff';
}

document.addEventListener('mouseup', () => {
  isPainting = false;
});

inputGrid.addEventListener('mouseleave', () => {
  isPainting = false;
});

// Patterns
function applyPattern(patternFunction) {
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      block[x][y] = patternFunction(x, y);
    }
  }
  createInputGrid();
}

function gradientHorizontal(x, y) {
  return Math.round((y / (N - 1)) * 255);
}

function gradientVertical(x, y) {
  return Math.round((x / (N - 1)) * 255);
}

function chessBoard(x, y) {
  return ((x + y) % 2 === 0) ? 0 : 255;
}

function diagonal(x, y) {
  const dist = Math.abs(x - y);
  return Math.round((dist / (N - 1)) * 255);
}

function circle(x, y) {
  const center = (N - 1) / 2;
  const dx = x - center;
  const dy = y - center;
  const dist = Math.sqrt(dx * dx + dy * dy);
  const maxDist = Math.sqrt(center * center + center * center);
  return Math.round((1 - dist / maxDist) * 255);
}

// Buttons
document.getElementById('fillButton').addEventListener('click', () => {
  const val = parseInt(slider.value, 10);
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      block[x][y] = val;
    }
  }
  createInputGrid();
});

document.getElementById('invertButton').addEventListener('click', () => {
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      block[x][y] = 255 - block[x][y];
    }
  }
  createInputGrid();
});

document.getElementById('gradientHButton').addEventListener('click', () => {
  applyPattern(gradientHorizontal);
});

document.getElementById('gradientVButton').addEventListener('click', () => {
  applyPattern(gradientVertical);
});

document.getElementById('chessButton').addEventListener('click', () => {
  applyPattern(chessBoard);
});

document.getElementById('diagonalButton').addEventListener('click', () => {
  applyPattern(diagonal);
});

document.getElementById('circleButton').addEventListener('click', () => {
  applyPattern(circle);
});

// DCT 2D (JPEG type)
function dct2D(s) {
  const S = Array.from({ length: N }, () => Array(N).fill(0));
  const pi = Math.PI;

  for (let u = 0; u < N; u++) {
    for (let v = 0; v < N; v++) {
      const Cu = (u === 0) ? 1 / Math.sqrt(2) : 1;
      const Cv = (v === 0) ? 1 / Math.sqrt(2) : 1;
      let sum = 0;

      for (let x = 0; x < N; x++) {
        for (let y = 0; y < N; y++) {
          const cosX = Math.cos(((2 * x + 1) * u * pi) / (2 * N));
          const cosY = Math.cos(((2 * y + 1) * v * pi) / (2 * N));
          sum += s[x][y] * cosX * cosY;
        }
      }

      S[u][v] = 0.25 * Cu * Cv * sum;
    }
  }
  return S;
}

// Compute basis B_{u,v}(x,y)
function computeBasis() {
  const bases = Array.from({ length: N }, () =>
    Array.from({ length: N }, () =>
      Array.from({ length: N }, () => Array(N).fill(0))
    )
  );
  const pi = Math.PI;

  for (let u = 0; u < N; u++) {
    for (let v = 0; v < N; v++) {
      for (let x = 0; x < N; x++) {
        for (let y = 0; y < N; y++) {
          const cosX = Math.cos(((2 * x + 1) * u * pi) / (2 * N));
          const cosY = Math.cos(((2 * y + 1) * v * pi) / (2 * N));
          bases[u][v][x][y] = cosX * cosY;
        }
      }
    }
  }
  return bases;
}

const bases = computeBasis();

function mapCoeffToColor(absValue) {
  if (absValue < 0.001) {
    return { r: 0, g: 0, b: 0 };
  }

  const maxValue = 1020;
  const normalized = Math.min(1, Math.max(0, absValue / maxValue));
  const t = normalized;

  return {
    r: Math.round(255 * t),
    g: Math.round(100 + 155 * t),
    b: 0
  };
}

function renderCoeffTable(S) {
  const flexContainer = document.createElement('div');
  flexContainer.style.display = 'flex';
  flexContainer.style.gap = '20px';
  flexContainer.style.alignItems = 'flex-start';
  flexContainer.style.flexWrap = 'wrap';

  const tableContainer = document.createElement('div');
  const table = document.createElement('table');
  table.style.borderCollapse = 'collapse';
  table.style.fontSize = '0.8rem';

  for (let u = 0; u < N; u++) {
    const tr = document.createElement('tr');
    for (let v = 0; v < N; v++) {
      const td = document.createElement('td');
      td.textContent = S[u][v].toFixed(1);
      td.style.border = '1px solid var(--border)';
      td.style.padding = '4px';
      td.style.textAlign = 'center';
      td.style.minWidth = '24px';

      if (Math.abs(S[u][v]) < 0.1) {
        td.style.color = 'var(--text-soft)';
        td.style.opacity = '0.5';
      }

      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  tableContainer.appendChild(table);
  flexContainer.appendChild(tableContainer);

  const pixelGrid = document.createElement('div');
  pixelGrid.className = 'grid-8x8';
  pixelGrid.style.pointerEvents = 'none';

  let maxAbs = 0;
  for (let u = 0; u < N; u++) {
    for (let v = 0; v < N; v++) {
      const absVal = Math.abs(S[u][v]);
      if (absVal > maxAbs) maxAbs = absVal;
    }
  }

  for (let u = 0; u < N; u++) {
    for (let v = 0; v < N; v++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      const absValue = Math.abs(S[u][v]);
      const color = mapCoeffToColor(absValue);
      cell.style.backgroundColor = `rgb(${color.r}, ${color.g}, ${color.b})`;
      cell.style.cursor = 'default';
      cell.title = `S[${u},${v}] = ${S[u][v].toFixed(1)} (abs: ${absValue.toFixed(1)})`;
      pixelGrid.appendChild(cell);
    }
  }

  const pixelLabel = document.createElement('div');
  pixelLabel.style.marginTop = '8px';
  pixelLabel.style.fontSize = '0.85rem';
  pixelLabel.style.color = 'var(--text-soft)';
  pixelLabel.textContent = t('absValueLabel');

  const pixelContainer = document.createElement('div');
  pixelContainer.style.display = 'flex';
  pixelContainer.style.flexDirection = 'column';
  pixelContainer.appendChild(pixelGrid);
  pixelContainer.appendChild(pixelLabel);

  flexContainer.appendChild(pixelContainer);

  coeffContainer.innerHTML = '';
  coeffContainer.appendChild(flexContainer);
}

function drawBlockOnCanvas(canvas, values) {
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;
  const cellW = w / N;
  const cellH = h / N;

  let min = Infinity;
  let max = -Infinity;
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      const v = values[x][y];
      if (v < min) min = v;
      if (v > max) max = v;
    }
  }

  const range = (max - min) || 1;

  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      const norm = (values[x][y] - min) / range;
      const gray = Math.round(norm * 255);
      ctx.fillStyle = `rgb(${gray}, ${gray}, ${gray})`;
      ctx.fillRect(y * cellW, x * cellH, cellW, cellH);
    }
  }
}

function drawOriginalBlockOnCanvas(canvas, values) {
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;
  const cellW = w / N;
  const cellH = h / N;

  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      const gray = Math.max(0, Math.min(255, Math.round(values[x][y])));
      ctx.fillStyle = `rgb(${gray}, ${gray}, ${gray})`;
      ctx.fillRect(y * cellW, x * cellH, cellW, cellH);
    }
  }
}

function drawBasisOnCanvas(canvas, values) {
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;
  const cellW = w / N;
  const cellH = h / N;

  let min = Infinity;
  let max = -Infinity;
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      const v = values[x][y];
      if (v < min) min = v;
      if (v > max) max = v;
    }
  }

  const range = max - min;

  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      let normalized;
      if (range === 0) {
        normalized = 0;
      } else {
        const center = (max + min) / 2;
        normalized = (values[x][y] - center) / (range / 2);
      }
      const gray = Math.round((normalized + 1) / 2 * 255);
      ctx.fillStyle = `rgb(${gray}, ${gray}, ${gray})`;
      ctx.fillRect(y * cellW, x * cellH, cellW, cellH);
    }
  }
}

function drawScaledBasisOnCanvas(canvas, basisValues, coefficient) {
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;
  const cellW = w / N;
  const cellH = h / N;

  const scaledValues = Array.from({ length: N }, () => Array(N).fill(0));
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      scaledValues[x][y] = coefficient * basisValues[x][y];
    }
  }

  let min = Infinity;
  let max = -Infinity;
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      const v = scaledValues[x][y];
      if (v < min) min = v;
      if (v > max) max = v;
    }
  }

  const range = max - min;

  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      let normalized;
      if (range === 0) {
        normalized = 0;
      } else {
        const center = (max + min) / 2;
        normalized = (scaledValues[x][y] - center) / (range / 2);
      }
      const gray = Math.round((normalized + 1) / 2 * 255);
      ctx.fillStyle = `rgb(${gray}, ${gray}, ${gray})`;
      ctx.fillRect(y * cellW, x * cellH, cellW, cellH);
    }
  }
}

function renderBasisContributions(S) {
  basisContainer.innerHTML = '';
  sumVisualization.innerHTML = '';

  const sumBlock = Array.from({ length: N }, () => Array(N).fill(0));
  const nonZeroContributions = [];

  for (let u = 0; u < N; u++) {
    for (let v = 0; v < N; v++) {
      const coeff = S[u][v];
      if (Math.abs(coeff) < 0.01) continue;

      for (let x = 0; x < N; x++) {
        for (let y = 0; y < N; y++) {
          sumBlock[x][y] += coeff * bases[u][v][x][y];
        }
      }

      nonZeroContributions.push({ u, v, coeff });
    }
  }

  if (nonZeroContributions.length === 0) {
    const msg = document.createElement('p');
    msg.textContent = t('allZero');
    msg.style.color = 'var(--text-soft)';
    basisContainer.appendChild(msg);
  }

  if (nonZeroContributions.length > 0) {
    const equationContainer = document.createElement('div');
    equationContainer.style.display = 'flex';
    equationContainer.style.alignItems = 'center';
    equationContainer.style.gap = '12px';
    equationContainer.style.marginTop = '20px';
    equationContainer.style.flexWrap = 'wrap';
    equationContainer.style.fontSize = '1.1rem';

    const originalCanvas = document.createElement('canvas');
    originalCanvas.width = 80;
    originalCanvas.height = 80;
    drawOriginalBlockOnCanvas(originalCanvas, block);
    originalCanvas.style.border = '2px solid var(--text-soft)';
    originalCanvas.style.borderRadius = '4px';

    const equalsWrapper = document.createElement('div');
    equalsWrapper.style.display = 'flex';
    equalsWrapper.style.flexDirection = 'column';
    equalsWrapper.style.alignItems = 'center';
    equalsWrapper.style.justifyContent = 'center';
    equalsWrapper.style.minHeight = '80px';

    const equalsSign = document.createElement('div');
    equalsSign.textContent = '=';
    equalsSign.style.fontSize = '1.8rem';
    equalsSign.style.fontWeight = 'bold';
    equalsSign.style.color = 'var(--text)';
    equalsSign.style.lineHeight = '1';

    const freqLabel = document.createElement('div');
    freqLabel.textContent = t('inFrequency');
    freqLabel.style.fontSize = '0.75rem';
    freqLabel.style.color = 'var(--text-soft)';
    freqLabel.style.marginTop = '4px';

    equalsWrapper.appendChild(equalsSign);
    equalsWrapper.appendChild(freqLabel);

    equationContainer.appendChild(originalCanvas);
    equationContainer.appendChild(equalsWrapper);

    nonZeroContributions.forEach((contrib, index) => {
      if (index > 0 || contrib.coeff < 0) {
        const operator = document.createElement('span');
        if (index > 0) {
          operator.textContent = contrib.coeff >= 0 ? ' + ' : ' - ';
        } else {
          operator.textContent = ' - ';
        }
        operator.style.fontSize = '1.2rem';
        operator.style.fontWeight = 'bold';
        equationContainer.appendChild(operator);
      }

      const coeffSpan = document.createElement('span');
      const absCoeff = Math.abs(contrib.coeff);
      coeffSpan.textContent = absCoeff.toFixed(1);
      coeffSpan.style.fontWeight = 'bold';
      coeffSpan.style.marginRight = '4px';

      const multSign = document.createElement('span');
      multSign.textContent = ' · ';
      multSign.style.margin = '0 2px';

      const basisCanvas = document.createElement('canvas');
      basisCanvas.width = 80;
      basisCanvas.height = 80;
      drawBasisOnCanvas(basisCanvas, bases[contrib.u][contrib.v]);
      basisCanvas.style.border = '2px solid var(--text-soft)';
      basisCanvas.style.borderRadius = '4px';

      const termContainer = document.createElement('div');
      termContainer.style.display = 'inline-flex';
      termContainer.style.alignItems = 'center';
      termContainer.style.verticalAlign = 'middle';

      termContainer.appendChild(coeffSpan);
      termContainer.appendChild(multSign);
      termContainer.appendChild(basisCanvas);

      equationContainer.appendChild(termContainer);
    });

    if (nonZeroContributions.length > 8) {
      const ellipsis = document.createElement('span');
      ellipsis.textContent = ' + ...';
      ellipsis.style.fontSize = '1.2rem';
      ellipsis.style.fontWeight = 'bold';
      equationContainer.appendChild(ellipsis);
    }

    sumVisualization.appendChild(equationContainer);
  }
}

function renderPopupBases() {
  if (popupBasisContainer.innerHTML !== '') return;

  popupBasisContainer.innerHTML = '';

  for (let u = 0; u < N; u++) {
    for (let v = 0; v < N; v++) {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      canvas.title = `B(${u},${v})`;
      drawBasisOnCanvas(canvas, bases[u][v]);
      popupBasisContainer.appendChild(canvas);
    }
  }
}

// Main DCT button
document.getElementById('dctButton').addEventListener('click', () => {
  document.querySelectorAll('.results-panel').forEach(panel => {
    panel.style.display = 'block';
  });

  const S = dct2D(block);
  lastS = S;
  renderCoeffTable(S);
  renderBasisContributions(S);
});

createInputGrid();


// =================================================================
// JPEG QUANTIZATION
// =================================================================

const Q_jpeg = [
  [16, 11, 10, 16, 24, 40, 51, 61],
  [12, 12, 14, 19, 26, 58, 60, 55],
  [14, 13, 16, 24, 40, 57, 69, 56],
  [14, 17, 22, 29, 51, 87, 80, 62],
  [18, 22, 37, 56, 68, 109, 103, 77],
  [24, 35, 55, 64, 81, 104, 113, 92],
  [49, 64, 78, 87, 103, 121, 120, 101],
  [72, 92, 95, 98, 112, 100, 103, 99]
];

const zigzagOrder = [
  [0, 0], [0, 1], [1, 0], [2, 0], [1, 1], [0, 2], [0, 3], [1, 2],
  [2, 1], [3, 0], [4, 0], [3, 1], [2, 2], [1, 3], [0, 4], [0, 5],
  [1, 4], [2, 3], [3, 2], [4, 1], [5, 0], [6, 0], [5, 1], [4, 2],
  [3, 3], [2, 4], [1, 5], [0, 6], [0, 7], [1, 6], [2, 5], [3, 4],
  [4, 3], [5, 2], [6, 1], [7, 0], [7, 1], [6, 2], [5, 3], [4, 4],
  [3, 5], [2, 6], [1, 7], [2, 7], [3, 6], [4, 5], [5, 4], [6, 3],
  [7, 2], [7, 3], [6, 4], [5, 5], [4, 6], [3, 7], [4, 7], [5, 6],
  [6, 5], [7, 4], [7, 5], [6, 6], [5, 7], [6, 7], [7, 6], [7, 7]
];

function calculateRLEByteEstimation(matrix) {
  const zigzagValues = zigzagOrder.map(([i, j]) => Math.round(matrix[i][j]));

  let byteCount = 0;
  let zeroRunLength = 0;

  for (let i = 0; i < zigzagValues.length; i++) {
    const value = zigzagValues[i];

    if (value === 0) {
      zeroRunLength++;

      if (zeroRunLength === 16) {
        byteCount += 2;
        zeroRunLength = 0;
      }
    } else {
      const absValue = Math.abs(value);
      const bitsNeeded = absValue === 0 ? 0 : Math.floor(Math.log2(absValue)) + 1;

      byteCount += 1;
      byteCount += Math.ceil(bitsNeeded / 8);

      zeroRunLength = 0;
    }
  }

  if (zeroRunLength > 0) {
    byteCount += 1;
  }

  return byteCount;
}

function idct2D(S) {
  const output = Array.from({ length: N }, () => Array(N).fill(0));
  const pi = Math.PI;

  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      let sum = 0;
      for (let u = 0; u < N; u++) {
        for (let v = 0; v < N; v++) {
          const Cu = (u === 0) ? 1 / Math.sqrt(2) : 1;
          const Cv = (v === 0) ? 1 / Math.sqrt(2) : 1;
          const cosX = Math.cos(((2 * x + 1) * u * pi) / (2 * N));
          const cosY = Math.cos(((2 * y + 1) * v * pi) / (2 * N));
          sum += Cu * Cv * S[u][v] * cosX * cosY;
        }
      }
      output[x][y] = 0.25 * sum;
    }
  }
  return output;
}

function applyQuantization(S, scale) {
  const Q_scaled = Array.from({ length: N }, () => Array(N).fill(0));
  const S_quant = Array.from({ length: N }, () => Array(N).fill(0));
  const S_recon = Array.from({ length: N }, () => Array(N).fill(0));

  for (let u = 0; u < N; u++) {
    for (let v = 0; v < N; v++) {
      let qVal = Math.floor(Q_jpeg[u][v] * scale);
      if (qVal < 1) qVal = 1;
      Q_scaled[u][v] = qVal;
      S_quant[u][v] = Math.round(S[u][v] / qVal);
      S_recon[u][v] = S_quant[u][v] * qVal;
    }
  }
  return { Q_scaled, S_quant, S_recon };
}

function renderMatrixTable(matrix, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';

  const table = document.createElement('table');
  table.style.borderCollapse = 'collapse';
  table.style.fontSize = '0.8rem';

  for (let i = 0; i < N; i++) {
    const tr = document.createElement('tr');
    for (let j = 0; j < N; j++) {
      const td = document.createElement('td');
      td.textContent = matrix[i][j];
      td.style.border = '1px solid var(--border)';
      td.style.padding = '4px';
      td.style.textAlign = 'center';
      td.style.minWidth = '24px';

      if (matrix[i][j] === 0) {
        td.style.color = 'var(--text-soft)';
        td.style.opacity = '0.5';
      }

      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  container.appendChild(table);
}

function renderDifference(original, reconstructed) {
  const container = document.getElementById('diffContainer');
  container.innerHTML = '';

  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;
  const cellW = w / N;
  const cellH = h / N;

  let maxDiff = 0;
  const diffs = Array.from({ length: N }, () => Array(N).fill(0));

  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      const diff = Math.abs(original[x][y] - reconstructed[x][y]);
      diffs[x][y] = diff;
      if (diff > maxDiff) maxDiff = diff;
    }
  }

  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      const val = Math.min(255, diffs[x][y] * 10);
      ctx.fillStyle = `rgb(${val}, 0, 0)`;
      ctx.fillRect(y * cellW, x * cellH, cellW, cellH);
    }
  }

  container.appendChild(canvas);

  const label = document.createElement('div');
  label.textContent = `Max Diff: ${maxDiff.toFixed(1)}`;
  label.style.fontSize = '0.8rem';
  label.style.marginTop = '5px';
  label.style.textAlign = 'center';
  container.appendChild(label);

  const desc = document.createElement('div');
  desc.textContent = t('diffDesc');
  desc.style.fontSize = '0.7rem';
  desc.style.color = 'var(--text-soft)';
  desc.style.textAlign = 'center';
  container.appendChild(desc);
}

function updateQuantizationPanel() {
  if (!lastS || !lastBlock) return;

  const quantSlider = document.getElementById('quantScaleSlider');
  const scale = parseFloat(quantSlider.value);
  document.getElementById('quantScaleValue').textContent = scale.toFixed(1);
  updateSliderBackground(quantSlider);

  const { Q_scaled, S_quant, S_recon } = applyQuantization(lastS, scale);

  const S_rounded = lastS.map(row => row.map(val => Math.round(val)));
  renderMatrixTable(S_rounded, 'originalDctContainer');

  renderMatrixTable(Q_scaled, 'qMatrixContainer');

  renderMatrixTable(S_quant, 'quantCoeffsContainer');

  const originalRefContainer = document.getElementById('originalRefContainer');
  originalRefContainer.innerHTML = '';
  const originalCanvas = document.createElement('canvas');
  originalCanvas.width = 128;
  originalCanvas.height = 128;
  drawOriginalBlockOnCanvas(originalCanvas, lastBlock);
  originalRefContainer.appendChild(originalCanvas);

  const originalRleBytes = calculateRLEByteEstimation(lastS);
  const originalRleLabel = document.createElement('div');
  originalRleLabel.textContent = `RLE: ~${originalRleBytes} bytes`;
  originalRleLabel.style.fontSize = '0.85rem';
  originalRleLabel.style.marginTop = '8px';
  originalRleLabel.style.fontWeight = '600';
  originalRleLabel.style.color = 'var(--accent)';
  originalRleLabel.style.textAlign = 'center';
  originalRefContainer.appendChild(originalRleLabel);

  const reconstructedBlock = idct2D(S_recon);

  const reconContainer = document.getElementById('reconstructedContainer');
  reconContainer.innerHTML = '';
  const reconCanvas = document.createElement('canvas');
  reconCanvas.width = 128;
  reconCanvas.height = 128;

  drawOriginalBlockOnCanvas(reconCanvas, reconstructedBlock);

  reconCanvas.style.cursor = 'pointer';
  reconCanvas.title = t('hoverOriginal');

  reconCanvas.addEventListener('mouseenter', () => {
    drawOriginalBlockOnCanvas(reconCanvas, lastBlock);
  });

  reconCanvas.addEventListener('mouseleave', () => {
    drawOriginalBlockOnCanvas(reconCanvas, reconstructedBlock);
  });

  reconContainer.appendChild(reconCanvas);

  const quantRleBytes = calculateRLEByteEstimation(S_quant);
  const quantRleLabel = document.createElement('div');
  quantRleLabel.textContent = `RLE: ~${quantRleBytes} bytes`;
  quantRleLabel.style.fontSize = '0.85rem';
  quantRleLabel.style.marginTop = '8px';
  quantRleLabel.style.fontWeight = '600';
  quantRleLabel.style.color = 'var(--accent2)';
  quantRleLabel.style.textAlign = 'center';
  reconContainer.appendChild(quantRleLabel);

  if (originalRleBytes > 0) {
    const compressionRatio = ((1 - quantRleBytes / originalRleBytes) * 100).toFixed(1);
    const compressionInfo = document.createElement('div');
    compressionInfo.textContent = `${compressionRatio}% reducción`;
    compressionInfo.style.fontSize = '0.75rem';
    compressionInfo.style.marginTop = '4px';
    compressionInfo.style.color = 'var(--accent2)';
    compressionInfo.style.textAlign = 'center';
    reconContainer.appendChild(compressionInfo);
  }

  renderDifference(lastBlock, reconstructedBlock);
}

document.getElementById('quantScaleSlider').addEventListener('input', (e) => {
  document.getElementById('quantScaleValue').textContent = parseFloat(e.target.value).toFixed(1);
  updateSliderBackground(e.target);
});

if (quantScaleSlider) updateSliderBackground(quantScaleSlider);

document.getElementById('applyQuantButton').addEventListener('click', () => {
  updateQuantizationPanel();
});

const originalDctBtn = document.getElementById('dctButton');
originalDctBtn.addEventListener('click', () => {
  lastBlock = block.map(row => [...row]);
  setTimeout(updateQuantizationPanel, 0);
});
