import SVGAtom from "../SVGAtom/SVGAtom";

type Props = {
  title: string;
  selectedButton?: string;
  onSelect?: (buttonName: string) => void;
};

const FooterMenu = (props: {
  iconName: string;
  name: string;
  selectedButton?: string;
  onSelect?: (buttonName: string) => void;
  children?: React.ReactNode;
}) => {
  const { iconName, name, selectedButton, onSelect } = props;

  const isSelected = selectedButton === name;

  let cn = "flex h-full w-full cursor-pointer items-center justify-center";

  if (isSelected) {
    cn += " box-border border-t-2 border-[#00EC97]";
  }

  return (
    <div className={cn} onClick={() => onSelect && onSelect(name)}>
      <SVGAtom
        iconName={iconName as any}
        width={20}
        height={20}
        color={isSelected ? "white" : "#8C8C8C"}
        className="overflow-visible"
      />
    </div>
  );
};

export const BsangsFooterAtom = (props: Props) => {
  const { selectedButton, onSelect } = props;

  const buttons = [
    { iconName: "dollarCircle", name: "home" },
    { iconName: "message", name: "message" },
    { iconName: "wallet", name: "wallet" },
    { iconName: "history", name: "history" },
  ];

  return (
    <div className="flex h-[60px] items-center justify-between bg-black">
      {buttons.map((button) => {
        return (
          <FooterMenu
            key={button.name}
            iconName={button.iconName}
            name={button.name}
            selectedButton={selectedButton}
            onSelect={onSelect}
          />
        );
      })}
    </div>
  );
};
