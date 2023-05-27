import type { ComponentProps, FC } from "react";

interface CloseIconProps extends ComponentProps<"svg"> {
  className?: string;
}

export const CloseIcon: FC<CloseIconProps> = (props) => (
  <svg width="32px" height="32px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#797979" {...props}>
    <path d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243" stroke="#797979" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
  </svg>
)