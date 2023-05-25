import type { ComponentProps, FC } from "react";

const ExternalIcon: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M7 17L17 7"></path>
    <path d="M7 7L17 7 17 17"></path>
  </svg>
);

export default ExternalIcon;
