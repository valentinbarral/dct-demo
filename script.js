// Translations
const translations = {
  es: {
    title: "Bloque 8×8 y DCT 2D",
    instructions: '1️⃣ Elige un valor (0 = negro, 255 = blanco) y haz clic en las celdas para pintarlas.<br>2️⃣ Puedes arrastrar el cursor sobre las celdas para pintar múltiples cuadrados.<br>3️⃣ Pulsa <strong>"Calcular DCT 2D"</strong> para ver los coeficientes y las bases DCT multiplicadas por su coeficiente.',
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
    absValueLabel: "Valor absoluto (amarillo = alto, verde = bajo, negro=0)"
  },
  en: {
    title: "8×8 Block and 2D DCT",
    instructions: '1️⃣ Choose a value (0 = black, 255 = white) and click on cells to paint them.<br>2️⃣ You can drag the cursor over cells to paint multiple squares.<br>3️⃣ Click <strong>"Calculate 2D DCT"</strong> to see the coefficients and DCT bases multiplied by their coefficient.',
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
    absValueLabel: "Absolute value (yellow = high, green = low, black=0)"
  },
  gl: {
    title: "Bloque 8×8 e DCT 2D",
    instructions: '1️⃣ Elixe un valor (0 = negro, 255 = branco) e fai clic nas celas para pintalas.<br>2️⃣ Podes arrastrar o cursor sobre as celas para pintar múltiples cadrados.<br>3️⃣ Preme <strong>"Calcular DCT 2D"</strong> para ver os coeficientes e as bases DCT multiplicadas polo seu coeficiente.',
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
    absValueLabel: "Valor absoluto (amarelo = alto, verde = baixo, negro=0)"
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
  document.getElementById('instructions').innerHTML = t.instructions;
  document.getElementById('currentValueLabel').textContent = t.currentValue;
  document.getElementById('patternsLabel').textContent = t.patterns;
  document.getElementById('coeffTitle').innerHTML = t.coeffTitle;
  document.getElementById('reconstructionTitle').innerHTML = t.reconstructionTitle;
  document.getElementById('reconstructionDesc').textContent = t.reconstructionDesc;
  document.getElementById('basesTitle').innerHTML = t.basesTitle;
  document.getElementById('basesDesc').textContent = t.basesDesc;
  
  // Update buttons with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.textContent = t[key];
    }
  });
  
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

const inputGrid = document.getElementById('inputGrid');
const slider = document.getElementById('valueSlider');
const valueLabel = document.getElementById('valueLabel');
const coeffContainer = document.getElementById('coeffContainer');
const basisContainer = document.getElementById('basisContainer');
const sumVisualization = document.getElementById('sumVisualization');
const originalBasisContainer = document.getElementById('originalBasisContainer');
const languageSelector = document.getElementById('languageSelector');

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
});

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
  const table = document.createElement('table');
  table.id = 'coeffTable';

  // Cabecera columnas v
  const headerRow = document.createElement('tr');
  const corner = document.createElement('th');
  corner.textContent = 'u\\v';
  headerRow.appendChild(corner);
  for (let v = 0; v < N; v++) {
    const th = document.createElement('th');
    th.textContent = v;
    headerRow.appendChild(th);
  }
  table.appendChild(headerRow);

  // Filas
  for (let u = 0; u < N; u++) {
    const tr = document.createElement('tr');
    const th = document.createElement('th');
    th.textContent = u;
    tr.appendChild(th);
    for (let v = 0; v < N; v++) {
      const td = document.createElement('td');
      td.textContent = S[u][v].toFixed(1);
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }

  // Crear contenedor flex para tabla y visualización
  const flexContainer = document.createElement('div');
  flexContainer.style.display = 'flex';
  flexContainer.style.gap = '20px';
  flexContainer.style.alignItems = 'flex-start';
  flexContainer.style.flexWrap = 'wrap';

  // Añadir tabla
  flexContainer.appendChild(table);

  // Crear visualización de píxeles (cuadrícula 8x8)
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
    msg.style.color = '#666';
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
    originalCanvas.style.border = '2px solid #333';
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
    equalsSign.style.color = '#333';
    equalsSign.style.lineHeight = '1';

    const freqLabel = document.createElement('div');
    freqLabel.textContent = t('inFrequency');
    freqLabel.style.fontSize = '0.75rem';
    freqLabel.style.color = '#666';
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
      basisCanvas.style.border = '2px solid #333';
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
function renderOriginalBases() {
  originalBasisContainer.innerHTML = '';

  for (let u = 0; u < N; u++) {
    for (let v = 0; v < N; v++) {
      const item = document.createElement('div');
      item.className = 'basis-item';

      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;

      // Dibujar la base original B_{u,v}(x,y) sin multiplicar por coeficiente
      // Usar drawBasisOnCanvas para mapear correctamente [-1,1] a [0,255]
      drawBasisOnCanvas(canvas, bases[u][v]);

      const label = document.createElement('div');
      label.innerHTML = `B<sub>${u},${v}</sub>(x,y)`;

      item.appendChild(canvas);
      item.appendChild(label);
      originalBasisContainer.appendChild(item);
    }
  }
}

// Botón principal
document.getElementById('dctButton').addEventListener('click', () => {
  const S = dct2D(block);
  lastS = S;
  renderCoeffTable(S);
  renderBasisContributions(S);
});

// Inicializar
createInputGrid();
renderOriginalBases();

