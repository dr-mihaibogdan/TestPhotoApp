const getColorContrast = (hex: string) => {
  if (hex.indexOf('#') === 0) {
    hex = hex.slice(1);
  }

  if (hex.length === 4) {
    hex = hex.substring(0, 2);
  }
  if (hex.length === 8) {
    hex = hex.substring(0, 5);
  }
  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  if (hex.length !== 6) {
    throw new Error('Invalid HEX color.');
  }
  // invert color components
  const red = parseInt(hex.slice(0, 2), 16),
    green = parseInt(hex.slice(2, 4), 16),
    blue = parseInt(hex.slice(4, 6), 16);
  // pad each with zeros and return
  return red * 0.299 + green * 0.587 + blue * 0.114 > 186 ? '#000' : '#fff';
};

export default getColorContrast;
