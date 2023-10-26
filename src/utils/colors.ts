import { cSSColors, validHexRegEx, validRgbRegEx } from "../helpers/colors";

export const cSSColorsToHex = (color: string) => {
  const hex = Object.keys(cSSColors).findIndex(
    (key) => key === color.toLowerCase()
  );
  return hex ? cSSColors[color] : undefined;
};

export const isValidHex = (hex: string) => {
  return validHexRegEx.test(hex);
};

// https://stackoverflow.com/questions/13070054/convert-rgb-strings-to-hex-in-javascript
export const rgbToHex = (color: string) => {
  const removedParenthesisString = color.split("(")[1].split(")")[0];
  const rgbIntegers = removedParenthesisString.split(",");
  var hexValues = rgbIntegers.map((num) => {
    num = parseInt(num).toString(16);
    return num.length == 1 ? "0" + num : num;
  });
  return "#" + hexValues.join("");
};

export const isValidRgb = (rgb: string) => {
  const removedSpacesString = rgb.replace(/\s/g, "");
  return validRgbRegEx.test(removedSpacesString);
};
