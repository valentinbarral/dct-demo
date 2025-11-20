// Translations
const translations = {
  es: {
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
    themeDark: "Oscuro",
    themeLight: "Claro",
    showBasesButton: "Ver bases originales de la DCT",
    basesPopupTitle: "Bases originales de la DCT",
    basesPopupDesc: "Todas las bases de la DCT 2D 8×8."
  },
  en: {
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
    themeDark: "Dark",
    themeLight: "Light",
    showBasesButton: "Show original DCT bases",
    basesPopupTitle: "Original DCT Bases",
    basesPopupDesc: "All 8×8 2D DCT bases."
  },
  gl: {
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
    themeDark: "Escuro",
    themeLight: "Claro",
    showBasesButton: "Ver bases orixinais da DCT",
    basesPopupTitle: "Bases orixinais da DCT",
    basesPopupDesc: "Todas as bases da DCT 2D 8×8."
  }
};

let currentLang = 'es';

// Language functions
function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.title = translations[lang].title + ' - Demo';
  languageSelector.value = lang;
  const t = translations[lang];

  // Update static elements
  document.getElementById('title').innerHTML = t.title;
  document.getElementById('introDesc').textContent = t.introDesc;
  document.getElementById('dragInstruction').textContent = t.dragInstruction;
  document.getElementById('currentValueLabel').textContent = t.currentValue;
  document.getElementById('patternsLabel').textContent = t.patterns;
  document.getElementById('coeffTitle').innerHTML = t.coeffTitle;
  document.getElementById('reconstructionTitle').innerHTML = t.reconstructionTitle;
  document.getElementById('reconstructionDesc').textContent = t.reconstructionDesc;

  // Quantization section
  document.getElementById('quantTitle').textContent = t.quantTitle;
  document.getElementById('quantDesc').textContent = t.quantDesc;
  document.getElementById('quantScaleLabel').textContent = t.quantScaleLabel;
  document.getElementById('qMatrixTitle').textContent = t.qMatrixTitle;
  document.getElementById('originalDctTitle').textContent = t.originalDctTitle;
  document.getElementById('quantCoeffsTitle').innerHTML = t.quantCoeffsTitle;
  document.getElementById('originalRefTitle').textContent = t.originalRefTitle;
  document.getElementById('reconstructedTitle').textContent = t.reconstructedTitle;
  document.getElementById('diffTitle').textContent = t.diffTitle;

  // Update buttons with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.textContent = t[key];
    }
  });

  // Update theme selector options
  if (themeSelector) {
    // Assuming order: Dark, Light
    if (themeSelector.options.length >= 2) {
      themeSelector.options[0].textContent = translations[lang].themeDark;
      themeSelector.options[1].textContent = translations[lang].themeLight;
    }
  }

  // Update dynamic content if DCT has been calculated
  if (lastS) {
    renderCoeffTable(lastS);
    renderBasisContributions(lastS);
  }
}

function t(key) {
  return translations[currentLang][key] || key;
}

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
// const originalBasisContainer = document.getElementById('originalBasisContainer'); // Removed from main flow
const popupBasisContainer = document.getElementById('popupBasisContainer');
const languageSelector = document.getElementById('languageSelector');
const themeSelector = document.getElementById('themeSelector');
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

// Close popup when clicking outside content
if (basesPopup) {
  basesPopup.addEventListener('click', (e) => {
    if (e.target === basesPopup) {
      basesPopup.style.display = 'none';
    }
  });
}

// Helper function to update slider background
function updateSliderBackground(sliderElement) {
  const min = parseFloat(sliderElement.min);
  const max = parseFloat(sliderElement.max);
  const val = parseFloat(sliderElement.value);
  // If min and max are equal, avoid division by zero (though unlikely for sliders)
  const range = (max - min) || 1;
  const percent = ((val - min) / range) * 100;
  
  sliderElement.style.background = `linear-gradient(to right, var(--accent-primary) ${percent}%, var(--accent-secondary) ${percent}%)`;
}

// Theme logic
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  if (themeSelector) themeSelector.value = theme;
  localStorage.setItem('theme', theme);
  // Update slider backgrounds on theme change (to pick up new variables if needed, though they use CSS vars directly)
  if (slider) updateSliderBackground(slider);
  if (quantScaleSlider) updateSliderBackground(quantScaleSlider);
}

// Initialize theme
const savedTheme = localStorage.getItem('theme') || 'dark';
setTheme(savedTheme);

if (themeSelector) {
  themeSelector.addEventListener('change', (e) => {
    setTheme(e.target.value);
  });
}

// Language selector
if (languageSelector) {
  languageSelector.addEventListener('change', (e) => {
    setLanguage(e.target.value);
  });
}

// Initialize language (after DOM is ready)
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => setLanguage('es'));
} else {
  setLanguage('es');
}

// Actualiza etiqueta del slider
slider.addEventListener('input', () => {
  valueLabel.textContent = slider.value;
  currentValue = parseInt(slider.value, 10);
  updateSliderBackground(slider);
});

// Init slider background
if (slider) updateSliderBackground(slider);

// Función para pintar una celda
function paintCell(x, y, value) {
  block[x][y] = value;
  const cell = document.querySelector(`.cell[data-x="${x}"][data-y="${y}"]`);
  if (cell) {
    updateCellColor(cell, value);
  }
}

// Crear cuadrícula de entrada
function createInputGrid() {
  inputGrid.innerHTML = '';
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.dataset.x = x;
      cell.dataset.y = y;
      updateCellColor(cell, block[x][y]);

      // Click para pintar
      cell.addEventListener('click', () => {
        paintCell(x, y, currentValue);
      });

      // Mouse down para iniciar arrastre
      cell.addEventListener('mousedown', (e) => {
        e.preventDefault();
        isPainting = true;
        paintCell(x, y, currentValue);
      });

      // Mouse enter mientras se arrastra
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
  // Mostrar el valor numérico en la celda
  cell.textContent = value;
  cell.style.display = 'flex';
  cell.style.alignItems = 'center';
  cell.style.justifyContent = 'center';
  cell.style.fontSize = '0.7rem';
  cell.style.fontWeight = 'bold';
  // Ajustar color del texto según el fondo (negro sobre claro, blanco sobre oscuro)
  cell.style.color = value > 127 ? '#000' : '#fff';
}

// Detener pintura cuando se suelta el mouse fuera del grid
document.addEventListener('mouseup', () => {
  isPainting = false;
});

// También detener cuando el mouse sale del grid
inputGrid.addEventListener('mouseleave', () => {
  isPainting = false;
});

// Función para aplicar un patrón al bloque
function applyPattern(patternFunction) {
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      block[x][y] = patternFunction(x, y);
    }
  }
  createInputGrid();
}

// Patrones predefinidos
function gradientHorizontal(x, y) {
  // Degradado horizontal: de 0 (negro) a 255 (blanco) de izquierda a derecha
  // Valores equidistantes: y=0 → 0, y=1 → 255/7*1, y=2 → 255/7*2, ..., y=7 → 255
  return Math.round((y / (N - 1)) * 255);
}

function gradientVertical(x, y) {
  // Degradado vertical: de 0 (negro) a 255 (blanco) de arriba a abajo
  // Valores equidistantes: x=0 → 0, x=1 → 255/7*1, x=2 → 255/7*2, ..., x=7 → 255
  return Math.round((x / (N - 1)) * 255);
}

function chessBoard(x, y) {
  // Tablero de ajedrez: alterna entre negro (0) y blanco (255)
  return ((x + y) % 2 === 0) ? 0 : 255;
}

function diagonal(x, y) {
  // Diagonal: valores basados en la distancia desde la diagonal principal
  const dist = Math.abs(x - y);
  return Math.round((dist / (N - 1)) * 255);
}

function circle(x, y) {
  // Círculo: valores basados en la distancia desde el centro
  const center = (N - 1) / 2;
  const dx = x - center;
  const dy = y - center;
  const dist = Math.sqrt(dx * dx + dy * dy);
  const maxDist = Math.sqrt(center * center + center * center);
  // Círculo: blanco en el centro, negro en los bordes
  return Math.round((1 - dist / maxDist) * 255);
}

// Botones de ayuda
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
  // Invertir colores: cada píxel v se convierte en 255 - v
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      block[x][y] = 255 - block[x][y];
    }
  }
  createInputGrid();
});

// Botones de patrones
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

// DCT 2D tipo JPEG
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

// Calcula base B_{u,v}(x,y)
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
          bases[u][v][x][y] = cosX * cosY; // base sin normalizar
        }
      }
    }
  }
  return bases;
}

const bases = computeBasis();

// Mapea un valor absoluto (0 a 1020) a un color RGB
// 1020 (máximo) → amarillo (255, 255, 0)
// < 0.001 (mínimo) → negro (0, 0, 0)
// Intermedio → degradado de amarillo a verde
function mapCoeffToColor(absValue) {
  // Valores muy pequeños (< 0.001) se muestran en negro
  if (absValue < 0.001) {
    return { r: 0, g: 0, b: 0 }; // Negro para valores muy pequeños
  }

  const maxValue = 1020;
  const normalized = Math.min(1, Math.max(0, absValue / maxValue)); // [0, 1]

  // Degradado: amarillo (máximo) → verde oscuro (mínimo)
  // Amarillo: (255, 255, 0)
  // Verde oscuro: (0, 100, 0)
  // Interpolación lineal de amarillo a verde oscuro

  const t = normalized; // [0, 1], donde 1 = máximo (amarillo), 0 = mínimo (verde oscuro)
  return {
    r: Math.round(255 * t), // De 0 (verde oscuro) a 255 (amarillo)
    g: Math.round(100 + 155 * t), // De 100 (verde oscuro) a 255 (amarillo)
    b: 0 // Siempre 0
  };
}

function renderCoeffTable(S) {
  // Crear contenedor flex para tabla y visualización
  const flexContainer = document.createElement('div');
  flexContainer.style.display = 'flex';
  flexContainer.style.gap = '20px';
  flexContainer.style.alignItems = 'flex-start';
  flexContainer.style.flexWrap = 'wrap';

  // --- Tabla estilo Matriz (como en cuantificación) ---
  const tableContainer = document.createElement('div');
  const table = document.createElement('table');
  table.style.borderCollapse = 'collapse';
  table.style.fontSize = '0.8rem';

  for (let u = 0; u < N; u++) {
    const tr = document.createElement('tr');
    for (let v = 0; v < N; v++) {
      const td = document.createElement('td');
      td.textContent = S[u][v].toFixed(1);
      td.style.border = '1px solid var(--border-color)';
      td.style.padding = '4px';
      td.style.textAlign = 'center';
      td.style.minWidth = '24px';

      // Highlight zeros slightly
      if (Math.abs(S[u][v]) < 0.1) {
        td.style.color = 'var(--text-secondary)';
        td.style.opacity = '0.5';
      }

      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  tableContainer.appendChild(table);
  flexContainer.appendChild(tableContainer);

  // --- Visualización de píxeles (Heatmap) ---
  const pixelGrid = document.createElement('div');
  pixelGrid.className = 'grid-8x8';
  pixelGrid.style.pointerEvents = 'none'; // Solo lectura

  // Encontrar el valor absoluto máximo para referencia
  let maxAbs = 0;
  for (let u = 0; u < N; u++) {
    for (let v = 0; v < N; v++) {
      const absVal = Math.abs(S[u][v]);
      if (absVal > maxAbs) maxAbs = absVal;
    }
  }

  // Crear celdas de la cuadrícula
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

  // Etiqueta para la visualización
  const pixelLabel = document.createElement('div');
  pixelLabel.style.marginTop = '8px';
  pixelLabel.style.fontSize = '0.85rem';
  pixelLabel.style.color = '#555';
  pixelLabel.textContent = t('absValueLabel');

  const pixelContainer = document.createElement('div');
  pixelContainer.style.display = 'flex';
  pixelContainer.style.flexDirection = 'column';
  pixelContainer.appendChild(pixelGrid);
  pixelContainer.appendChild(pixelLabel);

  flexContainer.appendChild(pixelContainer);

  const coeffContainer = document.getElementById('coeffContainer');
  coeffContainer.innerHTML = '';
  coeffContainer.appendChild(flexContainer);
}

// Dibuja un bloque 8x8 en un canvas, reescalando a [0,255]
function drawBlockOnCanvas(canvas, values) {
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;
  const cellW = w / N;
  const cellH = h / N;

  // encontrar min y max
  let min = Infinity;
  let max = -Infinity;
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      const v = values[x][y];
      if (v < min) min = v;
      if (v > max) max = v;
    }
  }

  // evitar división por cero
  const range = (max - min) || 1;

  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      const norm = (values[x][y] - min) / range; // [0,1]
      const gray = Math.round(norm * 255);
      ctx.fillStyle = `rgb(${gray}, ${gray}, ${gray})`;
      ctx.fillRect(y * cellW, x * cellH, cellW, cellH);
    }
  }
}

// Dibuja el bloque original con valores de píxeles [0,255] directamente
function drawOriginalBlockOnCanvas(canvas, values) {
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;
  const cellW = w / N;
  const cellH = h / N;

  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      // Los valores ya están en [0, 255], mapear directamente
      const gray = Math.max(0, Math.min(255, Math.round(values[x][y])));
      ctx.fillStyle = `rgb(${gray}, ${gray}, ${gray})`;
      ctx.fillRect(y * cellW, x * cellH, cellW, cellH);
    }
  }
}

// Dibuja una base DCT en un canvas, mapeando valores [-1,1] a [0,255]
// donde -1 = negro (0), 0 = gris medio (128), +1 = blanco (255)
// Las bases se normalizan para que el rango sea [-1, 1]
function drawBasisOnCanvas(canvas, values) {
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;
  const cellW = w / N;
  const cellH = h / N;

  // Encontrar min y max para normalizar al rango [-1, 1]
  let min = Infinity;
  let max = -Infinity;
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      const v = values[x][y];
      if (v < min) min = v;
      if (v > max) max = v;
    }
  }

  // Normalizar al rango [-1, 1]
  // Si todos los valores son iguales (como la base DC), mostrar gris (valor 0)
  const range = max - min;

  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      let normalized;
      if (range === 0) {
        // Todos los valores son iguales (base DC): mostrar gris (0)
        normalized = 0;
      } else {
        // Normalizar: centrar en 0 y escalar a [-1, 1]
        const center = (max + min) / 2;
        normalized = (values[x][y] - center) / (range / 2);
      }
      // Mapear [-1, 1] a [0, 255]
      // valor = -1 → gray = 0 (negro)
      // valor = 0 → gray = 128 (gris medio)
      // valor = 1 → gray = 255 (blanco)
      const gray = Math.round((normalized + 1) / 2 * 255);
      ctx.fillStyle = `rgb(${gray}, ${gray}, ${gray})`;
      ctx.fillRect(y * cellW, x * cellH, cellW, cellH);
    }
  }
}

// Dibuja una base DCT multiplicada por un coeficiente
// Muestra el patrón de la base original pero escalado por el coeficiente
// Usa la misma normalización que drawBasisOnCanvas
function drawScaledBasisOnCanvas(canvas, basisValues, coefficient) {
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;
  const cellW = w / N;
  const cellH = h / N;

  // Primero calcular los valores escalados
  const scaledValues = Array.from({ length: N }, () => Array(N).fill(0));
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      scaledValues[x][y] = coefficient * basisValues[x][y];
    }
  }

  // Encontrar min y max para normalizar al rango [-1, 1]
  let min = Infinity;
  let max = -Infinity;
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      const v = scaledValues[x][y];
      if (v < min) min = v;
      if (v > max) max = v;
    }
  }

  // Normalizar al rango [-1, 1]
  // Si todos los valores son iguales (como la base DC escalada), mostrar gris (valor 0)
  const range = max - min;

  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      let normalized;
      if (range === 0) {
        // Todos los valores son iguales (base DC escalada): mostrar gris (0)
        normalized = 0;
      } else {
        // Normalizar: centrar en 0 y escalar a [-1, 1]
        const center = (max + min) / 2;
        normalized = (scaledValues[x][y] - center) / (range / 2);
      }
      // Mapear [-1, 1] a [0, 255]
      // valor = -1 → gray = 0 (negro)
      // valor = 0 → gray = 128 (gris medio)
      // valor = 1 → gray = 255 (blanco)
      const gray = Math.round((normalized + 1) / 2 * 255);
      ctx.fillStyle = `rgb(${gray}, ${gray}, ${gray})`;
      ctx.fillRect(y * cellW, x * cellH, cellW, cellH);
    }
  }
}

function renderBasisContributions(S) {
  basisContainer.innerHTML = '';
  sumVisualization.innerHTML = '';

  // Acumulador para la suma de todas las contribuciones
  const sumBlock = Array.from({ length: N }, () => Array(N).fill(0));
  const nonZeroContributions = [];

  // Calcular contribuciones con coeficientes distintos de 0 (sin mostrar las bases individuales)
  for (let u = 0; u < N; u++) {
    for (let v = 0; v < N; v++) {
      const coeff = S[u][v];
      // Considerar como cero si es muy pequeño (para evitar errores de precisión)
      if (Math.abs(coeff) < 0.01) continue;

      // Construir bloque contribución para la suma: S_{u,v} * B_{u,v}(x,y)
      for (let x = 0; x < N; x++) {
        for (let y = 0; y < N; y++) {
          sumBlock[x][y] += coeff * bases[u][v][x][y];
        }
      }

      nonZeroContributions.push({ u, v, coeff });
    }
  }

  // Mostrar mensaje si no hay contribuciones
  if (nonZeroContributions.length === 0) {
    const msg = document.createElement('p');
    msg.textContent = t('allZero');
    msg.style.color = 'var(--text-secondary)';
    basisContainer.appendChild(msg);
  }

  // Mostrar ecuación didáctica: Bloque original = Σ S_{u,v} · B_{u,v}(x,y)
  if (nonZeroContributions.length > 0) {
    const equationContainer = document.createElement('div');
    equationContainer.style.display = 'flex';
    equationContainer.style.alignItems = 'center';
    equationContainer.style.gap = '12px';
    equationContainer.style.marginTop = '20px';
    equationContainer.style.flexWrap = 'wrap';
    equationContainer.style.fontSize = '1.1rem';

    // Bloque original (con los píxeles reales)
    const originalCanvas = document.createElement('canvas');
    originalCanvas.width = 80;
    originalCanvas.height = 80;
    drawOriginalBlockOnCanvas(originalCanvas, block);
    originalCanvas.style.border = '2px solid var(--text-secondary)';
    originalCanvas.style.borderRadius = '4px';

    // Signo igual con etiqueta "en frecuencia" debajo
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
    equalsSign.style.color = 'var(--text-primary)';
    equalsSign.style.lineHeight = '1';

    const freqLabel = document.createElement('div');
    freqLabel.textContent = t('inFrequency');
    freqLabel.style.fontSize = '0.75rem';
    freqLabel.style.color = 'var(--text-secondary)';
    freqLabel.style.marginTop = '4px';

    equalsWrapper.appendChild(equalsSign);
    equalsWrapper.appendChild(freqLabel);

    // Agregar bloque original y signo igual
    equationContainer.appendChild(originalCanvas);
    equationContainer.appendChild(equalsWrapper);

    // Agregar cada término de la suma: S_{u,v} · B_{u,v}
    nonZeroContributions.forEach((contrib, index) => {
      // Signo + o - (el primero solo si es negativo, los demás siempre con signo)
      if (index > 0 || contrib.coeff < 0) {
        const operator = document.createElement('span');
        if (index > 0) {
          operator.textContent = contrib.coeff >= 0 ? ' + ' : ' - ';
        } else {
          // Primer término negativo
          operator.textContent = ' - ';
        }
        operator.style.fontSize = '1.2rem';
        operator.style.fontWeight = 'bold';
        equationContainer.appendChild(operator);
      }

      // Coeficiente (valor absoluto si el signo está en el operador)
      const coeffSpan = document.createElement('span');
      const absCoeff = Math.abs(contrib.coeff);
      coeffSpan.textContent = absCoeff.toFixed(1);
      coeffSpan.style.fontWeight = 'bold';
      coeffSpan.style.marginRight = '4px';

      // Símbolo de multiplicación
      const multSign = document.createElement('span');
      multSign.textContent = ' · ';
      multSign.style.margin = '0 2px';

      // Base visual (siempre muestra la base original, sin importar el signo del coeficiente)
      const basisCanvas = document.createElement('canvas');
      basisCanvas.width = 80;
      basisCanvas.height = 80;
      drawBasisOnCanvas(basisCanvas, bases[contrib.u][contrib.v]);
      basisCanvas.style.border = '2px solid var(--text-secondary)';
      basisCanvas.style.borderRadius = '4px';

      // Contenedor para el término completo
      const termContainer = document.createElement('div');
      termContainer.style.display = 'inline-flex';
      termContainer.style.alignItems = 'center';
      termContainer.style.verticalAlign = 'middle';

      termContainer.appendChild(coeffSpan);
      termContainer.appendChild(multSign);
      termContainer.appendChild(basisCanvas);

      equationContainer.appendChild(termContainer);
    });

    // Si hay más términos, agregar "..."
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

// Renderizar las bases originales de la DCT (sin coeficientes)
function renderPopupBases() {
  // Solo renderizar si está vacío para no rehacerlo cada vez
  if (popupBasisContainer.innerHTML !== '') return;
  
  popupBasisContainer.innerHTML = '';

  for (let u = 0; u < N; u++) {
    for (let v = 0; v < N; v++) {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      canvas.title = `B(${u},${v})`; // Tooltip con índice

      // Dibujar la base original B_{u,v}(x,y) sin multiplicar por coeficiente
      drawBasisOnCanvas(canvas, bases[u][v]);
      
      popupBasisContainer.appendChild(canvas);
    }
  }
}

// Botón principal
document.getElementById('dctButton').addEventListener('click', () => {
  // Show results panels
  document.querySelectorAll('.results-panel').forEach(panel => {
    panel.style.display = 'block';
  });

  const S = dct2D(block);
  lastS = S;
  renderCoeffTable(S);
  renderBasisContributions(S);
});

// Inicializar
createInputGrid();
// renderOriginalBases(); // No longer needed on init

// --- Quantization & JPEG Compression Logic ---

// Standard JPEG Luminance Quantization Matrix
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

// Zig-zag scan pattern for 8x8 matrix (JPEG standard)
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

// Calculate RLE byte estimation for a coefficient matrix
// This simulates the JPEG RLE encoding process
function calculateRLEByteEstimation(matrix) {
  // Convert matrix to zig-zag order
  const zigzagValues = zigzagOrder.map(([i, j]) => Math.round(matrix[i][j]));

  let byteCount = 0;
  let zeroRunLength = 0;

  for (let i = 0; i < zigzagValues.length; i++) {
    const value = zigzagValues[i];

    if (value === 0) {
      zeroRunLength++;

      // If we have 16 zeros in a row, encode as ZRL (Zero Run Length) symbol
      if (zeroRunLength === 16) {
        byteCount += 2; // ZRL symbol is typically 2 bytes
        zeroRunLength = 0;
      }
    } else {
      // Non-zero coefficient
      // Format: (run_length, size, value)
      // run_length: number of zeros before this coefficient (4 bits)
      // size: number of bits needed to represent the value (4 bits)
      // value: the actual coefficient value (variable bits)

      const absValue = Math.abs(value);
      const bitsNeeded = absValue === 0 ? 0 : Math.floor(Math.log2(absValue)) + 1;

      // Symbol byte: (run_length << 4) | size
      byteCount += 1; // Symbol byte

      // Value bytes: actual coefficient
      byteCount += Math.ceil(bitsNeeded / 8);

      zeroRunLength = 0;
    }
  }

  // If the remaining coefficients are all zeros, we add EOB (End of Block)
  if (zeroRunLength > 0) {
    byteCount += 1; // EOB is typically 1 byte
  }

  return byteCount;
}

// Inverse DCT 2D
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

// Apply Quantization
function applyQuantization(S, scale) {
  const Q_scaled = Array.from({ length: N }, () => Array(N).fill(0));
  const S_quant = Array.from({ length: N }, () => Array(N).fill(0));
  const S_recon = Array.from({ length: N }, () => Array(N).fill(0));

  for (let u = 0; u < N; u++) {
    for (let v = 0; v < N; v++) {
      // Scale Q matrix
      // Note: In real JPEG, scaling is more complex, but linear scaling is a good approximation for demo
      let qVal = Math.floor(Q_jpeg[u][v] * scale);
      if (qVal < 1) qVal = 1;
      Q_scaled[u][v] = qVal;

      // Quantize: Round(S / Q)
      S_quant[u][v] = Math.round(S[u][v] / qVal);

      // Dequantize: S' = S_quant * Q
      S_recon[u][v] = S_quant[u][v] * qVal;
    }
  }
  return { Q_scaled, S_quant, S_recon };
}

// Render a simple table for matrices
function renderMatrixTable(matrix, containerId, titleStr) {
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
      td.style.border = '1px solid var(--border-color)';
      td.style.padding = '4px';
      td.style.textAlign = 'center';
      td.style.minWidth = '24px';

      // Highlight zeros in quantized matrix for visibility
      if (matrix[i][j] === 0) {
        td.style.color = 'var(--text-secondary)';
        td.style.opacity = '0.5';
      }

      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  container.appendChild(table);
}

// Render difference map
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

  // Calculate differences
  let maxDiff = 0;
  const diffs = Array.from({ length: N }, () => Array(N).fill(0));

  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      const diff = Math.abs(original[x][y] - reconstructed[x][y]);
      diffs[x][y] = diff;
      if (diff > maxDiff) maxDiff = diff;
    }
  }

  // Draw
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      // Amplify difference for visibility (e.g. x10), clamp to 255
      // Display as heat map: Black (0) -> Red (High error)
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
  desc.style.color = '#666';
  desc.style.textAlign = 'center';
  container.appendChild(desc);
}

// Main function to update quantization panel
function updateQuantizationPanel() {
  if (!lastS || !lastBlock) return;

  const quantSlider = document.getElementById('quantScaleSlider');
  const scale = parseFloat(quantSlider.value);
  document.getElementById('quantScaleValue').textContent = scale.toFixed(1);
  updateSliderBackground(quantSlider);

  const { Q_scaled, S_quant, S_recon } = applyQuantization(lastS, scale);

  // 0. Show Original DCT Coefficients
  // Create a rounded version for display (to match the look of quantized ones)
  const S_rounded = lastS.map(row => row.map(val => Math.round(val)));
  renderMatrixTable(S_rounded, 'originalDctContainer');

  // 1. Show Q Matrix
  renderMatrixTable(Q_scaled, 'qMatrixContainer');

  // 2. Show Quantized Coefficients
  renderMatrixTable(S_quant, 'quantCoeffsContainer');

  // 3. Show Original Block (Reference)
  const originalRefContainer = document.getElementById('originalRefContainer');
  originalRefContainer.innerHTML = '';
  const originalCanvas = document.createElement('canvas');
  originalCanvas.width = 128;
  originalCanvas.height = 128;
  drawOriginalBlockOnCanvas(originalCanvas, lastBlock);
  originalRefContainer.appendChild(originalCanvas);

  // Add RLE byte estimation for original DCT
  const originalRleBytes = calculateRLEByteEstimation(lastS);
  const originalRleLabel = document.createElement('div');
  originalRleLabel.textContent = `RLE: ~${originalRleBytes} bytes`;
  originalRleLabel.style.fontSize = '0.85rem';
  originalRleLabel.style.marginTop = '8px';
  originalRleLabel.style.fontWeight = '600';
  originalRleLabel.style.color = '#1e40af';
  originalRleLabel.style.textAlign = 'center';
  originalRefContainer.appendChild(originalRleLabel);

  // 4. Reconstruct Image (IDCT)
  const reconstructedBlock = idct2D(S_recon);

  // Render Reconstructed Block
  const reconContainer = document.getElementById('reconstructedContainer');
  reconContainer.innerHTML = '';
  const reconCanvas = document.createElement('canvas');
  reconCanvas.width = 128;
  reconCanvas.height = 128;

  // Use drawOriginalBlockOnCanvas for consistent [0,255] rendering
  drawOriginalBlockOnCanvas(reconCanvas, reconstructedBlock);

  // Add hover effect to show original
  reconCanvas.style.cursor = 'pointer';
  reconCanvas.title = t('hoverOriginal');

  reconCanvas.addEventListener('mouseenter', () => {
    drawOriginalBlockOnCanvas(reconCanvas, lastBlock);
  });

  reconCanvas.addEventListener('mouseleave', () => {
    drawOriginalBlockOnCanvas(reconCanvas, reconstructedBlock);
  });

  reconContainer.appendChild(reconCanvas);

  // Add RLE byte estimation for quantized coefficients
  const quantRleBytes = calculateRLEByteEstimation(S_quant);
  const quantRleLabel = document.createElement('div');
  quantRleLabel.textContent = `RLE: ~${quantRleBytes} bytes`;
  quantRleLabel.style.fontSize = '0.85rem';
  quantRleLabel.style.marginTop = '8px';
  quantRleLabel.style.fontWeight = '600';
  quantRleLabel.style.color = '#15803d';
  quantRleLabel.style.textAlign = 'center';
  reconContainer.appendChild(quantRleLabel);

  // Add compression ratio information
  if (originalRleBytes > 0) {
    const compressionRatio = ((1 - quantRleBytes / originalRleBytes) * 100).toFixed(1);
    const compressionInfo = document.createElement('div');
    compressionInfo.textContent = `${compressionRatio}% reducción`;
    compressionInfo.style.fontSize = '0.75rem';
    compressionInfo.style.marginTop = '4px';
    compressionInfo.style.color = '#16a34a';
    compressionInfo.style.textAlign = 'center';
    reconContainer.appendChild(compressionInfo);
  }

  // 5. Show Difference
  renderDifference(lastBlock, reconstructedBlock);
}

// Event Listeners for Quantization
document.getElementById('quantScaleSlider').addEventListener('input', (e) => {
  document.getElementById('quantScaleValue').textContent = parseFloat(e.target.value).toFixed(1);
  updateSliderBackground(e.target);
});

// Initialize quant scale slider background
if (quantScaleSlider) updateSliderBackground(quantScaleSlider);

document.getElementById('applyQuantButton').addEventListener('click', () => {
  updateQuantizationPanel();
});

// Hook into the main DCT button to also update quantization if visible
const originalDctBtn = document.getElementById('dctButton');
// We can't easily remove the anonymous listener, but we can add another one
originalDctBtn.addEventListener('click', () => {
  // Capture the current block state when DCT is calculated
  lastBlock = block.map(row => [...row]);

  // Wait a bit for lastS to be updated
  setTimeout(updateQuantizationPanel, 0);
});