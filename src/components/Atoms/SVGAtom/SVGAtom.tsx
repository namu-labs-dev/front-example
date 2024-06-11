"use client";
import * as svgs from "public/svgs";
import React from "react";

type Props = {
  iconName: keyof typeof svgs;
  color?: string;
  width?: number;
  height?: number;
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
};

const SVGAtom = (props: Props) => {
  return React.createElement(svgs[props.iconName], {
    width: props.width ?? undefined,
    height: props.height ?? undefined,
    color: props.color ?? undefined,
    onClick: props.onClick ?? undefined,
    style: props.style ?? undefined,
    className: props.className ?? undefined,
  });
};

export default SVGAtom;
