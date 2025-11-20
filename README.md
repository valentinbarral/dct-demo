# DCT 2D 8×8 Demo

You can access the application here: [https://valentinbarral.github.io/dct-demo/](https://valentinbarral.github.io/dct-demo/)

An interactive web application for visualizing the 2D Discrete Cosine Transform (DCT) on 8×8 pixel blocks and simulating JPEG quantization. This educational tool helps understand how DCT decomposes images into frequency components and how lossy compression works.

## Features

### Block Editor
- **Interactive 8×8 grid**: Click or drag to paint pixels with values from 0 (black) to 255 (white).
- **Value slider**: Adjust the current painting value with visual color feedback.
- **Fill button**: Fill the entire block with the current value.
- **Invert colors**: Invert all pixel values (v -> 255-v).
- **Predefined patterns**:
  - Horizontal gradient: Linear gradient from black (0) to white (255) left to right.
  - Vertical gradient: Linear gradient from black (0) to white (255) top to bottom.
  - Chess board: Alternating black and white squares.
  - Diagonal: Pattern based on distance from the main diagonal.
  - Circle: Circular pattern with white center and black edges.

### DCT Visualization
- **Coefficient table**: Shows all 64 DCT coefficients S_u,v in a table format.
- **Coefficient heatmap**: Visual representation where:
  - **Yellow** = High absolute values
  - **Dark green** = Low absolute values
  - **Black** = Zero or near-zero values (< 0.001)
- **Reconstruction equation**: Visual representation of how the original block equals the sum of DCT bases multiplied by their coefficients. Only non-zero coefficients are shown in the equation.
- **Basis Popup**: View all 64 original DCT basis functions B_u,v(x,y) in a dedicated popup window.

### JPEG Quantization and Compression
- **Quantization Simulation**: Simulates the JPEG quantization process using a standard luminance matrix.
- **Quality Control**: Adjust the quantization scale factor (quality) using a slider.
- **Matrix Visualization**:
  - **Q Matrix**: View the current Quantization Matrix.
  - **Quantized Coefficients**: See the result of dividing DCT coefficients by Q and rounding.
- **RLE Estimation**: Estimates the byte size of the compressed data using Run-Length Encoding logic.
- **Reconstruction and Error**:
  - **Reconstructed Block**: Visualizes the block after Inverse DCT (IDCT).
  - **Difference Map**: Shows the error between the original and reconstructed block (amplified for visibility).
  - **Hover Comparison**: Hover over the reconstructed block to quickly compare with the original.

### Interface
- **Theme Selector**: Toggle between Light and Dark modes.
- **Internationalization**: Support for Spanish (Es), English (En), and Galician (Gl).

## How It Works

1. **Create a block**: Paint pixels in the 8×8 grid or use predefined patterns.
2. **Calculate DCT**: Click "Calcular DCT 2D" (or equivalent in selected language) to compute the 2D DCT coefficients.
3. **Analyze results**:
   - View coefficients in the table and heatmap.
   - Understand the reconstruction equation.
   - Use the "Ver bases originales" button to see the basis functions.
4. **Simulate Compression**:
   - Scroll down to the Quantization section.
   - Adjust the Quality slider to see how it affects the reconstructed image and the file size (RLE).

## Technical Details

- **DCT Type**: JPEG-style 2D DCT (Type II).
- **Block size**: 8×8 pixels.
- **Basis normalization**: Bases are normalized to [-1, 1] range for visualization.
- **Compression**: Simulation based on standard JPEG luminance quantization tables and Zig-Zag scanning with RLE estimation.

## Files

- `index.html`: Main HTML structure.
- `styles.css`: Styling, themes, and layout.
- `script.js`: Application logic, DCT/IDCT computation, and interactions.

## License

This work is licensed under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/).

**Author**: Valentin Barral

You are free to:
- **Share** — copy and redistribute the material in any medium or format
- **Adapt** — remix, transform, and build upon the material for any purpose, even commercially

Under the following terms:
- **Attribution** — You must give appropriate credit to Valentin Barral, provide a link to the license, and indicate if changes were made.
