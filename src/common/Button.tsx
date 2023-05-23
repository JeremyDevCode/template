import type { ReactNode } from "react";

interface ButtonProps {
  content: string;
  icon?: ReactNode;
}

const Button = ({ content, icon }: ButtonProps) => {
  return (
    <button className="flex items-center justify-center gap-4 rounded-lg border-t-2 border-[#25262E] bg-[#0f1115] px-[40px] py-[15px] text-[#E6E6E6]">
      <span className="text-[32px] font-medium">{content}</span>
      {icon}
    </button>
  );
};

export default Button;
