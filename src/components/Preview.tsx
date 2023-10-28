import Card from "./Card";
import AlbertEinstein from "../assets/albert_einstein.png";

type PreviewProps = {
  classes?: string;
  backgroundColor?: string;
  textColor?: string;
};

const Preview = ({ classes, backgroundColor, textColor }: PreviewProps) => {
  return (
    <Card classes={`${classes}`}>
      <div
        className="w-full h-auto md:h-96 p-4 rounded-lg flex flex-col flex-auto justify-between"
        style={{ backgroundColor: backgroundColor, color: textColor }}
      >
        <p className="md:text-7xl align-text-bottom">❝</p>
        <div className="text-center grid gap-2 justify-items-center">
          {/* https://www.deviantart.com/vasilart/art/Albert-Einstein-527618252 */}
          <img
            src={AlbertEinstein}
            className={`md:h-32 md:w-32 object-contain`}
            alt="Albert Einstein"
          />
          <p className="text-sm md:text-xl font-bold">
            Life is like riding a bicycle. To keep your balance, you must keep
            moving
          </p>
          <p className="text-xs md:text-base">- Albert Einstein -</p>
        </div>
        <p className="md:text-7xl text-right">❞</p>
      </div>
    </Card>
  );
};

export default Preview;
