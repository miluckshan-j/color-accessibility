import Card from "./Card";

type Props = {
  classes?: string;
  color?: string;
};

const ColorSelector = ({ classes, color }: Props) => {
  return (
    <Card classes={`${classes}`}>
      <input type="text" placeholder="#" className="w-full p-4 rounded-lg" />
      <div
        style={{ backgroundColor: color }}
        className="w-full h-32 md:h-64 rounded-b-lg"
      ></div>
    </Card>
  );
};

export default ColorSelector;
