import React from "react";
import { Svg, Line } from "react-native-svg";

export default function CustomBorderLineDashed({
  color,
  size,
  dashGap,
}) {
  return (
    <Svg height="3" width="100%">
      <Line
        stroke={color}
        strokeDasharray={dashGap}
        strokeWidth={size}
        x1="0"
        y1="1.5"
        x2="100%"
        y2="1.5"
      />
    </Svg>
  );
}
