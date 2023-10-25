import Card from "./Card";

type RatioCardProps = {
  classes?: string;
  heading?: string;
  level2A?: string;
  level3A?: string;
};

type RatioCardElementProps = {
  heading?: string;
  levelHeading?: string;
  status?: string;
};

const RatioCardElement = ({
  heading,
  levelHeading,
  status,
}: RatioCardElementProps) => {
  return (
    <div
      className={`${
        heading === "UI Components" ? "md:col-span-2" : "md:col-span-1"
      } grid gap-2 justify-center text-center`}
    >
      <p className="text-sm">{levelHeading}</p>
      <p
        className={`text-sm px-4 py-1 ${
          status === "Pass" ? "bg-green-600" : "bg-red-600"
        } text-white rounded-lg`}
      >
        {status}
      </p>
    </div>
  );
};

const RatioCard = ({ classes, heading, level2A, level3A }: RatioCardProps) => {
  return (
    <Card classes={`${classes}`}>
      <p className="md:col-span-2 text-sm text-center">{heading}</p>
      {level2A ? (
        <RatioCardElement
          heading={heading}
          levelHeading="WCAG AA"
          status={level2A}
        />
      ) : null}
      {level3A ? (
        <RatioCardElement levelHeading="WCAG AAA" status={level3A} />
      ) : null}
    </Card>
  );
};

export default RatioCard;
