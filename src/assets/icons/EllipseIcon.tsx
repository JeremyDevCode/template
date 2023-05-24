import type { ComponentProps, FC } from "react";

const EllipseIcon: FC<ComponentProps<"svg">> = (props) => (
  <svg
    width="16"
    height="33"
    viewBox="0 0 16 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      y="0.5"
      width="16"
      height="32"
      rx="8"
      fill="url(#paint0_linear_109_219)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_109_219"
        x1="7.9375"
        y1="2.85294"
        x2="7.93727"
        y2="30.6176"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#138EFF" />
        <stop offset="0.990237" stopColor="#1DD7F0" />
      </linearGradient>
    </defs>
  </svg>
);

export default EllipseIcon;
