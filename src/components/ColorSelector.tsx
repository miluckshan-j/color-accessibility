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
      <p className="text-sm p-4 pb-0 text-slate-500">{heading}</p>
      <input
        type="text"
        placeholder="#"
        className="w-full p-4 pt-0 rounded-lg"
        value={color?.toUpperCase()}
        onChange={onChange}
        onBlur={onBlur}
      />
    </Card>
  );
};

export default ColorSelector;
