function lightenHexColor(hexColor, percent) {
  // Remove '#' if present
  hexColor = hexColor.replace("#", "");

  // Convert hex to RGB
  const r = parseInt(hexColor.substring(0, 2), 16);
  const g = parseInt(hexColor.substring(2, 4), 16);
  const b = parseInt(hexColor.substring(4, 6), 16);

  // Calculate the new RGB values
  const newR = Math.min(255, r + (255 - r) * (percent / 100));
  const newG = Math.min(255, g + (255 - g) * (percent / 100));
  const newB = Math.min(255, b + (255 - b) * (percent / 100));

  // Convert new RGB to hex
  const newHexColor = ((1 << 24) | (newR << 16) | (newG << 8) | newB)
    .toString(16)
    .slice(1);
  return `#${newHexColor}`;
}

// Example usage
const originalColor = "#3498db"; // Replace with your hex color code
const lighterColor = lightenHexColor(originalColor, 20); // 20% lighter

export function generateColorset(color) {
  let colorSet = [];
  for (let i = 0; i < 8; i++) {
    colorSet.push(lightenHexColor(color, 10 * (i + 1)));
  }
  return colorSet;
}
