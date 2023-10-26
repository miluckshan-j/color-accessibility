import { cSSColors, validHexRegEx } from "../helpers/colors";

export const cSSColorsToHex = (color: string) => {
  const hex = Object.keys(cSSColors).findIndex(
    (key) => key === color.toLowerCase()
  );
  return hex ? cSSColors[color] : undefined;
};

export const isValidHex = (hex: string) => {
  return validHexRegEx.test(hex);
};
