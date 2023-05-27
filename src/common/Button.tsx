import type { ReactNode } from "react";

interface ButtonProps {
  content: string;
  icon?: ReactNode;
}

const Button = ({ content, icon }: ButtonProps) => {
  return (
    <button className="flex items-center justify-center gap-4 rounded-lg border-t-2 border-[#25262E] bg-[#0f1115] px-6 py-2 sm:px-10 sm:py-4 text-[#E6E6E6]">
      <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium">
        {content}
      </span>
      {icon}
    </button>
  );
};

export default Button;
