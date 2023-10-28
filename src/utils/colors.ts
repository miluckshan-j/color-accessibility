import {
  redConstant,
  greenConstant,
  blueConstant,
  gammaConstant,
  cSSColors,
  rgbType,
  validHexRegEx,
  validRgbRegEx,
} from "../helpers/colors";

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
    if (sanitizedString.length === 4 || sanitizedString.length === 5) {
      return convertShortHexToLong(sanitizedString);
    }
    return sanitizedString;
  }

  if (isRgb && isValidRgb(sanitizedString)) {
    return rgbToHex(sanitizedString);
  }

  return cSSColorsToHex(sanitizedString);
};

export const hexToRgb = (hex: string): rgbType => {
  return {
    red: parseInt(hex.slice(1, 3), 16),
    green: parseInt(hex.slice(3, 5), 16),
    blue: parseInt(hex.slice(5, 7), 16),
  };
};

// https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-procedure
// https://stackoverflow.com/questions/9733288/how-to-programmatically-calculate-the-contrast-ratio-between-two-colors
const luminance = (rgb: rgbType) => {
  const sRgb = [rgb.red, rgb.green, rgb.blue].map((value) => {
    value = value / 255;
    return value <= 0.03928
      ? value / 12.92
      : Math.pow((value + 0.055) / 1.055, gammaConstant);
  });
  return (
    sRgb[0] * redConstant + sRgb[1] * greenConstant + sRgb[2] * blueConstant
  );
};

export const contrastRatio = (textColor: rgbType, backgroundColor: rgbType) => {
  const textColorLuminance = luminance(textColor);
  const backgroundColorLuminance = luminance(backgroundColor);
  const brightestColor = Math.max(textColorLuminance, backgroundColorLuminance);
  const darkestColor = Math.min(textColorLuminance, backgroundColorLuminance);
  return (brightestColor + 0.05) / (darkestColor + 0.05);
};
