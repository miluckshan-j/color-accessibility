import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import ColorSelector from "./components/ColorSelector";
import RatioCard from "./components/RatioCard";
import { contrastRatio, convertToHex, hexToRgb } from "./utils/colors";

type colorsType = {
  backgroundColor: string;
  textColor: string;
};

const calculateColorRatio = (colors: colorsType) => {
  const ratio = contrastRatio(
    hexToRgb(colors.textColor),
    hexToRgb(colors.backgroundColor)
  ).toPrecision(3);
  return {
    value: ratio + ":1",
    normalLevelAA: parseFloat(ratio) > 4.5 ? "Pass" : "Fail",
    normalLevelAAA: parseFloat(ratio) > 7 ? "Pass" : "Fail",
    largeLevelAA: parseFloat(ratio) > 3 ? "Pass" : "Fail",
    largeLevelAAA: parseFloat(ratio) > 4.5 ? "Pass" : "Fail",
    uILevelAA: parseFloat(ratio) > 3 ? "Pass" : "Fail",
  };
};

function App() {
  const [colors, setColors] = useState({
    backgroundColor: "#ACC8E5",
    textColor: "#112A46",
  } as colorsType);
  const [validColors, setValidColors] = useState({
    backgroundColor: "#ACC8E5",
    textColor: "#112A46",
  } as colorsType);
  const [ratios, setRatios] = useState(calculateColorRatio(colors));

  useEffect(() => {
    const hexCode = convertToHex(validColors.backgroundColor);
    if (hexCode) {
      setRatios(calculateColorRatio(validColors));
    }
  }, [colors.backgroundColor]);

  useEffect(() => {
    const hexCode = convertToHex(validColors.textColor);
    if (hexCode) {
      setRatios(calculateColorRatio(validColors));
    }
  }, [colors.textColor]);

  const onBackgroundChange = (event: React.FormEvent<HTMLInputElement>) => {
    setColors({ ...colors, backgroundColor: event.currentTarget.value });
    const hexCode = convertToHex(event.currentTarget.value);
    if (hexCode) {
      setValidColors({ ...validColors, backgroundColor: hexCode });
    }
  };

  const onTextChange = (event: React.FormEvent<HTMLInputElement>) => {
    setColors({ ...colors, textColor: event.currentTarget.value });
    const hexCode = convertToHex(event.currentTarget.value);
    if (hexCode) {
      setValidColors({ ...validColors, textColor: hexCode });
    }
  };

  const onBackgroundBlur = (event: React.FormEvent<HTMLInputElement>) => {
    const hexCode = convertToHex(event.currentTarget.value);
    if (hexCode) {
      setColors({ ...colors, backgroundColor: hexCode });
      setValidColors({ ...validColors, backgroundColor: hexCode });
    } else {
      setColors({ ...colors, backgroundColor: validColors.backgroundColor });
    }
  };

  const onTextBlur = (event: React.FormEvent<HTMLInputElement>) => {
    const hexCode = convertToHex(event.currentTarget.value);
    if (hexCode) {
      setColors({ ...colors, textColor: hexCode });
      setValidColors({ ...validColors, textColor: hexCode });
    } else {
      setColors({ ...colors, textColor: validColors.textColor });
    }
  };

  return (
    <>
      <header className="my-4 p-2">
        <h1 className="text-2xl font-bold">Color Contrast Checker</h1>
      </header>
      <main className="mt-8 p-2">
        <div className="grid gap-4 md:gap-8 md:grid-cols-7">
          <ColorSelector
            classes="md:col-span-3 !p-0"
            heading="Background"
            color={colors.backgroundColor}
            onChange={onBackgroundChange}
            onBlur={onBackgroundBlur}
          />
          <div className="flex justify-center items-center">
            <button className="px-4 py-2 bg-slate-200 rounded-lg">Flip</button>
          </div>
          <ColorSelector
            classes="md:col-span-3 !p-0"
            heading="Text"
            color={colors.textColor}
            onChange={onTextChange}
            onBlur={onTextBlur}
          />
          <Card classes="md:col-span-7 grid gap-4 md:grid-cols-6 border-0">
            <div className="md:col-span-6 text-center">
              <p>Contrast Ratio</p>
              <p className="text-2xl font-semibold">{ratios.value}</p>
            </div>
            <RatioCard
              classes="md:col-span-2 grid gap-4 md:grid-cols-2"
              heading="Normal Text"
              level2A={ratios.normalLevelAA}
              level3A={ratios.normalLevelAAA}
            />
            <RatioCard
              classes="md:col-span-2 grid gap-4 md:grid-cols-2"
              heading="Large Text"
              level2A={ratios.largeLevelAA}
              level3A={ratios.largeLevelAAA}
            />
            <RatioCard
              classes="md:col-span-2 grid gap-4 md:grid-cols-2"
              heading="UI Components"
              level2A={ratios.uILevelAA}
            />
          </Card>
        </div>
      </main>
    </>
  );
}

export default App;
