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
  return validRgbRegEx.test(rgb);
};

export const convertShortHexToLong = (hex: string) => {
  return hex[0] + hex[1].repeat(2) + hex[2].repeat(2) + hex[3].repeat(2);
};

export const convertToHex = (color: string) => {
  const sanitizedString = color.replace(/\s/g, "").toLowerCase();
  const isHex = sanitizedString.indexOf("#") === 0;
  const isRgb = sanitizedString.indexOf("rgb") === 0;

  if (isHex && isValidHex(sanitizedString)) {
    if (sanitizedString.length === 4) {
      return convertShortHexToLong(sanitizedString);
    }
    return sanitizedString;
  }

  if (isRgb && isValidRgb(sanitizedString)) {
    return rgbToHex(sanitizedString);
  }

  return cSSColorsToHex(sanitizedString);
};

export const hexToRgb = (hex: string) => {
  return {
    r: parseInt(hex.slice(1, 3), 16),
    g: parseInt(hex.slice(3, 5), 16),
    b: parseInt(hex.slice(5, 7), 16),
  };
};
