import type { FC } from "react";
import type Props from "./props.types";

const GithubIcon: FC<Props> = ({ className }) => (
  <svg
    width="65"
    height="64"
    viewBox="0 0 65 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M32.3335 3.13237e-05C28.1312 3.12179e-05 23.97 0.848285 20.0876 2.49636C16.2052 4.14444 12.6776 6.56006 9.70608 9.60531C3.70492 15.7555 0.333497 24.0969 0.333498 32.7945C0.333498 47.2896 9.5175 59.5876 22.2215 63.9492C23.8215 64.2116 24.3335 63.195 24.3335 62.3095L24.3335 56.7672C15.4695 58.7349 13.5815 52.3728 13.5815 52.3728C12.1095 48.5686 10.0295 47.552 10.0295 47.552C7.1175 45.5187 10.2535 45.5843 10.2535 45.5843C13.4535 45.8139 15.1495 48.9622 15.1495 48.9622C17.9335 53.9469 22.6375 52.4712 24.4615 51.6841C24.7495 49.5525 25.5815 48.1095 26.4775 47.2896C19.3735 46.4698 11.9175 43.6495 11.9175 31.1548C11.9175 27.5146 13.1335 24.5959 15.2135 22.2675C14.8935 21.4476 13.7735 18.037 15.5335 13.6097C15.5335 13.6097 18.2215 12.7243 24.3335 16.9548C26.8615 16.2333 29.6135 15.8726 32.3335 15.8726C35.0535 15.8726 37.8055 16.2333 40.3335 16.9548C46.4455 12.7243 49.1335 13.6097 49.1335 13.6097C50.8935 18.037 49.7735 21.4476 49.4535 22.2675C51.5335 24.5959 52.7495 27.5146 52.7495 31.1548C52.7495 43.6823 45.2615 46.437 38.1255 47.2569C39.2775 48.2735 40.3335 50.2739 40.3335 53.3238L40.3335 62.3095C40.3335 63.195 40.8455 64.2444 42.4775 63.9492C55.1815 59.5548 64.3335 47.2896 64.3335 32.7945C64.3335 28.4879 63.5058 24.2234 61.8976 20.2446C60.2895 16.2658 57.9324 12.6506 54.9609 9.60531C51.9894 6.56006 48.4618 4.14444 44.5794 2.49636C40.6969 0.848286 36.5358 3.14296e-05 32.3335 3.13237e-05Z"
      fill="currentColor"
    />
  </svg>
);

export default GithubIcon;
