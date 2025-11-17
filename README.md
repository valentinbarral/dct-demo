# DCT 2D 8×8 Demo

An interactive web application for visualizing the 2D Discrete Cosine Transform (DCT) on 8×8 pixel blocks. This educational tool helps understand how DCT decomposes images into frequency components.

## Features

### Block Editor
- **Interactive 8×8 grid**: Click or drag to paint pixels with values from 0 (black) to 255 (white)
- **Value slider**: Adjust the current painting value
- **Fill button**: Fill the entire block with the current value
- **Invert colors**: Invert all pixel values (v → 255-v)
- **Predefined patterns**:
  - Horizontal gradient: Linear gradient from black (0) to white (255) left to right
  - Vertical gradient: Linear gradient from black (0) to white (255) top to bottom
  - Chess board: Alternating black and white squares
  - Diagonal: Pattern based on distance from the main diagonal
  - Circle: Circular pattern with white center and black edges

### DCT Visualization
- **Coefficient table**: Shows all 64 DCT coefficients S<sub>u,v</sub> in a table format
- **Coefficient heatmap**: Visual representation where:
  - **Yellow** = High absolute values
  - **Dark green** = Low absolute values
  - **Black** = Zero or near-zero values (< 0.001)
- **Reconstruction equation**: Visual representation of how the original block equals the sum of DCT bases multiplied by their coefficients:
  ```
  Original Block = Σ S_{u,v} · B_{u,v}(x,y)
  ```
  Only non-zero coefficients are shown in the equation.

### DCT Basis Reference
- **All 64 DCT bases**: Complete reference showing all B<sub>u,v</sub>(x,y) basis functions
- **Normalized visualization**: Bases are normalized so constant bases (like DC) appear as gray

## How It Works

1. **Create a block**: Paint pixels in the 8×8 grid or use predefined patterns
2. **Calculate DCT**: Click "Calcular DCT 2D" to compute the 2D DCT coefficients
3. **Analyze results**:
   - View coefficients in the table
   - See the heatmap visualization
   - Understand the reconstruction equation
   - Reference the original DCT bases

## Technical Details

- **DCT Type**: JPEG-style 2D DCT (Type II)
- **Block size**: 8×8 pixels
- **Coefficient range**: Values are normalized and displayed with appropriate scaling
- **Basis normalization**: Bases are normalized to [-1, 1] range for visualization

## Files

- `index.html`: Main HTML structure
- `styles.css`: Styling and layout
- `script.js`: Application logic and DCT computation

## License

This work is licensed under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/).

**Author**: Valentin Barral

You are free to:
- **Share** — copy and redistribute the material in any medium or format
- **Adapt** — remix, transform, and build upon the material for any purpose, even commercially

Under the following terms:
- **Attribution** — You must give appropriate credit to Valentin Barral, provide a link to the license, and indicate if changes were made.

