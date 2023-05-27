import type { FC } from "react";
import type Props from "./props.types";

const StarIcon: FC<Props> = ({ className }) => (
  <svg
    viewBox="0 0 32 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M0 16.5C8.83656 16.5 16 9.33656 16 0.5C16 9.33656 23.1634 16.5 32 16.5C23.1634 16.5 16 23.6634 16 32.5C16 23.6634 8.83656 16.5 0 16.5Z"
      fill="url(#paint0_linear_109_211)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_109_211"
        x1="15.875"
        y1="2.85294"
        x2="15.8749"
        y2="30.6176"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DCFFDD" />
        <stop offset="1" stopColor="#4AF75B" />
      </linearGradient>
    </defs>
  </svg>
);

export default StarIcon;
