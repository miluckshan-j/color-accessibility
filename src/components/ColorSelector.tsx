import { ChangeEventHandler, FocusEventHandler } from "react";
import Card from "./Card";

type ColorSelectorProps = {
  classes?: string;
  heading?: string;
  color?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
};

const ColorSelector = ({
  classes,
  heading,
  color,
  onChange,
  onBlur,
}: ColorSelectorProps) => {
  return (
    <Card classes={`${classes}`}>
      <p className="text-center p-4 pb-0">{heading}</p>
      <input
        type="text"
        placeholder="#"
        className="w-full p-4 rounded-lg"
        value={color?.toUpperCase()}
        onChange={onChange}
        onBlur={onBlur}
      />
      <div
        style={{ backgroundColor: color }}
        className="w-full h-32 md:h-64 rounded-b-lg"
      ></div>
    </Card>
  );
};

export default ColorSelector;
