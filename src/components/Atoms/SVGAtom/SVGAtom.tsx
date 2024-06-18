import * as svgs from "public/svgs";
import React from "react";

type Props = {
  iconName: keyof typeof svgs;
  color?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
  size?: "sm" | "md" | "lg";
  width?: number;
  height?: number;
};

const SVGAtom = (props: Props) => {
  const getSize = () => {
    if (props.width && props.height) {
      return { width: props.width, height: props.height };
    }

    switch (props.size) {
      case "sm":
        return { width: 18, height: 18 };
      case "md":
        return { width: 24, height: 24 };
      case "lg":
        return { width: 36, height: 36 };
      default:
        return { width: 24, height: 24 }; // Default to medium size
    }
  };

  const { width, height } = getSize();

  const svgProps = {
    color: props.color ?? undefined, // Remove null to let SVG default to its color
    onClick: props.onClick ?? undefined,
    style: {
      width: `${width}px`,
      height: `${height}px`,
      ...(props.style || {}), // Merge with any existing style props
    },
    className: props.className,
  };

  // Render the SVG component with props
  const SVGComponent = svgs[props.iconName];
  return (
    <span
      role="img"
      aria-label={props.iconName}
      style={{ display: "inline-block", ...svgProps.style }}
    >
      <SVGComponent {...svgProps} />
    </span>
  );
};

export default React.memo(SVGAtom);
